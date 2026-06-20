// ===== querySelector Examples =====

// Select by ID
const header = document.getElementById('header');
console.log(header);

// Select by class (first match)
const firstParagraph = document.querySelector('.paragraph');
console.log(firstParagraph);

// Select by tag
const allDivs = document.querySelectorAll('div');
console.log(allDivs);

// Select by attribute
const submitBtn = document.querySelector('[type="submit"]');
console.log(submitBtn);

// ===== Modifying Content =====

// Using innerHTML
const content = document.getElementById('content');
content.innerHTML = '<h2>New Content</h2><p>Updated via innerHTML</p>';

// Using textContent
const title = document.getElementById('title');
title.textContent = 'Welcome to DOM Manipulation!';

// ===== Event Listeners =====

// Click event
const button = document.getElementById('btn');
button.addEventListener('click', function() {
    console.log('Button was clicked!');
});

// Input event
const input = document.getElementById('input');
input.addEventListener('input', (event) => {
    console.log('Current value:', event.target.value);
});

// Mouseover event
const box = document.querySelector('.box');
if (box) {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'red';
    });

    box.addEventListener('mouseout', () => {
        box.style.backgroundColor = 'blue';
    });
}

// ===== ClassList Manipulation =====

// Add class
button.classList.add('active');

// Remove class
button.classList.remove('disabled');

// Toggle class
button.classList.toggle('highlight');

// Check if has class
if (button.classList.contains('active')) {
    console.log('Button is active');
}
