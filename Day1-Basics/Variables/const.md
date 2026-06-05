# Understanding `const`

## What is `const`?
`const` means CONSTANT - a variable that CANNOT be changed after creation.

## Simple Explanation
`const` is like writing something in permanent marker. Once you write it, you cannot erase or change it.

## Why Use `const`?
- Prevents accidental changes
- Makes code safer
- Shows which values should NOT change
- Best for fixed values

## How to Use It
```
const constantName = value;
```

## Important Points
- `const` CANNOT be changed ✗
- `const` CANNOT be re-declared ✗
- `const` MUST have a value when created
- Most secure way to store data

## When to Use `const`?
- For values that never change
- For important fixed data
- Default choice (use `const` first!)
- Settings and configuration

## Rules to Remember
1. Must declare with value: `const pi = 3.14;` ✓
2. Cannot change later: `pi = 3.15;` ❌ ERROR!
3. Cannot re-declare: `const pi = 3.16;` ❌ ERROR!

---
**Best Practice:**
Use `const` by default
→ Use `let` if you need to change
→ Avoid `var` in modern code
