// map() Examples

// Example 1: Double numbers
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // Output: [2, 4, 6, 8, 10]

// Example 2: Make uppercase
const names = ["ali", "ahmed", "fatima"];
const uppercase = names.map(name => name.toUpperCase());
console.log(uppercase);  // Output: [ALI, AHMED, FATIMA]

// Example 3: Add 10 to each
const scores = [50, 60, 70, 80];
const boosted = scores.map(score => score + 10);
console.log(boosted);  // Output: [60, 70, 80, 90]