// ===================================================================
// DAY 3 - JAVASCRIPT INTERMEDIATE - BASIC EXAMPLES
// ===================================================================
// Topics: Loops, Functions, Arrays, Objects

console.log('='.repeat(60));
console.log('DAY 3 - JAVASCRIPT INTERMEDIATE BASICS');
console.log('='.repeat(60));

// ===================================================================
// 1. LOOPS - FOR LOOP
// ===================================================================

console.log('\n\n--- 1. FOR LOOP ---\n');

// Basic for loop - count from 0 to 4
console.log('Count from 0 to 4:');
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0 1 2 3 4

// Loop through array
console.log('\nLoop through array:');
const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}: ${fruits[i]}`);
}
// Output:
// 0: Apple
// 1: Banana
// 2: Orange
// 3: Mango

// Loop backwards
console.log('\nCount backwards from 5 to 1:');
for (let i = 5; i > 0; i--) {
    console.log(i);
}
// Output: 5 4 3 2 1

// Loop with step
console.log('\nCount by 2s (0, 2, 4, 6, 8):');
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}
// Output: 0 2 4 6 8

// Nested loops (multiplication table)
console.log('\n3x3 Multiplication Table:');
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
}

// ===================================================================
// 2. LOOPS - WHILE LOOP
// ===================================================================

console.log('\n\n--- 2. WHILE LOOP ---\n');

// Basic while loop - count from 0 to 4
console.log('Count from 0 to 4 with while:');
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
// Output: 0 1 2 3 4

// While loop with condition
console.log('\nCount while value < 10:');
let num = 0;
while (num < 10) {
    console.log(num);
    num += 2;
}
// Output: 0 2 4 6 8

// Do-while loop (runs at least once)
console.log('\nDo-while loop:');
let x = 0;
do {
    console.log('x =', x);
    x++;
} while (x < 3);
// Output: x = 0, x = 1, x = 2

// While with break
console.log('\nWhile loop with break:');
let i = 0;
while (true) {
    console.log(i);
    i++;
    if (i === 3) {
        console.log('Breaking out!');
        break;
    }
}
// Output: 0 1 2 Breaking out!

// While with continue
console.log('\nWhile loop with continue (skip even numbers):');
let j = 0;
while (j < 6) {
    j++;
    if (j % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(j); // Only prints: 1 3 5
}

// ===================================================================
// 3. FUNCTIONS - NORMAL FUNCTIONS
// ===================================================================

console.log('\n\n--- 3. NORMAL FUNCTIONS ---\n');

// Basic function
function greet() {
    console.log('Hello, World!');
}
greet(); // Call the function
// Output: Hello, World!

// Function with parameters
function add(a, b) {
    return a + b;
}
console.log('5 + 3 =', add(5, 3));
// Output: 5 + 3 = 8

// Function with multiple parameters
function createGreeting(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
}
console.log(createGreeting('John', 'Doe'));
// Output: Hello, John Doe!

// Function with default parameters
function sayHi(name = 'Guest') {
    console.log(`Hi ${name}!`);
}
sayHi(); // Uses default
sayHi('Alice'); // Uses provided value
// Output: Hi Guest! Hi Alice!

// Function with return value
function multiply(a, b) {
    return a * b;
}
const result = multiply(4, 5);
console.log('Result:', result); // Output: Result: 20

// Function that processes array
function getSum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
console.log('Sum of [1, 2, 3, 4, 5]:', getSum([1, 2, 3, 4, 5]));
// Output: Sum of [1, 2, 3, 4, 5]: 15

// Function with multiple return statements
function checkNumber(num) {
    if (num > 0) {
        return 'Positive';
    } else if (num < 0) {
        return 'Negative';
    } else {
        return 'Zero';
    }
}
console.log('10 is:', checkNumber(10));
console.log('-5 is:', checkNumber(-5));
console.log('0 is:', checkNumber(0));
// Output: 10 is: Positive, -5 is: Negative, 0 is: Zero

// ===================================================================
// 4. FUNCTIONS - ARROW FUNCTIONS
// ===================================================================

console.log('\n\n--- 4. ARROW FUNCTIONS ---\n');

// Basic arrow function
const square = (x) => {
    return x * x;
};
console.log('5² =', square(5));
// Output: 5² = 25

// Arrow function - concise syntax (single statement)
const square2 = (x) => x * x;
console.log('6² =', square2(6));
// Output: 6² = 36

// Arrow function with single parameter (no parens needed)
const double = x => x * 2;
console.log('Double of 10:', double(10));
// Output: Double of 10: 20

// Arrow function with no parameters
const greetArrow = () => 'Hello from arrow!';
console.log(greetArrow());
// Output: Hello from arrow!

// Arrow function with multiple parameters
const divide = (a, b) => a / b;
console.log('20 ÷ 4 =', divide(20, 4));
// Output: 20 ÷ 4 = 5

// Arrow function with multiple lines
const calculateArea = (width, height) => {
    const area = width * height;
    return area;
};
console.log('Area of 5×3:', calculateArea(5, 3));
// Output: Area of 5×3: 15

// Arrow function in array methods (very common!)
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log('Original:', numbers);
console.log('Doubled:', doubled);
// Output: Original: [1, 2, 3, 4, 5], Doubled: [2, 4, 6, 8, 10]

// ===================================================================
// 5. ARRAYS - PUSH & POP
// ===================================================================

console.log('\n\n--- 5. ARRAYS - PUSH & POP ---\n');

// Create an array
let myArray = ['A', 'B', 'C'];
console.log('Initial array:', myArray);
// Output: ['A', 'B', 'C']

// PUSH - Add element to end
myArray.push('D');
console.log('After push("D"):', myArray);
// Output: ['A', 'B', 'C', 'D']

myArray.push('E', 'F');
console.log('After push("E", "F"):', myArray);
// Output: ['A', 'B', 'C', 'D', 'E', 'F']

// POP - Remove element from end
const removed = myArray.pop();
console.log('Removed:', removed);
console.log('Array after pop():', myArray);
// Output: Removed: F, Array after pop(): ['A', 'B', 'C', 'D', 'E']

// Numbers array
const nums = [10, 20, 30];
console.log('\nNumbers:', nums);

nums.push(40);
console.log('After push(40):', nums);
// Output: [10, 20, 30, 40]

const popped = nums.pop();
console.log('Popped value:', popped);
console.log('Remaining:', nums);
// Output: Popped value: 40, Remaining: [10, 20, 30]

// Using push in a loop to build an array
console.log('\nBuilding array with push:');
const newArray = [];
for (let i = 1; i <= 5; i++) {
    newArray.push(i * 10);
}
console.log('Result:', newArray);
// Output: [10, 20, 30, 40, 50]

// ===================================================================
// 6. ARRAYS - MAP()
// ===================================================================

console.log('\n\n--- 6. ARRAYS - MAP() ---\n');

// Map - transform each element
const prices = [100, 200, 300];
console.log('Original prices:', prices);

const discounted = prices.map(price => price * 0.9); // 10% discount
console.log('After 10% discount:', discounted);
// Output: [90, 180, 270]

// Map with normal function
const double_prices = prices.map(function(p) {
    return p * 2;
});
console.log('Doubled prices:', double_prices);
// Output: [200, 400, 600]

// Map strings to numbers
const stringNumbers = ['1', '2', '3', '4', '5'];
const actualNumbers = stringNumbers.map(s => parseInt(s));
console.log('String to number:', actualNumbers);
// Output: [1, 2, 3, 4, 5]

// Map with index
const items = ['apple', 'banana', 'orange'];
const indexedItems = items.map((item, index) => {
    return `${index}: ${item}`;
});
console.log('Indexed items:');
indexedItems.forEach(item => console.log('  ' + item));
// Output:
// 0: apple
// 1: banana
// 2: orange

// Map objects
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const names = users.map(user => user.name);
console.log('\nUser names:', names);
// Output: ['Alice', 'Bob', 'Charlie']

const ages = users.map(user => user.age);
console.log('User ages:', ages);
// Output: [25, 30, 35]

// Chaining maps
const data = [1, 2, 3, 4, 5];
const result2 = data
    .map(n => n * 2)     // [2, 4, 6, 8, 10]
    .map(n => n + 1);    // [3, 5, 7, 9, 11]
console.log('\nChained maps (×2, +1):', result2);
// Output: [3, 5, 7, 9, 11]

// ===================================================================
// 7. OBJECTS - BASICS
// ===================================================================

console.log('\n\n--- 7. OBJECTS - BASICS ---\n');

// Create object - key: value pairs
const person = {
    name: 'John',
    age: 25,
    city: 'New York',
    email: 'john@example.com'
};

console.log('Person object:', person);
console.log('Name:', person.name);
console.log('Age:', person.age);

// Accessing with dot notation
console.log('\nUsing dot notation:');
console.log('Name:', person.name);
console.log('City:', person.city);

// Accessing with bracket notation
console.log('\nUsing bracket notation:');
console.log('Name:', person['name']);
console.log('Email:', person['email']);

// Adding new properties
person.phone = '555-1234';
person['country'] = 'USA';
console.log('\nAfter adding properties:');
console.log(person);

// Changing properties
person.age = 26;
console.log('\nAfter changing age:', person.age);

// Object with mixed types
const product = {
    name: 'Laptop',
    price: 999.99,
    inStock: true,
    colors: ['Black', 'Silver', 'Gold'],
    specs: {
        ram: '16GB',
        storage: '512GB SSD',
        processor: 'Intel i7'
    }
};

console.log('\nProduct object:');
console.log('Name:', product.name);
console.log('Price:', product.price);
console.log('In stock:', product.inStock);
console.log('Colors:', product.colors);
console.log('Specs:', product.specs);
console.log('RAM:', product.specs.ram);

// Object with methods (functions inside objects)
const calculator = {
    x: 10,
    y: 5,
    add: function() {
        return this.x + this.y;
    },
    subtract: function() {
        return this.x - this.y;
    }
};

console.log('\nCalculator object:');
console.log('10 + 5 =', calculator.add());
console.log('10 - 5 =', calculator.subtract());

// Array of objects (very common!)
const students = [
    { name: 'Alice', grade: 'A', marks: 95 },
    { name: 'Bob', grade: 'B', marks: 85 },
    { name: 'Charlie', grade: 'A', marks: 92 }
];

console.log('\nArray of objects:');
students.forEach((student, i) => {
    console.log(`${i + 1}. ${student.name} - Grade: ${student.grade}, Marks: ${student.marks}`);
});

// ===================================================================
// 8. COMBINING EVERYTHING - STUDENT MARKS APP (PREVIEW)
// ===================================================================

console.log('\n\n--- 8. STUDENT MARKS APP (PREVIEW) ---\n');

const studentClass = [
    { name: 'Alice', english: 85, math: 90, science: 88 },
    { name: 'Bob', english: 78, math: 82, science: 80 },
    { name: 'Charlie', english: 92, math: 95, science: 89 }
];

// Function to calculate average marks
function getAverage(marks) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}

// Process each student
console.log('Student Marks Summary:\n');
studentClass.forEach(student => {
    const marks = [student.english, student.math, student.science];
    const average = getAverage(marks);
    let grade;

    if (average >= 90) grade = 'A';
    else if (average >= 80) grade = 'B';
    else if (average >= 70) grade = 'C';
    else grade = 'F';

    console.log(`${student.name}:`);
    console.log(`  English: ${student.english}, Math: ${student.math}, Science: ${student.science}`);
    console.log(`  Average: ${average.toFixed(2)}, Grade: ${grade}\n`);
});

// ===================================================================
// 9. COMBINING EVERYTHING - TODO APP (PREVIEW)
// ===================================================================

console.log('\n--- 9. TODO APP (PREVIEW) ---\n');

const todos = [];

// Function to add todo
function addTodo(task) {
    todos.push({
        id: todos.length + 1,
        task: task,
        completed: false,
        createdAt: new Date().toLocaleDateString()
    });
}

// Function to mark todo as done
function completeTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = true;
    }
}

// Function to display todos
function displayTodos() {
    console.log('TODO LIST:\n');
    todos.forEach(todo => {
        const status = todo.completed ? '✓' : '○';
        console.log(`${status} [${todo.id}] ${todo.task} (${todo.createdAt})`);
    });
}

// Using the todo app
addTodo('Learn JavaScript');
addTodo('Build a project');
addTodo('Study arrays');
addTodo('Master functions');

console.log('Before completing:');
displayTodos();

completeTodo(1);
completeTodo(3);

console.log('\nAfter completing some tasks:');
displayTodos();

// ===================================================================
// SUMMARY
// ===================================================================

console.log('\n\n' + '='.repeat(60));
console.log('SUMMARY');
console.log('='.repeat(60));
console.log(`
✓ Loops: for, while (iterate over values)
✓ Functions: normal, arrow (reusable code)
✓ Arrays: push, pop, map (manage collections)
✓ Objects: key-value pairs (group related data)
✓ Combined: Student marks app & Todo app examples

All these concepts work together to build real applications!
`);
