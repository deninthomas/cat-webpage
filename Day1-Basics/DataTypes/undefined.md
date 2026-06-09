# Understanding `undefined` Data Type

## What is `undefined`?
`undefined` means a variable exists but has NO VALUE assigned yet.

## Simple Explanation
`undefined` = Accidentally empty
Like a box that exists but nobody put anything in it yet.

## Why Does It Happen?
- You declare a variable but don't assign a value
- A function doesn't return anything
- You access a property that doesn't exist

## Examples of `undefined`
```
let x;  // declared but no value = undefined
console.log(x);  // Output: undefined
```

## Important Difference
- `null` = YOU chose to make it empty (intentional)
- `undefined` = System left it empty (accident)

## How It Happens
```
let name;  // No value assigned
console.log(name);  // Output: undefined (system leaves it)

let name = null;  // You intentionally set it
console.log(name);  // Output: null (you made it empty)
```

## Important Points
- `undefined` is written in lowercase
- Happens automatically when you don't assign a value
- Different from `null`
- Hard to avoid, but important to know

## When You See It
- Declared but not initialized
- Function with no return
- Accessing non-existent properties
- Missing function parameters

## Comparison
- `null` = Empty by design (you set it)
- `undefined` = Empty by default (auto set)
- Both represent "no value"
