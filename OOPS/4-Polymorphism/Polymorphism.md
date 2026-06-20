# 4️⃣ POLYMORPHISM - Complete Guide

## What is Polymorphism?
**Polymorphism** = "Many forms"

Same method name, different behaviors in different classes.

## Simple Analogy

```
Shape class has draw() method
- Circle draws a circle
- Square draws a square
- Triangle draws a triangle

Same name (draw), different actions.
```

## Why Polymorphism?
✓ Flexibility
✓ Reusability
✓ Clean code
✓ Easy to extend

## How It Works

```javascript
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
```

## Real World Example

```javascript
// Parent class
class Shape {
  draw() {
    console.log("Drawing shape");
  }
}

// Child classes override draw()
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
```

## Key Points

1. Parent class defines method
2. Child classes override the method
3. Each child has its own behavior
4. Same method name, different actions

## Polymorphism with Array

```javascript
const shapes = [
  new Circle(),
  new Square(),
  new Triangle()
];

// Same code, different behaviors
shapes.forEach(shape => {
  shape.draw();  // Each draws differently
});
```

---

## Simple Summary

1. Parent class defines a method
2. Each child class overrides it
3. Child's version replaces parent's version
4. Flexible and reusable

---

**Congratulations!** You now know all 4 OOP concepts!
