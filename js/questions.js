// Biolingo Dynamic Question Generation Engine
// Procedurally synthesizes 7 distinct question formats from raw fact models

(function() {
  function shuffle(array) {
    var arr = array.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  function pickDistractors(allFacts, targetFact, count, key) {
    // Priority: same unit and same tags first
    var pool = allFacts.filter(function(f) {
      return f.id !== targetFact.id && f[key];
    });

    // Score candidates by tag overlap
    var targetTags = targetFact.tags || [];
    var scored = pool.map(function(f) {
      var overlap = 0;
      if (f.unit === targetFact.unit) overlap += 3;
      if (f.tags) {
        f.tags.forEach(function(t) {
          if (targetTags.indexOf(t) !== -1) overlap += 2;
        });
      }
      return { fact: f, score: overlap };
    });

    scored.sort(function(a, b) {
      return (b.score + Math.random() * 2) - (a.score + Math.random() * 2);
    });

    var chosen = [];
    var seenValues = {};
    seenValues[targetFact[key]] = true;

    for (var i = 0; i < scored.length && chosen.length < count; i++) {
      var val = scored[i].fact[key];
      if (!seenValues[val]) {
        seenValues[val] = true;
        chosen.push(val);
      }
    }

    // If still short, fallback to any fact
    if (chosen.length < count) {
      for (var j = 0; j < pool.length && chosen.length < count; j++) {
        var v = pool[j][key];
        if (!seenValues[v]) {
          seenValues[v] = true;
          chosen.push(v);
        }
      }
    }

    return chosen;
  }

  var GENERATORS = {
    definition: function(fact, allFacts) {
      // 50% chance term -> definition, 50% definition -> term
      var reverse = Math.random() > 0.5;

      if (!reverse) {
        var distractors = pickDistractors(allFacts, fact, 3, "definition");
        var options = shuffle([fact.definition].concat(distractors));
        return {
          id: "q-" + fact.id + "-t2d-" + Date.now(),
          factId: fact.id,
          type: "mcq",
          promptCategory: "Definition Recall",
          prompt: "What is the defining role of " + fact.term + "?",
          highlightTerm: fact.term,
          options: options,
          correctAnswer: fact.definition,
          explain: fact.explain || fact.definition
        };
      } else {
        var distractorsTerm = pickDistractors(allFacts, fact, 3, "term");
        var optionsTerm = shuffle([fact.term].concat(distractorsTerm));
        return {
          id: "q-" + fact.id + "-d2t-" + Date.now(),
          factId: fact.id,
          type: "mcq",
          promptCategory: "Concept Identification",
          prompt: "Which biological entity is described below?",
          quoteText: fact.definition,
          options: optionsTerm,
          correctAnswer: fact.term,
          explain: fact.explain || (fact.term + ": " + fact.definition)
        };
      }
    },

    pair: function(fact, allFacts) {
      // Can be MCQ or can contribute to Match Pairs
      var mode = Math.random() > 0.4 ? "mcq" : "pair_match";

      if (mode === "mcq") {
        var distractors = pickDistractors(allFacts, fact, 3, "right");
        var options = shuffle([fact.right].concat(distractors));
        return {
          id: "q-" + fact.id + "-pair-" + Date.now(),
          factId: fact.id,
          type: "mcq",
          promptCategory: "Functional Association",
          prompt: "What is directly associated with: " + fact.left + "?",
          highlightTerm: fact.left,
          options: options,
          correctAnswer: fact.right,
          explain: fact.explain || (fact.left + " ➔ " + fact.right)
        };
      } else {
        // Build 4 pairs matching activity
        var otherPairs = allFacts.filter(function(f) {
          return f.type === "pair" && f.id !== fact.id;
        });
        otherPairs = shuffle(otherPairs).slice(0, 3);
        var pairGroup = [fact].concat(otherPairs);

        var leftItems = pairGroup.map(function(p) { return { id: p.id, text: p.left }; });
        var rightItems = pairGroup.map(function(p) { return { id: p.id, text: p.right }; });

        return {
          id: "q-" + fact.id + "-match-" + Date.now(),
          factId: fact.id,
          type: "match_pairs",
          promptCategory: "Synaptic Pairing",
          prompt: "Match each biomedical term with its corresponding mechanism:",
          leftList: shuffle(leftItems),
          rightList: shuffle(rightItems),
          pairsMap: pairGroup.reduce(function(acc, p) {
            acc[p.id] = p.right;
            return acc;
          }, {}),
          explain: fact.explain
        };
      }
    },

    truefalse: function(fact, allFacts) {
      var showFalse = fact.falseVersion && Math.random() > 0.5;
      var statement = showFalse ? fact.falseVersion : fact.statement;
      var isCorrect = !showFalse;

      return {
        id: "q-" + fact.id + "-tf-" + Date.now(),
        factId: fact.id,
        type: "truefalse",
        promptCategory: "Scientific Truth Evaluation",
        prompt: "Is the following biomedical assertion true or false?",
        statement: statement,
        correctAnswer: isCorrect,
        explain: fact.explain
      };
    },

    sequence: function(fact, allFacts) {
      return {
        id: "q-" + fact.id + "-seq-" + Date.now(),
        factId: fact.id,
        type: "sequence",
        promptCategory: "Pathway Chronology",
        prompt: fact.prompt,
        scrambledSteps: shuffle(fact.steps),
        correctSteps: fact.steps,
        explain: fact.explain
      };
    },

    cloze: function(fact, allFacts) {
      return {
        id: "q-" + fact.id + "-cloze-" + Date.now(),
        factId: fact.id,
        type: "cloze",
        promptCategory: "Fill in the Blank",
        prompt: "Complete the statement by choosing the missing scientific concept:",
        sentence: fact.sentence,
        options: shuffle(fact.options),
        correctAnswer: fact.answer,
        explain: fact.explain
      };
    },

    diagram: function(fact, allFacts) {
      return {
        id: "q-" + fact.id + "-diag-" + Date.now(),
        factId: fact.id,
        type: "diagram",
        promptCategory: "Anatomical Recognition",
        prompt: "Identify the anatomical feature highlighted by the marker:",
        diagramName: fact.diagram,
        targetLabel: fact.targetLabel,
        hint: fact.hint,
        options: shuffle(fact.options),
        correctAnswer: fact.targetLabel,
        explain: fact.explain
      };
    },

    numeric: function(fact, allFacts) {
      // Multiple choice with close plausible distractors
      var baseVal = fact.value;
      var unit = fact.unit || "";
      var d1 = baseVal > 0 ? baseVal + Math.ceil(baseVal * 0.4) : baseVal - 20;
      var d2 = baseVal > 0 ? Math.max(1, baseVal - Math.ceil(baseVal * 0.3)) : baseVal + 25;
      var d3 = baseVal > 0 ? baseVal * 2 : baseVal + 45;

      var options = shuffle([
        baseVal + " " + unit,
        d1 + " " + unit,
        d2 + " " + unit,
        d3 + " " + unit
      ]);

      return {
        id: "q-" + fact.id + "-num-" + Date.now(),
        factId: fact.id,
        type: "mcq",
        promptCategory: "Quantitative Biophysics",
        prompt: fact.prompt,
        options: options,
        correctAnswer: baseVal + " " + unit,
        explain: fact.explain
      };
    }
  };

  window.BiolingoQuestions = {
    generateFromFact: function(fact, allFacts) {
      allFacts = allFacts || window.FactRegistry.getAll();
      var gen = GENERATORS[fact.type] || GENERATORS.definition;
      return gen(fact, allFacts);
    },

    createLessonQueue: function(facts, count) {
      var allFacts = window.FactRegistry.getAll();
      var selectedFacts = shuffle(facts).slice(0, count || 10);
      var queue = [];
      var self = this;

      selectedFacts.forEach(function(fact) {
        queue.push(self.generateFromFact(fact, allFacts));
      });

      return queue;
    },

    // Session manager that re-queues mistakes until completed
    createSession: function(questions) {
      var queue = questions.slice();
      var totalInitial = queue.length;
      var answeredCorrectlyFirstTry = {};
      var wrongCount = 0;
      var correctCount = 0;
      var currentCombo = 0;
      var maxCombo = 0;
      var totalXpEarned = 0;

      return {
        getTotalInitial: function() { return totalInitial; },
        getRemainingCount: function() { return queue.length; },
        getCurrentQuestion: function() { return queue[0] || null; },
        getStats: function() {
          return {
            totalInitial: totalInitial,
            correctCount: correctCount,
            wrongCount: wrongCount,
            maxCombo: maxCombo,
            currentCombo: currentCombo,
            totalXpEarned: totalXpEarned,
            firstTryAccuracy: totalInitial > 0 ? Math.round((Object.keys(answeredCorrectlyFirstTry).length / totalInitial) * 100) : 100
          };
        },

        answerCurrent: function(isCorrect, xpForQuestion) {
          var cur = queue[0];
          if (!cur) return null;

          if (isCorrect) {
            correctCount++;
            currentCombo++;
            if (currentCombo > maxCombo) maxCombo = currentCombo;
            totalXpEarned += (xpForQuestion || 10);

            if (wrongCount === 0 || !cur._wasMissed) {
              answeredCorrectlyFirstTry[cur.factId] = true;
            }

            // Remove from front
            queue.shift();
          } else {
            wrongCount++;
            currentCombo = 0; // Reset combo on mistake
            cur._wasMissed = true;

            // Re-queue at the end!
            queue.shift();
            queue.push(cur);
          }

          return {
            isCorrect: isCorrect,
            remaining: queue.length,
            nextQuestion: queue[0] || null,
            currentCombo: currentCombo,
            maxCombo: maxCombo
          };
        }
      };
    }
  };
})();
