// 2️⃣ ENCAPSULATION - Examples

// Example 1: Private property with getter
class BankAccount {
  constructor(balance) {
    this._balance = balance;  // Private
  }
  
  getBalance() {
    return this._balance;
  }
}

const account1 = new BankAccount(1000);
console.log(account1.getBalance());  // Output: 1000

// Example 2: Private property with deposit method
class Account {
  constructor(initialBalance) {
    this._balance = initialBalance;
  }
  
  deposit(amount) {
    this._balance = this._balance + amount;
    console.log("Deposited: " + amount);
  }
  
  getBalance() {
    return this._balance;
  }
}

const account2 = new Account(500);
account2.deposit(200);
console.log(account2.getBalance());  // Output: 700

// Example 3: Private property with withdraw
class StudentAccount {
  constructor(marks) {
    this._marks = marks;  // Private
  }
  
  addMarks(newMarks) {
    this._marks = this._marks + newMarks;
  }
  
  getMarks() {
    return this._marks;
  }
}

const student = new StudentAccount(50);
student.addMarks(25);
console.log(student.getMarks());  // Output: 75

// Example 4: Encapsulation with validation
class User {
  constructor(password) {
    this._password = password;  // Private
  }
  
  checkPassword(inputPassword) {
    if (inputPassword === this._password) {
      return true;
    } else {
      return false;
    }
  }
}

const user = new User("1234");
console.log(user.checkPassword("1234"));  // Output: true
console.log(user.checkPassword("5678"));  // Output: false

// Example 5: Multiple private properties
class Employee {
  constructor(name, salary) {
    this._name = name;      // Private
    this._salary = salary;  // Private
  }
  
  getSalary() {
    return this._salary;
  }
  
  getName() {
    return this._name;
  }
}

const emp = new Employee("Ali", 50000);
console.log(emp.getName());    // Output: Ali
console.log(emp.getSalary());  // Output: 50000