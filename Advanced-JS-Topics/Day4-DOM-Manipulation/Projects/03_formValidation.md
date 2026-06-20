# Simple Form Validation

## What You'll Learn
- Validate form inputs
- Prevent form submission
- Provide real-time feedback
- Display error messages

## Features
- Name validation (min 3 characters)
- Email validation (proper format)
- Password validation (min 6 characters)
- Real-time border color feedback
- Error/Success messages
- Form reset on success

## Validation Rules
- **Name**: Must be at least 3 characters
- **Email**: Must be valid email format (user@example.com)
- **Password**: Must be at least 6 characters

## How It Works
1. Fill in the form fields
2. Fields turn green if valid, red if invalid
3. Click Submit
4. If all fields are valid, success message appears
5. If any field is invalid, error message appears
6. Form clears on successful submission

## JavaScript Concepts Used
- Form `submit` event
- `preventDefault()` to stop default behavior
- Input validation logic
- Regular expressions (regex) for email
- Dynamic styling
- `classList` management
- `trim()` method
