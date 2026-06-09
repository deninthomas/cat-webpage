# Understanding For Loop

## What is For Loop?
A loop that repeats code a specific number of times.

## Simple Explanation
For loop = "Do something multiple times"
Think of it like: "For 5 times, do this action"

## How it Works
```
for (start; condition; change) {
  // Code here runs multiple times
}
```

## Parts Explained
- `start` - Where to begin (usually: i = 0)
- `condition` - When to stop (usually: i < 5)
- `change` - How to change each time (usually: i++)

## Example
```
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
Output:
1
2
3
4
5
```

## Flow
1. Set i = 1
2. Check: Is i <= 5? YES → Print i, then i++
3. Check: Is i <= 5? YES → Print i, then i++
4. ... repeat until i > 5
5. Stop

## Real World
Like saying:
"For every item in list, print it"
"For 10 seconds, keep playing music"
"For each student, give grade"

## Important Points
- `i++` means i = i + 1 (increment)
- `i--` means i = i - 1 (decrement)
- Condition is checked each time
- Loop stops when condition is false

## When to Use
- Print numbers
- Repeat actions
- Go through lists
- Count things
