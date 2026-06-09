# Understanding push() and pop()

## What is push()?
`push()` adds a new item to the END of an array.

## What is pop()?
`pop()` removes the LAST item from an array.

## Simple Explanation
`push()` = Add something to list
`pop()` = Remove last thing from list

## How They Work
```
const list = [1, 2, 3];

list.push(4);  // Add 4 at end
// list is now [1, 2, 3, 4]

list.pop();    // Remove last item (4)
// list is now [1, 2, 3]
```

## Examples
```
const fruits = ["apple", "banana"];

fruits.push("orange");  // [apple, banana, orange]
fruits.push("grape");   // [apple, banana, orange, grape]

fruits.pop();  // Remove grape
// [apple, banana, orange]
```

## When to Use
- Add items to list
- Remove items from list
- Stack operations
- Queue operations
