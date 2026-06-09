# Understanding While Loop

## What is While Loop?
A loop that repeats code as long as a condition is TRUE.

## Simple Explanation
While loop = "Keep doing this WHILE condition is true"
Like: "Keep eating WHILE food exists"

## How it Works
```
while (condition) {
  // Code here runs while condition is TRUE
  // Must change condition, otherwise infinite loop!
}
```

## Difference from For Loop
- `for` loop: Run exact number of times
- `while` loop: Run WHILE condition is true (unknown count)

## Example
```
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;  // Important! Must change i
}
Output: 1, 2, 3, 4, 5
```

## Important Points
- Condition is checked at START of each loop
- If condition is true → run code, then check again
- If condition is false → stop loop
- MUST change something to make condition false!
- Forgetting to change = INFINITE LOOP (bad!)

## Real World
- "While there is fuel, drive"
- "While game is running, play"
- "While user is logged in, show dashboard"

## Common Mistakes
```javascript
// WRONG - Infinite loop! i never changes
while (true) {
  console.log("HELP!");
}

// RIGHT - i keeps changing
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

## When to Use
- Unknown number of repetitions
- Keep doing until something happens
- Game loops
- Input validation (keep asking until valid)
