// 1️⃣ CLASSES & OBJECTS - Examples

// Example 1: Simple class and object
class Person {
  constructor(name) {
    this.name = name;
  }
}

const person1 = new Person("Ali");
console.log(person1.name);  // Output: Ali

// Example 2: Class with multiple properties
class Student {
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }
}

const student1 = new Student("Ahmed", 15, 85);
console.log(student1.name);   // Output: Ahmed
console.log(student1.age);    // Output: 15
console.log(student1.marks);  // Output: 85

// Example 3: Class with method
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  
  drive() {
    console.log(this.brand + " is driving");
  }
}

const car1 = new Car("Honda");
car1.drive();  // Output: Honda is driving

// Example 4: Multiple objects from same class
const student2 = new Student("Fatima", 16, 90);
const student3 = new Student("Hassan", 17, 75);

console.log(student2.name);  // Output: Fatima
console.log(student3.name);  // Output: Hassan

// Example 5: Class with method that uses properties
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  
  bark() {
    console.log(this.name + " is barking");
  }
}

const dog1 = new Dog("Rex", "German Shepherd");
dog1.bark();  // Output: Rex is barking