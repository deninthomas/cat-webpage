// Student Marks App

// Example 1: Single student
const student1 = {
  name: "Ali",
  marks: 85,
  grade: "A"
};

console.log("Student: " + student1.name);
console.log("Marks: " + student1.marks);
console.log("Grade: " + student1.grade);
// Output: Student: Ali, Marks: 85, Grade: A

// Example 2: Another student
const student2 = {
  name: "Ahmed",
  marks: 72,
  grade: "B"
};

console.log("Student: " + student2.name);
console.log("Marks: " + student2.marks);
console.log("Grade: " + student2.grade);
// Output: Student: Ahmed, Marks: 72, Grade: B

// Example 3: Multiple students
const students = [
  { name: "Ali", marks: 85 },
  { name: "Ahmed", marks: 72 },
  { name: "Fatima", marks: 90 }
];

console.log(students[0].name);   // Output: Ali
console.log(students[1].marks);  // Output: 72
console.log(students[2].name);   // Output: Fatima