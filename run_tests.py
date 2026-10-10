"""
Biolingo Unified Test Suite Runner
Runs all validation and engine simulation tests.
Returns exit code 0 if all pass, 1 if any fails.
Compatible with Windows console encoding (cp1252 / utf-8).
"""
import subprocess
import sys
from pathlib import Path

# Ensure UTF-8 output even in standard Windows terminals
if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

def run():
    root_dir = Path(__file__).resolve().parent
    tests = [
        ("Content & Data Validation", root_dir / "tests" / "validate.py"),
        ("Engine & SRS Simulation", root_dir / "tests" / "simulation_test.py"),
    ]

    print("=" * 60)
    print("[TEST SUITE] Running Biolingo Test & Validation Suite")
    print("=" * 60)

    all_passed = True
    for name, test_path in tests:
        print(f"\n>> Executing: {name} ({test_path.name})")
        res = subprocess.run([sys.executable, str(test_path)], cwd=str(root_dir))
        if res.returncode != 0:
            print(f"[FAIL] {name} (exit code {res.returncode})")
            all_passed = False
        else:
            print(f"[PASS] {name}")

    print("\n" + "=" * 60)
    if all_passed:
        print("[SUCCESS] ALL TESTS PASSED SUCCESSFULLY!")
        print("=" * 60)
        sys.exit(0)
    else:
        print("[FAILED] SOME TESTS FAILED. Please review the output above.")
        print("=" * 60)
        sys.exit(1)

if __name__ == "__main__":
    run()
