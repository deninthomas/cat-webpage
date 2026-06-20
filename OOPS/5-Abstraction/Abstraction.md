# 5️⃣ ABSTRACTION - Complete Guide

## What is Abstraction?
**Abstraction** = Hide complexity, show only essential features.

Show what to do, not HOW to do it.

## Simple Analogy

```
Car has a drive() method
You don't need to know:
- How engine works
- How gears work
- How wheels turn

You just call: car.drive()
The complexity is hidden.
```

## Why Abstraction?
✓ Simplify usage
✓ Hide complexity
✓ User doesn't need to know details
✓ Change internals without affecting users

## Example

```javascript
class Car {
  drive() {
    // Complex code hidden here
    this.startEngine();
    this.engage Gears();
    this.moveWheels();
    console.log("Car is driving");
  }
  
  startEngine() {
    // Hidden complexity
  }
  
  engageGears() {
    // Hidden complexity
  }
  
  moveWheels() {
    // Hidden complexity
  }
}

const car = new Car();
car.drive();  // User doesn't see complexity
```

## Simple vs Complex

```
❌ Complex:
car.startEngine();
car.engageGears();
car.moveWheels();

✓ Simple (Abstraction):
car.drive();
```

## Real World Example

```javascript
class BankAccount {
  deposit(amount) {
    // Complex validation and processing hidden
    this.validateAmount(amount);
    this.updateBalance(amount);
    this.logTransaction(amount);
    console.log("Deposit successful");
  }
  
  validateAmount(amount) {
    // Hidden logic
  }
  
  updateBalance(amount) {
    // Hidden logic
  }
  
  logTransaction(amount) {
    // Hidden logic
  }
}

const account = new BankAccount();
account.deposit(500);  // User just calls this
```

---

## Simple Summary

1. Create methods for simple tasks
2. Hide complex internal methods
3. User calls simple method
4. Complex work happens behind scenes

---

**All 5 OOP concepts covered!** 🎉
