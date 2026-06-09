// Arrow Function Examples

// Example 1: Simple arrow function
const sayHello = () => {
  console.log("Hello!");
};

sayHello();  // Output: Hello!

// Example 2: Arrow function with math
const multiply = () => {
  const a = 5;
  const b = 3;
  const result = a * b;
  console.log("Result = " + result);
};

multiply();  // Output: Result = 15

// Example 3: Arrow function that returns value
const getSum = () => {
  return 10 + 5;
};

const sum = getSum();
console.log(sum);  // Output: 15