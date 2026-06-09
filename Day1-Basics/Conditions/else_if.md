# Understanding `else if` Statement

## What is `else if`?
`else if` lets you check MULTIPLE conditions, one after another.

## Simple Explanation
`else if` means: "If first condition is FALSE, check ANOTHER condition."

## How it Works
```
if (condition1) {
  // Do this if condition1 is TRUE
} else if (condition2) {
  // Do this if condition1 is FALSE and condition2 is TRUE
} else if (condition3) {
  // Do this if condition1 and condition2 are FALSE and condition3 is TRUE
} else {
  // Do this if all conditions are FALSE
}
```

## Flow
1. Check condition1 → TRUE? Run and stop
2. Check condition2 → TRUE? Run and stop
3. Check condition3 → TRUE? Run and stop
4. All FALSE? Run else

## Examples
Grading system:
- If marks >= 80: Grade A
- Else if marks >= 60: Grade B
- Else if marks >= 50: Grade C
- Else: Fail

## Real World
- If time is 6am: Wake up
- Else if time is 12pm: Have lunch
- Else if time is 6pm: Have dinner
- Else: Sleep

## Important Points
- Can have multiple `else if`
- Only ONE block will run
- `else if` must come after `if`
- `else` at the end is optional
- Conditions are checked in order

## When to Use
- Multiple options/categories
- Grade/level systems
- Range checks
- Multiple outcomes
