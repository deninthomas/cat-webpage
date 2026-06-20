// 4️⃣ POLYMORPHISM - Examples

// Example 1: Simple polymorphism
class Animal {
  sound() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow!");
  }
}

const dog = new Dog();
const cat = new Cat();

dog.sound();  // Output: Woof!
cat.sound();  // Output: Meow!

// Example 2: Shape polymorphism
class Shape {
  draw() {
    console.log("Drawing shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing square");
  }
}

const circle = new Circle();
const square = new Square();

circle.draw();  // Output: Drawing circle
square.draw();  // Output: Drawing square

// Example 3: Vehicle polymorphism
class Vehicle {
  start() {
    console.log("Vehicle starting");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car engine started");
  }
}

class Bike extends Vehicle {
  start() {
    console.log("Bike engine started");
  }
}

const car = new Car();
const bike = new Bike();

car.start();   // Output: Car engine started
bike.start();  // Output: Bike engine started

// Example 4: Polymorphism with array
class Employee {
  work() {
    console.log("Working");
  }
}

class Developer extends Employee {
  work() {
    console.log("Developer is coding");
  }
}

class Manager extends Employee {
  work() {
    console.log("Manager is managing");
  }
}

const employees = [
  new Developer(),
  new Manager()
];

employees.forEach(emp => {
  emp.work();  // Each works differently
});
// Output: Developer is coding, Manager is managing

// Example 5: Bird polymorphism
class Bird {
  fly() {
    console.log("Bird flying");
  }
}

class Eagle extends Bird {
  fly() {
    console.log("Eagle flying high");
  }
}

class Penguin extends Bird {
  fly() {
    console.log("Penguin cannot fly");
  }
}

const eagle = new Eagle();
const penguin = new Penguin();

eagle.fly();    // Output: Eagle flying high
penguin.fly();  // Output: Penguin cannot fly