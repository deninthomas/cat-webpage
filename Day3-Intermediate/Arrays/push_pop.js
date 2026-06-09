// push() and pop() Examples

// Example 1: Using push()
const fruits = ["apple", "banana"];
console.log(fruits);  // Output: [apple, banana]

fruits.push("orange");
console.log(fruits);  // Output: [apple, banana, orange]

fruits.push("grape");
console.log(fruits);  // Output: [apple, banana, orange, grape]

// Example 2: Using pop()
const items = ["pen", "pencil", "eraser"];
console.log(items);  // Output: [pen, pencil, eraser]

items.pop();
console.log(items);  // Output: [pen, pencil]

items.pop();
console.log(items);  // Output: [pen]

// Example 3: Push and pop together
const numbers = [1, 2, 3];
numbers.push(4);      // Add 4
console.log(numbers); // Output: [1, 2, 3, 4]

numbers.pop();        // Remove 4
console.log(numbers); // Output: [1, 2, 3]