import os
import re
import json

def load_js_object(filepath, var_name):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Strip comments and extract window[var_name] = [...]
    pattern = rf"window\.{var_name}\s*=\s*(\[.*?\]);"
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        raise ValueError(f"Could not find window.{var_name} in {filepath}")
    
    raw = match.group(1)
    
    # Simple JS-object to JSON converter for string keys and values
    # Replace single quotes with double quotes carefully
    def js_to_py(js_str):
        # We can evaluate in python by safely replacing JS keys
        pass
    
    return raw

def main():
    print("=== Biolingo Content & Data Validation Suite ===")
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    data_dir = os.path.join(base_dir, "data")
    
    fact_files = [
        ("FACTS_HS", "facts_hs.js", "High School"),
        ("FACTS_UG", "facts_ug.js", "Undergraduate"),
        ("FACTS_MS", "facts_ms.js", "Master's"),
        ("FACTS_PHD", "facts_phd.js", "PhD Frontier")
    ]
    
    all_fact_ids = set()
    total_facts = 0
    errors = []
    
    for var_name, filename, level_label in fact_files:
        path = os.path.join(data_dir, filename)
        if not os.path.exists(path):
            errors.append(f"Missing file: {path}")
            continue
            
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
            
        # Extract individual fact IDs using regex
        id_matches = re.findall(r'id:\s*["\']([^"\']+)["\']', content)
        unit_matches = re.findall(r'unit:\s*["\']([^"\']+)["\']', content)
        type_matches = re.findall(r'type:\s*["\']([^"\']+)["\']', content)
        explain_matches = re.findall(r'explain:\s*["\']([^"\']+)["\']', content)
        
        print(f"[{level_label}] Found {len(id_matches)} facts in {filename}")
        total_facts += len(id_matches)
        
        for fid in id_matches:
            if fid in all_fact_ids:
                errors.append(f"Duplicate fact ID detected: {fid}")
            all_fact_ids.add(fid)
            
        if len(id_matches) != len(explain_matches):
            errors.append(f"Mismatch in {filename}: {len(id_matches)} facts but {len(explain_matches)} explanations")

        # Verify cloze facts contain {blank}
        cloze_sentences = re.findall(r'sentence:\s*["\'](.*?)["\']', content)
        for s in cloze_sentences:
            if "{blank}" not in s:
                errors.append(f"Cloze sentence in {filename} missing {{blank}}: {s}")
            
    print(f"\nTotal curated facts registered: {total_facts}")

    # Spanish translation coverage: every fact id must have a Spanish overlay
    es_files = ["facts_es_hs.js", "facts_es_ug.js", "facts_es_ms.js", "facts_es_phd.js"]
    es_ids = set()
    for filename in es_files:
        path = os.path.join(data_dir, filename)
        if not os.path.exists(path):
            errors.append(f"Missing Spanish file: {path}")
            continue
        with open(path, "r", encoding="utf-8") as f:
            es_content = f.read()
        file_ids = re.findall(r'"((?:hs|ug|ms|phd)-[a-z]+-\d+)":\s*\{', es_content)
        for sid in file_ids:
            if sid in es_ids:
                errors.append(f"Duplicate Spanish translation: {sid}")
            es_ids.add(sid)
        for m in re.finditer(r'sentence:\s*"(.*?)",\s*answer:\s*"(.*?)",\s*options:\s*\[(.*?)\]', es_content):
            if "{blank}" not in m.group(1):
                errors.append(f"Spanish cloze missing {{blank}} in {filename}: {m.group(1)[:50]}")
            if f'"{m.group(2)}"' not in m.group(3):
                errors.append(f"Spanish cloze answer not in options in {filename}: {m.group(2)}")
    for missing in sorted(all_fact_ids - es_ids):
        errors.append(f"Missing Spanish translation for fact: {missing}")
    for extra in sorted(es_ids - all_fact_ids):
        errors.append(f"Spanish translation for unknown fact id: {extra}")
    print(f"Spanish translations: {len(es_ids)}/{len(all_fact_ids)} facts covered")
    
    # Verify index.html exists and links all scripts
    index_path = os.path.join(base_dir, "index.html")
    if not os.path.exists(index_path):
        errors.append("index.html is missing!")
    else:
        with open(index_path, "r", encoding="utf-8") as f:
            html = f.read()
            expected_scripts = [
                "curriculum.js", "facts_hs.js", "facts_ug.js", "facts_ms.js", "facts_phd.js",
                "facts.js", "storage.js", "srs.js", "rewards.js", "audio.js",
                "mascot.js", "diagrams.js", "questions.js", "ui.js", "app.js",
                "i18n.js", "i18n_es.js", "facts_es_hs.js", "facts_es_ug.js",
                "facts_es_ms.js", "facts_es_phd.js"
            ]
            for s in expected_scripts:
                if s not in html:
                    errors.append(f"Script {s} not referenced in index.html")
                    
    if errors:
        print("\n[FAIL] VALIDATION FAILED WITH ERRORS:")
        for e in errors:
            print(" - ", e)
        exit(1)
    else:
        print("\n[PASS] ALL INTEGRITY CHECKS PASSED! Fact models, IDs, explanations, and script links verified.")

if __name__ == "__main__":
    main()
