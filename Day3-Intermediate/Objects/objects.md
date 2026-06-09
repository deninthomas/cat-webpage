# Understanding Objects

## What is an Object?
A collection of related properties and values.

## Simple Explanation
Object = Real-world thing with properties
Like a person with name, age, email, etc.

## How to Create
```
const person = {
  name: "Ali",
  age: 20,
  city: "Karachi"
};
```

## Access Properties
```
const person = {
  name: "Ali",
  age: 20
};

person.name;    // "Ali"
person.age;     // 20
person["name"]; // "Ali"
```

## Examples
```
const car = {
  brand: "Honda",
  color: "red",
  year: 2020
};

const student = {
  name: "Ahmed",
  rollNumber: 123,
  grade: "A"
};
```

## When to Use
- Store related data together
- Person information
- Product details
- Settings/configuration
