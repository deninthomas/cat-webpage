# Bonus - Async & Promises

## What You'll Learn

Advanced JavaScript concepts for handling asynchronous operations:
- Promises and how they work
- Async/await syntax
- Error handling with try/catch
- Real-world API examples

## Files

- `promises-asyncAwait.md` - Promises and async/await concepts
- `tryCatch.md` - Error handling with try/catch
- `asyncExamples.js` - Code examples
- `asyncDemo.html` - Interactive demo page

## Quick Overview

### Callbacks (Old Way)
```javascript
fetchData((data) => {
    fetchMore(data, (moreData) => {
        // Callback hell!
    });
});
```

### Promises (Better)
```javascript
fetchData()
    .then(data => fetchMore(data))
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

### Async/Await (Best)
```javascript
async function process() {
    try {
        const data = await fetchData();
        const result = await fetchMore(data);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
```

## Key Concepts

### 1. Promises
- Represent future values
- Three states: Pending, Fulfilled, Rejected
- Chain with `.then()` and `.catch()`

### 2. Async/Await
- Makes async code look synchronous
- Use `await` to pause execution
- Cleaner than Promise chains
- Must use inside `async` function

### 3. Error Handling
- Use `try/catch` for error handling
- `finally` block always runs
- Proper error handling is important!

## Try the Demo

Open `asyncDemo.html` in your browser to:
1. See promises in action
2. Compare async/await with promises
3. Fetch real data from an API
4. Learn error handling
5. Compare sequential vs parallel requests

## Common Patterns

### Fetch Single Item
```javascript
async function getUser(id) {
    const res = await fetch(`/api/users/${id}`);
    return await res.json();
}
```

### Fetch Multiple Items (Parallel)
```javascript
async function getUsers(ids) {
    const promises = ids.map(id => fetch(`/api/users/${id}`).then(r => r.json()));
    return await Promise.all(promises);
}
```

### With Error Handling
```javascript
async function getUser(id) {
    try {
        if (!id) throw new Error('ID required');
        const res = await fetch(`/api/users/${id}`);
        if (!res.ok) throw new Error('Not found');
        return await res.json();
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}
```

---

## Practice Exercises

1. ✅ Convert Promise code to async/await
2. ✅ Add error handling to all async functions
3. ✅ Fetch from a real API
4. ✅ Compare sequential vs parallel performance
5. ✅ Handle network errors gracefully

---

**Master async programming! 🚀**
