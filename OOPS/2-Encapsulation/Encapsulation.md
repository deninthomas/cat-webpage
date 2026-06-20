# 2️⃣ ENCAPSULATION - Complete Guide

## What is Encapsulation?
**Encapsulation** = Hide internal details, show only what's needed.

Like a car - you use steering wheel, pedals, ignition. You don't see the engine.

## Simple Analogy

```
Private = Secret (Don't show)
Public = Open (Everyone can see/use)

Class Bank {
  private balance = 1000;  // Secret
  public withdraw(amount) { }  // Public
}
```

## Why Encapsulation?
✓ Protect sensitive data
✓ Control what people can do
✓ Prevent accidents
✓ Secure the code

## Private vs Public

```javascript
class BankAccount {
  constructor(balance) {
    this._balance = balance;  // Private (by convention)
  }
  
  // Public method
  getBalance() {
    return this._balance;
  }
}
```

**Note:** In JavaScript, `_` prefix means "treat as private"

## Real World Example

```javascript
class Account {
  constructor(initialBalance) {
    this._balance = initialBalance;  // Private
  }
  
  deposit(amount) {
    this._balance += amount;
    console.log("Deposited: " + amount);
  }
  
  getBalance() {
    return this._balance;
  }
}

const account = new Account(1000);
account.deposit(500);
console.log(account.getBalance());  // Output: 1500
```

## What Not to Do

```javascript
// ❌ BAD - Direct access
account._balance = -999;  // Anyone can change it!

// ✓ GOOD - Use methods
account.getBalance();  // Safe way
```

---

## Simple Summary

1. Keep data **private** (_balance)
2. Provide **public methods** (getBalance, deposit)
3. Users interact through methods only
4. Internal details stay hidden

---

**Next:** Learn Inheritance to reuse code!
