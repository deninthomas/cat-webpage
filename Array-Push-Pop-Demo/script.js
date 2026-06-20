// ===================================================================
// ARRAY PUSH AND POP DEMO - JAVASCRIPT
// ===================================================================

// Global Variables
let myArray = [];
let consoleMessages = [];
let stats = {
    operations: 0,
    pushed: 0,
    popped: 0
};

// ===================================================================
// CONSOLE LOGGING FUNCTION
// ===================================================================

function addLog(action, value = '', info = '') {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${action} ${value} ${info}`);

    // Add to web console
    const consoleBox = document.getElementById('consoleBox');
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';

    if (action.includes('PUSH')) {
        logEntry.innerHTML = `<span class="log-action">[PUSH]</span> Added <span class="log-value">${value}</span> ${info}`;
    } else if (action.includes('POP')) {
        logEntry.innerHTML = `<span class="log-info">[POP]</span> Removed <span class="log-value">${value}</span> ${info}`;
    } else if (action.includes('REVERSE')) {
        logEntry.innerHTML = `<span class="log-action">[REVERSE]</span> Displaying array reversed: <span class="log-value">${value}</span>`;
    } else {
        logEntry.innerHTML = `<span class="log-action">${action}</span> ${value} ${info}`;
    }

    consoleBox.appendChild(logEntry);
    consoleBox.scrollTop = consoleBox.scrollHeight; // Auto-scroll to bottom
}

// ===================================================================
// UPDATE DISPLAY FUNCTIONS
// ===================================================================

function updateDisplay() {
    // Display array
    const arrayStr = '[' + myArray.join(', ') + ']';
    document.getElementById('arrayDisplay').textContent = arrayStr;
    document.getElementById('arrayDisplay2').textContent = arrayStr;

    // Display length
    document.getElementById('arrayLength').textContent = `Length: ${myArray.length}`;
    document.getElementById('arrayLength2').textContent = `Length: ${myArray.length}`;

    // Update stats
    document.getElementById('statLength').textContent = myArray.length;
    document.getElementById('statOps').textContent = stats.operations;
    document.getElementById('statPushed').textContent = stats.pushed;
    document.getElementById('statPopped').textContent = stats.popped;
}

// ===================================================================
// PUSH FUNCTION - SINGLE VALUE
// ===================================================================

function pushSingleValue() {
    const input = document.getElementById('pushValue');
    const value = parseInt(input.value);

    // Validate input
    if (input.value === '' || isNaN(value)) {
        alert('Please enter a valid number!');
        input.focus();
        return;
    }

    // Push the value
    myArray.push(value);
    stats.operations++;
    stats.pushed++;

    // Log the action
    addLog('PUSH', value, `→ Array length is now ${myArray.length}`);
    console.log('Current array:', myArray);

    // Update display
    updateDisplay();

    // Clear input
    input.value = '';
    input.focus();
}

// ===================================================================
// PUSH FUNCTION - MULTIPLE VALUES
// ===================================================================

function pushMultipleValues() {
    addLog('PUSH', '', '→ Pushing values 1, 2, 3, 4, 5...');

    // Push values 1 through 5
    for (let i = 1; i <= 5; i++) {
        myArray.push(i);
        stats.operations++;
        stats.pushed++;
        addLog('PUSH', i, `→ Current length: ${myArray.length}`);
    }

    console.log('All values pushed. Current array:', myArray);
    updateDisplay();
}

// ===================================================================
// POP FUNCTION - SINGLE VALUE
// ===================================================================

function popValue() {
    if (myArray.length === 0) {
        alert('Array is empty! Nothing to pop.');
        addLog('POP', 'undefined', '→ Array is empty!');
        return;
    }

    // Pop the value
    const removed = myArray.pop();
    stats.operations++;
    stats.popped++;

    // Log the action
    addLog('POP', removed, `→ Removed from end. Array length is now ${myArray.length}`);
    console.log('Popped value:', removed);
    console.log('Remaining array:', myArray);

    // Update display
    updateDisplay();
}

// ===================================================================
// POP FUNCTION - ALL VALUES
// ===================================================================

function popAllValues() {
    if (myArray.length === 0) {
        alert('Array is already empty!');
        return;
    }

    const initialLength = myArray.length;
    addLog('POP', '', `→ Popping all ${initialLength} values...`);

    // Pop all values one by one
    for (let i = 0; i < initialLength; i++) {
        const removed = myArray.pop();
        stats.operations++;
        stats.popped++;
        addLog('POP', removed, `→ Removed (${i + 1}/${initialLength})`);
    }

    console.log('All values popped. Current array:', myArray);
    updateDisplay();
}

// ===================================================================
// REVERSE DISPLAY FUNCTION - USING FOR LOOP
// ===================================================================

function displayReverse() {
    if (myArray.length === 0) {
        document.getElementById('reverseDisplay').textContent = '[] (Empty array)';
        addLog('REVERSE', 'Empty', '→ Nothing to reverse');
        return;
    }

    addLog('REVERSE', `[${myArray.join(', ')}]`, '→ Displaying in reverse order...');

    // Create reversed display using for loop
    let reversedArray = [];

    // FOR LOOP - REVERSE (start from end, go backwards)
    for (let i = myArray.length - 1; i >= 0; i--) {
        reversedArray.push(myArray[i]);
        console.log(`Index ${i}: ${myArray[i]}`);
    }

    // Display reversed array
    const reversedStr = '[' + reversedArray.join(', ') + ']';
    document.getElementById('reverseDisplay').textContent = reversedStr;

    console.log('Reversed array:', reversedArray);
    addLog('REVERSE', reversedStr, '→ Display complete!');
}

// ===================================================================
// RESET FUNCTION
// ===================================================================

function resetArray() {
    const wasEmpty = myArray.length === 0;
    const previousLength = myArray.length;

    myArray = [];
    stats.operations++;

    addLog('RESET', '', `→ Array cleared (was ${previousLength} items)`);
    console.log('Array has been reset to empty');

    updateDisplay();
    document.getElementById('reverseDisplay').textContent = '[]';
}

// ===================================================================
// CLEAR CONSOLE FUNCTION
// ===================================================================

function clearConsole() {
    document.getElementById('consoleBox').innerHTML = 
        '<div class="log-entry"><span class="log-info">[INFO]</span> Console cleared. Ready for new operations...</div>';
    console.clear();
    addLog('CONSOLE', '', '→ Console cleared');
}

// ===================================================================
// VIEW IN BROWSER CONSOLE
// ===================================================================

function viewConsoleInBrowser() {
    console.log('%c=== ARRAY PUSH & POP DEMO ===', 'color: #667eea; font-size: 16px; font-weight: bold;');
    console.log('Current array:', myArray);
    console.log('Array length:', myArray.length);
    console.log('Statistics:', stats);
    console.log('Open DevTools (F12) to see more!');
    alert('Check the browser console (F12) for more details!');
}

// ===================================================================
// RUN FULL DEMO
// ===================================================================

function runDemo() {
    resetArray();

    console.log('='.repeat(50));
    console.log('STARTING FULL DEMO');
    console.log('='.repeat(50));

    // Step 1: Push values
    console.log('\n--- STEP 1: PUSH VALUES ---');
    addLog('DEMO', '', '→ Step 1: Pushing values 10, 20, 30, 40, 50');

    const values = [10, 20, 30, 40, 50];
    for (let i = 0; i < values.length; i++) {
        myArray.push(values[i]);
        stats.operations++;
        stats.pushed++;
        console.log(`Pushed ${values[i]}. Array: [${myArray.join(', ')}]`);
        addLog('PUSH', values[i], `→ Current: [${myArray.join(', ')}]`);
    }
    updateDisplay();

    // Wait 1 second then continue
    setTimeout(() => {
        // Step 2: Pop values
        console.log('\n--- STEP 2: POP VALUES ---');
        addLog('DEMO', '', '→ Step 2: Popping 2 values');

        for (let i = 0; i < 2; i++) {
            const removed = myArray.pop();
            stats.operations++;
            stats.popped++;
            console.log(`Popped ${removed}. Array: [${myArray.join(', ')}]`);
            addLog('POP', removed, `→ Current: [${myArray.join(', ')}]`);
        }
        updateDisplay();

        // Wait 1 second then show reverse
        setTimeout(() => {
            // Step 3: Display reverse
            console.log('\n--- STEP 3: DISPLAY REVERSED ---');
            let reversedArray = [];

            // FOR LOOP - REVERSE
            for (let i = myArray.length - 1; i >= 0; i--) {
                reversedArray.push(myArray[i]);
                console.log(`Position ${i}: ${myArray[i]}`);
            }

            console.log('Reversed: [' + reversedArray.join(', ') + ']');
            document.getElementById('reverseDisplay').textContent = '[' + reversedArray.join(', ') + ']';
            addLog('DEMO', '[' + reversedArray.join(', ') + ']', '→ Full demo complete!');

            console.log('\n' + '='.repeat(50));
            console.log('DEMO COMPLETE');
            console.log('='.repeat(50));
        }, 1000);
    }, 1000);
}

// ===================================================================
// INITIALIZE ON PAGE LOAD
// ===================================================================

window.addEventListener('DOMContentLoaded', () => {
    console.log('='.repeat(50));
    console.log('ARRAY PUSH & POP DEMO - INITIALIZED');
    console.log('='.repeat(50));
    addLog('INIT', '', '→ Welcome! Ready to learn push() and pop()');
    updateDisplay();
});

// ===================================================================
// KEYBOARD SHORTCUT
// ===================================================================

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const pushInput = document.getElementById('pushValue');
        if (pushInput === document.activeElement) {
            pushSingleValue();
        }
    }
});
