// ===== Counter App =====

let counter = 0;

function initializeCounter() {
    const increaseBtn = document.getElementById('increase');
    const decreaseBtn = document.getElementById('decrease');
    const resetBtn = document.getElementById('reset');
    const display = document.getElementById('counter-display');

    // Increase counter
    increaseBtn.addEventListener('click', () => {
        counter++;
        display.textContent = counter;
        updateColor();
    });

    // Decrease counter
    decreaseBtn.addEventListener('click', () => {
        counter--;
        display.textContent = counter;
        updateColor();
    });

    // Reset counter
    resetBtn.addEventListener('click', () => {
        counter = 0;
        display.textContent = counter;
        updateColor();
    });

    // Change color based on value
    function updateColor() {
        if (counter > 0) {
            display.style.color = 'green';
        } else if (counter < 0) {
            display.style.color = 'red';
        } else {
            display.style.color = 'black';
        }
    }
}

// Initialize when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCounter);
} else {
    initializeCounter();
}
