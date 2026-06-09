// For Loop Examples

// Example 1: Print numbers 1 to 5
console.log("=== Print 1 to 5 ===");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1, 2, 3, 4, 5

// Example 2: Print table of 2
console.log("=== Table of 2 ===");
for (let i = 1; i <= 5; i++) {
  const result = 2 * i;
  console.log("2 × " + i + " = " + result);
}
// Output: 2×1=2, 2×2=4, 2×3=6, 2×4=8, 2×5=10

// Example 3: Sum of numbers 1 to 10
console.log("=== Sum ===");
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log("Sum = " + sum);
// Output: Sum = 55
