# Promises & Async/Await

## Callbacks (The Old Way)

Before Promises, we used callbacks:

```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'John', age: 25 };
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});
```

**Problem:** Callback Hell (nested callbacks)

```javascript
fetchData((data1) => {
    fetchMoreData(data1, (data2) => {
        fetchEvenMore(data2, (data3) => {
            // Too many nested callbacks!
        });
    });
});
```

---

## Promises

A Promise is an object that represents a future value.

### Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {
    // Do something async
    if (success) {
        resolve(value);  // Promise fulfilled
    } else {
        reject(error);   // Promise rejected
    }
});
```

### Promise States

1. **Pending** - Initial state, operation hasn't completed yet
2. **Fulfilled** - Operation completed successfully
3. **Rejected** - Operation failed

### Using Promises

```javascript
promise
    .then((result) => {
        console.log('Success:', result);
        return result;  // Chain promises
    })
    .then((result) => {
        console.log('Chained:', result);
    })
    .catch((error) => {
        console.log('Error:', error);
    })
    .finally(() => {
        console.log('Done!');
    });
```

### Promise Methods

```javascript
// Wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log('All done:', results);
    });

// Race - first promise to resolve wins
Promise.race([promise1, promise2])
    .then((result) => {
        console.log('First to complete:', result);
    });
```

## Example Promise

```javascript
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        // Simulate API call
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: 'John', email: 'john@example.com' });
            } else {
                reject('Invalid user ID');
            }
        }, 1000);
    });
}

// Using the promise
fetchUserData(1)
    .then((user) => {
        console.log('User:', user);
    })
    .catch((error) => {
        console.log('Error:', error);
    });
```

---

## Async/Await (Modern Way)

`async/await` makes asynchronous code look and behave more like synchronous code.

### Async Function

```javascript
async function fetchUser() {
    // Inside async function, we can use await
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    return data;
}

// Call async function
fetchUser()
    .then((user) => {
        console.log('User:', user);
    })
    .catch((error) => {
        console.log('Error:', error);
    });
```

### Key Points

- `async` function always returns a Promise
- `await` pauses execution until Promise resolves
- `await` can only be used inside `async` function
- Makes code cleaner and easier to read

### Benefits

```javascript
// Without async/await (Promise hell)
function getUser(id) {
    return fetch(`/api/user/${id}`)
        .then(res => res.json())
        .then(user => {
            return fetch(`/api/posts/${user.id}`)
                .then(res => res.json())
                .then(posts => ({user, posts}));
        });
}

// With async/await (Much cleaner!)
async function getUser(id) {
    const userRes = await fetch(`/api/user/${id}`);
    const user = await userRes.json();
    
    const postsRes = await fetch(`/api/posts/${user.id}`);
    const posts = await postsRes.json();
    
    return {user, posts};
}
```

---

## Converting Promises to Async/Await

**Before (Promises):**
```javascript
function fetchData() {
    return fetchUser()
        .then(user => fetchPosts(user.id))
        .then(posts => ({user, posts}))
        .catch(error => console.log(error));
}
```

**After (Async/Await):**
```javascript
async function fetchData() {
    try {
        const user = await fetchUser();
        const posts = await fetchPosts(user.id);
        return {user, posts};
    } catch(error) {
        console.log(error);
    }
}
```

---

## Promise Tips

1. ✅ Chain `then()` calls to process results
2. ✅ Always handle errors with `catch()`
3. ✅ Use `finally()` for cleanup
4. ✅ Use `async/await` for cleaner code
5. ✅ Don't forget to `await` when calling async functions
