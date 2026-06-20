# 3️⃣ INHERITANCE - Complete Guide

## What is Inheritance?
**Inheritance** = Get properties and methods from a parent class.

Child inherits from Parent.

## Simple Analogy

```
Parent Class (Vehicle)
- properties: brand, color
- methods: drive(), stop()

Child Class (Car)
- Inherits: brand, color, drive(), stop()
- Adds: doors
- Adds: openTrunk()
```

## Why Inheritance?
✓ Reuse code
✓ Avoid repetition
✓ Organize code
✓ Make relationships clear

## How to Inherit

```javascript
class Parent {
  // Parent code
}

class Child extends Parent {
  // Child code
}
```

## Real World Example

```javascript
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
dog.speak();  // Inherited from Animal
dog.bark();   // Own method
```

## `super` Keyword
Use `super` to call parent's constructor.

```javascript
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
}

class Car extends Vehicle {
  constructor(brand, doors) {
    super(brand);  // Call parent constructor
    this.doors = doors;
  }
}

const car = new Car("Honda", 4);
console.log(car.brand);  // Output: Honda
console.log(car.doors);  // Output: 4
```

## Inheritance Chain

```
GrandParent
    ↓
Parent (extends GrandParent)
    ↓
Child (extends Parent)
```

---

## Simple Summary

1. Create **Parent** class with common properties/methods
2. Create **Child** class with `extends Parent`
3. Use `super()` to call parent constructor
4. Child gets all Parent's code
5. Child can add its own code

---

**Next:** Learn Polymorphism for flexibility!
