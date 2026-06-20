# Try/Catch Error Handling

## Synchronous Errors

Errors in regular code:

```javascript
try {
    const result = riskyFunction();
    console.log(result);
} catch (error) {
    console.log('Error caught:', error.message);
}
```

## Async/Await Error Handling

Handle errors in async functions:

```javascript
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error.message);
        // Handle error
        return null;
    }
}
```

## Try/Catch/Finally

```javascript
try {
    // Code that might throw an error
    const data = JSON.parse(jsonString);
} catch (error) {
    // Runs if error occurs
    console.log('Caught error:', error.message);
} finally {
    // Always runs, even if error occurred
    console.log('Cleanup code here');
}
```

## Error Types

```javascript
try {
    // Reference error
    console.log(unknownVariable);
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log('Variable not found');
    }
}

try {
    // Type error
    const obj = null;
    obj.method();
} catch (error) {
    if (error instanceof TypeError) {
        console.log('Cannot call method on null');
    }
}

try {
    // Syntax error (caught at parse time)
    eval('invalid code {');
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log('Invalid syntax');
    }
}
```

## Throwing Errors

Create custom errors:

```javascript
function validateAge(age) {
    if (age < 0 || age > 150) {
        throw new Error('Invalid age');
    }
    return age;
}

try {
    validateAge(200);
} catch (error) {
    console.log(error.message); // 'Invalid age'
}
```

## Complex Example

```javascript
async function processUserData(userId) {
    try {
        // Fetch user data
        if (!userId) {
            throw new Error('User ID is required');
        }

        const response = await fetch(`/api/user/${userId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Validate data
        if (!data.name) {
            throw new Error('Invalid user data: name is missing');
        }

        console.log('Success:', data);
        return data;

    } catch (error) {
        console.log('Error caught:', error.message);
        // Can log to external service, show user message, etc.
        return null;

    } finally {
        console.log('Processing complete');
    }
}

processUserData(123);
```

## Error Handling Best Practices

1. ✅ Always use try/catch with async/await
2. ✅ Provide meaningful error messages
3. ✅ Use finally for cleanup
4. ✅ Don't swallow errors silently
5. ✅ Log errors for debugging
6. ✅ Handle specific error types

---

## Common Mistakes

```javascript
// ❌ Bad - Silent error
async function fetchData() {
    const data = await fetch('/api/data');
    return data;  // No error handling!
}

// ✅ Good - Proper error handling
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) throw new Error('API Error');
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch:', error);
        throw error;  // Re-throw if needed
    }
}
```
