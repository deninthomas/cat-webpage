# querySelector() & getElementById()

## What is the DOM?

The **DOM (Document Object Model)** is a representation of your HTML in JavaScript. It allows you to access and modify HTML elements dynamically.

## querySelector()

Selects the **first** element that matches a CSS selector.

```javascript
// Select by class
const element = document.querySelector('.class-name');

// Select by ID
const element = document.querySelector('#id-name');

// Select by tag
const element = document.querySelector('div');

// Select by attribute
const element = document.querySelector('[data-id="5"]');
```

## getElementById()

Selects an element by its **ID**. Faster than querySelector for ID selection.

```javascript
const element = document.getElementById('my-id');
```

## querySelectorAll()

Selects **all** elements matching a selector and returns a **NodeList**.

```javascript
const elements = document.querySelectorAll('.item');
const elements = document.querySelectorAll('p');

// Loop through them
elements.forEach(el => {
    console.log(el);
});
```

## Comparison

| Method | What it selects | Returns | Speed |
|--------|-----------------|---------|-------|
| `getElementById()` | By ID | Single element | Fastest |
| `querySelector()` | First match of selector | Single element | Fast |
| `querySelectorAll()` | All matches of selector | NodeList | Medium |

---

## Example

```html
<div id="header">Header</div>
<p class="text">Paragraph 1</p>
<p class="text">Paragraph 2</p>
```

```javascript
// Get by ID
const header = document.getElementById('header');

// Get first .text element
const firstText = document.querySelector('.text');

// Get all .text elements
const allTexts = document.querySelectorAll('.text');

console.log(allTexts.length); // 2
```
