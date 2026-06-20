// ===== Form Validation =====

function initializeFormValidation() {
    const form = document.getElementById('validationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');
    const message = document.getElementById('message');

    // Validate on submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        // Reset message
        message.textContent = '';
        message.className = '';

        // Validate name
        if (name === '') {
            showError('Name cannot be empty');
            return;
        }
        if (name.length < 3) {
            showError('Name must be at least 3 characters');
            return;
        }

        // Validate email
        if (email === '') {
            showError('Email cannot be empty');
            return;
        }
        if (!isValidEmail(email)) {
            showError('Invalid email format');
            return;
        }

        // Validate password
        if (password === '') {
            showError('Password cannot be empty');
            return;
        }
        if (password.length < 6) {
            showError('Password must be at least 6 characters');
            return;
        }

        // All valid
        showSuccess('Form submitted successfully!');
        form.reset();
    });

    // Helper functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showError(msg) {
        message.textContent = msg;
        message.className = 'error';
    }

    function showSuccess(msg) {
        message.textContent = msg;
        message.className = 'success';
    }

    // Real-time validation feedback
    nameInput.addEventListener('input', () => {
        if (nameInput.value.length >= 3) {
            nameInput.style.borderColor = 'green';
        } else if (nameInput.value.length > 0) {
            nameInput.style.borderColor = 'red';
        }
    });

    emailInput.addEventListener('input', () => {
        if (isValidEmail(emailInput.value)) {
            emailInput.style.borderColor = 'green';
        } else if (emailInput.value.length > 0) {
            emailInput.style.borderColor = 'red';
        }
    });

    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length >= 6) {
            passwordInput.style.borderColor = 'green';
        } else if (passwordInput.value.length > 0) {
            passwordInput.style.borderColor = 'red';
        }
    });
}

// Initialize when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFormValidation);
} else {
    initializeFormValidation();
}
