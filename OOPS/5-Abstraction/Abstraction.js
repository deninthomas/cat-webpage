// 5️⃣ ABSTRACTION - Examples

// Example 1: Simple abstraction
class Car {
  drive() {
    // Complex code hidden here
    this.startEngine();
    this.pressAccelerator();
    console.log("Car is driving");
  }
  
  startEngine() {
    // Hidden logic
    console.log("Engine started");
  }
  
  pressAccelerator() {
    // Hidden logic
    console.log("Accelerating");
  }
}

const car = new Car();
car.drive();  // User just calls drive(), doesn't see complexity

// Example 2: Bank account abstraction
class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }
  
  deposit(amount) {
    // Complex work hidden
    this.validateAmount(amount);
    this._balance = this._balance + amount;
    console.log("Deposit successful");
  }
  
  validateAmount(amount) {
    // Hidden validation logic
    if (amount <= 0) {
      console.log("Invalid amount");
    }
  }
  
  getBalance() {
    return this._balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);  // Simple call
console.log(account.getBalance());

// Example 3: Student abstraction
class Student {
  constructor(name) {
    this._name = name;
    this._totalMarks = 0;
  }
  
  addMarks(marks) {
    // Complex work hidden
    this.validateMarks(marks);
    this._totalMarks = this._totalMarks + marks;
    console.log("Marks added");
  }
  
  validateMarks(marks) {
    // Hidden validation
    if (marks < 0 || marks > 100) {
      console.log("Invalid marks");
    }
  }
  
  getMarks() {
    return this._totalMarks;
  }
}

const student = new Student("Ali");
student.addMarks(85);
console.log(student.getMarks());

// Example 4: Cooking abstraction
class Recipe {
  cook() {
    // Complex process hidden
    this.prepareIngredients();
    this.mix();
    this.heat();
    console.log("Food is ready");
  }
  
  prepareIngredients() {
    console.log("Preparing ingredients");
  }
  
  mix() {
    console.log("Mixing ingredients");
  }
  
  heat() {
    console.log("Heating");
  }
}

const recipe = new Recipe();
recipe.cook();  // One simple call, complex work hidden

// Example 5: Login abstraction
class User {
  constructor(username, password) {
    this._username = username;
    this._password = password;
  }
  
  login(inputUser, inputPass) {
    // Complex verification hidden
    this.verifyUsername(inputUser);
    this.verifyPassword(inputPass);
    console.log("Login successful");
  }
  
  verifyUsername(inputUser) {
    // Hidden logic
    if (inputUser !== this._username) {
      console.log("Username wrong");
    }
  }
  
  verifyPassword(inputPass) {
    // Hidden logic
    if (inputPass !== this._password) {
      console.log("Password wrong");
    }
  }
}

const user = new User("ali", "1234");
user.login("ali", "1234");  // Simple call, complex work hidden