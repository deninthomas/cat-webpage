// ===== Color Changer App =====

function initializeColorChanger() {
    const colorInput = document.getElementById('colorPicker');
    const changeBtn = document.getElementById('changeBtn');
    const randomBtn = document.getElementById('randomBtn');
    const body = document.body;

    // Change color from input
    changeBtn.addEventListener('click', () => {
        const color = colorInput.value;
        body.style.backgroundColor = color;
        saveColor(color);
    });

    // Random color
    randomBtn.addEventListener('click', () => {
        const randomColor = getRandomColor();
        body.style.backgroundColor = randomColor;
        colorInput.value = randomColor;
        saveColor(randomColor);
    });

    // Generate random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Save color to localStorage
    function saveColor(color) {
        localStorage.setItem('bgColor', color);
    }

    // Load saved color
    function loadColor() {
        const savedColor = localStorage.getItem('bgColor');
        if (savedColor) {
            body.style.backgroundColor = savedColor;
            colorInput.value = savedColor;
        }
    }

    loadColor();
}

// Initialize when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeColorChanger);
} else {
    initializeColorChanger();
}
