// 3️⃣ INHERITANCE - Examples

// Example 1: Simple inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + " is speaking");
  }
}

class Dog extends Animal {
  bark() {
    console.log(this.name + " is barking");
  }
}

const dog = new Dog("Rex");
dog.speak();  // Inherited: Output: Rex is speaking
dog.bark();   // Own method: Output: Rex is barking

// Example 2: Inheritance with super()
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  
  drive() {
    console.log(this.brand + " is driving");
  }
}

class Car extends Vehicle {
  constructor(brand, doors) {
    super(brand);
    this.doors = doors;
  }
}

const car = new Car("Honda", 4);
console.log(car.brand);  // Output: Honda
car.drive();             // Output: Honda is driving

// Example 3: Inheritance chain
class Person {
  constructor(name) {
    this.name = name;
  }
  
  walk() {
    console.log(this.name + " is walking");
  }
}

class Student extends Person {
  constructor(name, rollNumber) {
    super(name);
    this.rollNumber = rollNumber;
  }
  
  study() {
    console.log(this.name + " is studying");
  }
}

const student = new Student("Ali", 123);
student.walk();    // Inherited from Person
student.study();   // Own method

// Example 4: Child overrides parent method
class Shape {
  constructor(color) {
    this.color = color;
  }
  
  draw() {
    console.log("Drawing a shape");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  
  draw() {  // Override parent's draw()
    console.log("Drawing a circle with color " + this.color);
  }
}

const circle = new Circle("red", 5);
circle.draw();  // Output: Drawing a circle with color red

// Example 5: Multiple properties inheritance
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  
  getSalary() {
    return this.salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
}

const manager = new Manager("Ahmed", 50000, "Sales");
console.log(manager.name);         // Output: Ahmed
console.log(manager.getSalary());  // Output: 50000
console.log(manager.department);   // Output: Sales