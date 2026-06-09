# Mark Grading System Project

## What is This?
A program that takes student marks and assigns a grade based on score ranges.

## What It Does
1. Takes student marks
2. Checks which range the marks fall into
3. Assigns a grade
4. Shows the grade

## Concepts Used
- Variables (`const`, `let`)
- Comparison operators (>=, <)
- `if`, `else if`, `else` statements
- Conditional logic

## Grade System
- 80+ → Grade A (Excellent)
- 70-79 → Grade B (Good)
- 60-69 → Grade C (Fair)
- 50-59 → Grade D (Pass)
- Below 50 → Grade F (Fail)

## How It Works
```
Input: marks = 85
Check: Is marks >= 80?
Output: Grade: A (Excellent)

Input: marks = 45
Check: All grades...
Output: Grade: F (Fail)
```

## Simple Logic
- If marks >= 80 → Grade A
- Else if marks >= 70 → Grade B
- Else if marks >= 60 → Grade C
- Else if marks >= 50 → Grade D
- Else → Grade F
