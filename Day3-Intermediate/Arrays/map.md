# Understanding map()

## What is map()?
`map()` changes each item in an array and creates a NEW array.

## Simple Explanation
`map()` = Apply same rule to every item in list

## How it Works
```
const numbers = [1, 2, 3];
const doubled = numbers.map(() => {
  return number * 2;
});
// doubled is [2, 4, 6]
```

## Examples
```
[5, 10, 15].map(num => num * 2);
// Result: [10, 20, 30]

["ali", "ahmed"].map(name => name.toUpperCase());
// Result: ["ALI", "AHMED"]
```

## Important
- Does NOT change original array
- Creates NEW array
- Applies function to EACH item
- Returns new array with results

## When to Use
- Double all numbers
- Change all items
- Convert items to different form
- Transform data in array
