// ===== PROMISES EXAMPLES =====

// Basic Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});

myPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

// ===== ASYNC/AWAIT EXAMPLES =====

// Async function returning promise
async function fetchData() {
    const data = { name: 'John', age: 25 };
    return data;
}

// Using async function
async function main() {
    const data = await fetchData();
    console.log(data);
}

// ===== REAL WORLD: FETCH API =====

// Using Promises with Fetch
function getUserWithPromise(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            console.log('User from Promise:', user);
            return user;
        })
        .catch(error => console.log('Error:', error));
}

getUserWithPromise(1);

// Using Async/Await with Fetch
async function getUserWithAsync(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await response.json();
        console.log('User from Async:', user);
        return user;
    } catch (error) {
        console.log('Error:', error);
    }
}

getUserWithAsync(1);

// ===== ERROR HANDLING =====

// Try/Catch with Promises converted to Async/Await
async function processData(dataId) {
    try {
        if (!dataId) {
            throw new Error('Data ID is required');
        }

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${dataId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        console.log('Processed data:', data);
        return data;

    } catch (error) {
        console.log('Error caught:', error.message);
        return null;

    } finally {
        console.log('Processing complete');
    }
}

processData(1);

// ===== PROMISE CHAINING =====

function getUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json());
}

function getPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(res => res.json());
}

// Chain promises
getUser(1)
    .then(user => {
        console.log('User:', user.name);
        return getPosts(user.id);
    })
    .then(posts => {
        console.log('Posts count:', posts.length);
    })
    .catch(error => console.log('Error:', error));

// ===== ASYNC/AWAIT MULTIPLE OPERATIONS =====

async function getUserWithPosts(userId) {
    try {
        const user = await getUser(userId);
        console.log('User:', user.name);

        const posts = await getPosts(user.id);
        console.log('Posts count:', posts.length);

        return { user, posts };
    } catch (error) {
        console.log('Error:', error);
    }
}

getUserWithPosts(1);

// ===== PARALLEL REQUESTS =====

// Wait for all promises at once
async function getMultipleUsers(userIds) {
    try {
        const promises = userIds.map(id => 
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => res.json())
        );

        const users = await Promise.all(promises);
        console.log('All users:', users);
        return users;

    } catch (error) {
        console.log('Error:', error);
    }
}

getMultipleUsers([1, 2, 3]);

// ===== TIMEOUT WITH PROMISES =====

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Operation timed out'));
        }, ms);
    });
}

async function fetchWithTimeout(url, timeoutMs) {
    try {
        const response = await Promise.race([
            fetch(url),
            timeout(timeoutMs)
        ]);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error.message);
    }
}

fetchWithTimeout('https://jsonplaceholder.typicode.com/users/1', 5000);
