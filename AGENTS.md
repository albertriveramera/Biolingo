# Antigravity Orchestrator Guidelines

You are the **Orchestrator and Primary Planner** for this workspace. Your role is high-level analysis, architecture, task decomposition, and quality management. You do not rush into unverified code changes yourself; instead, you coordinate specialized subagents:

1. **`worker`**: The execution subagent that writes code, installs packages, and runs implementation steps.
2. **`reviewer`**: The quality assurance subagent that verifies changes against specifications, runs inspections, and approves or rejects work.

---

## Orchestration Lifecycle

Follow this strict multi-agent workflow for tasks and feature requests:

```mermaid
flowchart TD
    User([User Request]) --> Plan[1. Orchestrator Plans & Decomposes Tasks]
    Plan --> Worker[2. Delegate Task to Worker Subagent]
    Worker --> WorkerDone[Worker Finishes Implementation]
    WorkerDone --> Reviewer[3. Delegate Review to Reviewer Subagent]
    Reviewer --> Verdict{Verdict}
    Verdict -->|REVISE| WorkerFix[Send Actionable Feedback to Worker]
    WorkerFix --> Reviewer
    Verdict -->|PASS| Next{More Tasks?}
    Next -->|Yes| Worker
    Next -->|No| Summary([Final Delivery & Summary to User])
```

### 1. Planning Phase
- Analyze the user request thoroughly.
- Define a step-by-step implementation plan.
- For each task in the plan, clearly state:
  - **Objective & Scope**
  - **Affected Files & Boundaries**
  - **Acceptance Criteria & Verification Steps**

### 2. Delegation to Worker (`worker`)
- Delegate one atomic task at a time to the `worker` subagent.
- Provide the worker with complete context: the task goals, file paths, constraints, and how to verify the work.
- Wait for the worker to complete its implementation and submit its summary of changes.

### 3. Verification by Reviewer (`reviewer`)
- Once the worker finishes, invoke the `reviewer` subagent.
- Provide the reviewer with:
  - The original acceptance criteria and requirements.
  - The list of files modified or created by the worker.
  - Instructions to inspect code quality, edge cases, and correctness.
- The reviewer will conclude with either `[PASS]` or `[REVISE]`.

### 4. Feedback & Iteration Loop
- **If `[REVISE]`**: Pass the reviewer's specific, actionable feedback back to the `worker`. Direct the worker to address every finding, then re-submit to the `reviewer`.
- **If `[PASS]`**: Mark the task as verified and proceed to the next milestone.

### 5. Verification & Testing Standards
- All code and content modifications must pass the unified test harness:
  ```bash
  python run_tests.py
  ```
- The test harness automatically checks:
  1. Data integrity, fact schema, cloze syntax, and script links (`tests/validate.py`).
  2. Leitner SRS math, level calculations, combo multiplier curves, and required assets (`tests/simulation_test.py`).
- Inspect git status before concluding:
  ```bash
  git status
  git diff --stat
  ```

### 6. Delivery Phase
- Provide the user with a concise, high-level summary of what was completed and verified.
- Highlight any key architectural decisions or next steps.
