# 1️⃣ CLASSES & OBJECTS - Complete Guide

## What is a Class?
**Class** = Blueprint for creating objects.

Think like a cookie cutter - it's the template.

## What is an Object?
**Object** = The actual thing made from the blueprint.

Think like a cookie - the real thing made from the cutter.

## Simple Analogy

```
Class = Blueprint/Template
Object = Real thing created from blueprint

class Car {}           // Blueprint
const myCar = new Car();  // Real car
```

## How to Create a Class

```javascript
class ClassName {
  constructor() {
    // Initialize properties
  }
}
```

## How to Create an Object

```javascript
const myObject = new ClassName();
```

## Real World Example

```javascript
class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Create objects
const dog1 = new Dog("Rex", 3);
const dog2 = new Dog("Max", 5);
```

## What is `this`?
`this` = Points to the current object.

```javascript
class Person {
  constructor(name) {
    this.name = name;  // this object's name
  }
}
```

## Class with Methods

```javascript
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  
  drive() {
    console.log("Car is driving");
  }
}

const car = new Car("Honda");
car.drive();  // Output: Car is driving
```

---

## Simple Summary

1. Write a **Class** (blueprint)
2. Create an **Object** from class (real thing)
3. Object has **properties** (data)
4. Object has **methods** (actions)

---

**Next:** Learn Encapsulation to control access!
