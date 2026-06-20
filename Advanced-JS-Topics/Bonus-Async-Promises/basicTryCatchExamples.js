// ===== BASIC TRY/CATCH EXAMPLES =====
// Simple examples to learn error handling

// ============================================
// EXAMPLE 1: Basic Try/Catch
// ============================================

console.log('--- Example 1: Basic Try/Catch ---');

try {
    const result = 10 / 2;
    console.log('Result:', result); // Will print: 5
} catch (error) {
    console.log('Error caught:', error.message);
}

// ============================================
// EXAMPLE 2: Catching an Error
// ============================================

console.log('\n--- Example 2: Catching an Error ---');

try {
    // This will cause an error
    const obj = null;
    obj.name; // Cannot read property 'name' of null
    console.log('This won\'t print');
} catch (error) {
    console.log('✓ Error was caught!');
    console.log('Error message:', error.message);
    console.log('Error type:', error.constructor.name);
}

// ============================================
// EXAMPLE 3: Using Finally
// ============================================

console.log('\n--- Example 3: Using Finally ---');

try {
    console.log('Trying...');
    throw new Error('Something went wrong!');
    console.log('This won\'t print');
} catch (error) {
    console.log('Caught:', error.message);
} finally {
    console.log('✓ Finally runs regardless!');
}

// ============================================
// EXAMPLE 4: Throwing Custom Errors
// ============================================

console.log('\n--- Example 4: Throwing Custom Errors ---');

function validateAge(age) {
    if (age < 0) {
        throw new Error('Age cannot be negative');
    }
    if (age > 150) {
        throw new Error('Age is too high');
    }
    return age;
}

try {
    validateAge(200); // This will throw an error
} catch (error) {
    console.log('✓ Caught validation error:', error.message);
}

// ============================================
// EXAMPLE 5: Different Error Types
// ============================================

console.log('\n--- Example 5: Different Error Types ---');

// Reference Error
try {
    console.log(nonExistentVariable);
} catch (error) {
    console.log('✓ Reference Error:', error.message);
}

// Type Error
try {
    const result = null.toUpperCase();
} catch (error) {
    console.log('✓ Type Error:', error.message);
}

// Syntax Error (caught at parse time)
try {
    eval('invalid code {');
} catch (error) {
    console.log('✓ Syntax Error:', error.message);
}

// ============================================
// EXAMPLE 6: Try/Catch in Functions
// ============================================

console.log('\n--- Example 6: Try/Catch in Functions ---');

function safeJsonParse(jsonString) {
    try {
        const data = JSON.parse(jsonString);
        return { success: true, data };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Valid JSON
const result1 = safeJsonParse('{"name": "John", "age": 25}');
console.log('Valid JSON:', result1);

// Invalid JSON
const result2 = safeJsonParse('invalid json');
console.log('Invalid JSON:', result2);

// ============================================
// EXAMPLE 7: Multiple Catch Blocks (Error Handling Strategy)
// ============================================

console.log('\n--- Example 7: Error Handling Strategy ---');

function processData(data) {
    try {
        if (!data) {
            throw new Error('Data is required');
        }

        if (typeof data !== 'object') {
            throw new TypeError('Data must be an object');
        }

        if (!data.id || !data.name) {
            throw new Error('Data must have id and name');
        }

        console.log('✓ Data is valid:', data);
        return true;

    } catch (error) {
        if (error instanceof TypeError) {
            console.log('Type Error:', error.message);
        } else if (error instanceof Error) {
            console.log('Error:', error.message);
        } else {
            console.log('Unknown error');
        }
        return false;
    }
}

processData(null);                              // Missing data
processData('string');                          // Wrong type
processData({ id: 1 });                        // Missing name
processData({ id: 1, name: 'John' });         // Valid!

// ============================================
// EXAMPLE 8: Try/Catch with Loops
// ============================================

console.log('\n--- Example 8: Try/Catch with Loops ---');

const data = [
    '{"name": "Alice"}',
    'invalid',
    '{"name": "Bob"}',
    'also invalid',
    '{"name": "Charlie"}'
];

const results = [];

for (let i = 0; i < data.length; i++) {
    try {
        const parsed = JSON.parse(data[i]);
        results.push(parsed);
        console.log(`✓ Item ${i} parsed:`, parsed.name);
    } catch (error) {
        console.log(`✗ Item ${i} failed: Invalid JSON`);
    }
}

console.log('\nSuccessfully parsed:', results);

// ============================================
// EXAMPLE 9: Nested Try/Catch
// ============================================

console.log('\n--- Example 9: Nested Try/Catch ---');

function outerFunction() {
    try {
        try {
            throw new Error('Inner error');
        } catch (error) {
            console.log('Inner catch:', error.message);
            throw new Error('Outer error');
        }
    } catch (error) {
        console.log('Outer catch:', error.message);
    }
}

outerFunction();

// ============================================
// EXAMPLE 10: Try/Catch Best Practices
// ============================================

console.log('\n--- Example 10: Best Practices ---');

function bestPractice(value) {
    try {
        // Be specific about what might fail
        if (value === null || value === undefined) {
            throw new Error('Value cannot be null or undefined');
        }

        const result = value.toString().toUpperCase();
        return result;

    } catch (error) {
        // Always log the error for debugging
        console.error('Error in bestPractice:', error);

        // Return a sensible default
        return 'DEFAULT';

    } finally {
        // Use finally for cleanup if needed
        console.log('bestPractice execution complete');
    }
}

console.log('\nWith valid value:');
bestPractice('hello');

console.log('\nWith null value:');
bestPractice(null);

// ============================================
// EXAMPLE 11: Common Mistake - Silent Failures
// ============================================

console.log('\n--- Example 11: Silent Failures vs Proper Handling ---');

// ❌ BAD - Silent failure
function badExample() {
    try {
        riskyOperation();
    } catch (error) {
        // Nothing happens - error is silently ignored!
    }
}

// ✅ GOOD - Proper error handling
function goodExample() {
    try {
        riskyOperation();
    } catch (error) {
        console.error('Operation failed:', error.message);
        // Handle the error appropriately
        return null;
    }
}

function riskyOperation() {
    throw new Error('Operation failed');
}

console.log('Bad example - error silently ignored');
badExample();

console.log('\nGood example - error is logged');
goodExample();
