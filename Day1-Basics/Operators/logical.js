// Example 1: AND (&&) - BOTH must be true
const hasLicense = true;
const hasInsurance = true;
const canDrive = hasLicense && hasInsurance;
console.log(canDrive);  // Output: true

// Example 2: OR (||) - AT LEAST ONE must be true
const hasMoney = false;
const canBorrow = true;
const canShop = hasMoney || canBorrow;
console.log(canShop);  // Output: true

// Example 3: NOT (!) - Opposite
const isRaining = false;
const isNotRaining = !isRaining;
console.log(isNotRaining);  // Output: true
