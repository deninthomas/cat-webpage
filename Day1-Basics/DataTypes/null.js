// Example 1: Empty value on purpose
const profilePicture = null;
console.log(profilePicture);  // Output: null

// Example 2: User info with null
const userName = "Ali";
const userPhone = null;  // Not provided
console.log(userName);  // Output: Ali
console.log(userPhone);  // Output: null

// Example 3: Clear a variable
let temporaryValue = "Some data";
temporaryValue = null;  // Clear it
console.log(temporaryValue);  // Output: null
