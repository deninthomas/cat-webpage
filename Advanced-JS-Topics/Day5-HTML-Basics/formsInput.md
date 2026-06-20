# Forms & Input Elements

## HTML Forms

Forms are used to collect user input.

```html
<form action="/submit" method="POST">
    <!-- Form elements go here -->
</form>
```

### Input Types

```html
<!-- Text input -->
<input type="text" placeholder="Enter name">

<!-- Email input -->
<input type="email" placeholder="Enter email">

<!-- Password input -->
<input type="password" placeholder="Enter password">

<!-- Number input -->
<input type="number" placeholder="Enter age">

<!-- Checkbox -->
<input type="checkbox"> I agree to terms

<!-- Radio button -->
<input type="radio" name="gender"> Male
<input type="radio" name="gender"> Female

<!-- File upload -->
<input type="file">

<!-- Date input -->
<input type="date">

<!-- Range slider -->
<input type="range" min="0" max="100">

<!-- Color picker -->
<input type="color">

<!-- Submit button -->
<input type="submit" value="Submit">

<!-- Reset button -->
<input type="reset">

<!-- Button -->
<button type="button">Click me</button>
```

### Labels

Always associate labels with inputs:

```html
<label for="username">Username:</label>
<input type="text" id="username">

<label for="email">Email:</label>
<input type="email" id="email">
```

### Textarea

For multi-line text input:

```html
<label for="message">Message:</label>
<textarea id="message" rows="4" cols="50"></textarea>
```

### Select Dropdown

```html
<label for="country">Country:</label>
<select id="country">
    <option value="">Select a country</option>
    <option value="usa">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="canada">Canada</option>
</select>
```

### Form Attributes

```html
<form action="/submit" method="POST">
    <input type="text" required> <!-- Field is required -->
    <input type="email" required>
    <input type="password" minlength="6"> <!-- Min 6 characters -->
    <input type="number" max="100"> <!-- Max value 100 -->
</form>
```

---

## Common Input Attributes

| Attribute | Purpose |
|-----------|---------|
| `type` | Defines input type |
| `name` | Name of the input field |
| `id` | Unique identifier |
| `placeholder` | Hint text |
| `required` | Field must be filled |
| `disabled` | Field is disabled |
| `readonly` | Field cannot be edited |
| `value` | Default value |
| `minlength` | Minimum characters |
| `maxlength` | Maximum characters |
| `pattern` | Regular expression pattern |
