# innerHTML vs textContent

## innerHTML

Modifies the **entire content** inside an element, including HTML tags.

```javascript
const div = document.getElementById('content');

// Set HTML content
div.innerHTML = '<h1>Hello</h1><p>This is a paragraph</p>';

// Get HTML content
console.log(div.innerHTML);
```

⚠️ **Security Warning**: Never use `innerHTML` with user input! It can cause XSS attacks.

```javascript
// DANGEROUS - Never do this!
div.innerHTML = userInput; // If userInput has <script> tags, they will execute!
```

## textContent

Sets or gets only the **text content**, ignoring HTML tags.

```javascript
const div = document.getElementById('content');

// Set text content
div.textContent = '<h1>Hello</h1>'; // Shows as text, not HTML

// Get text content
console.log(div.textContent);
```

✅ **Safer** option when working with user input.

## Comparison

| Property | Sets/Gets | HTML tags | Speed | Security |
|----------|-----------|-----------|-------|----------|
| `innerHTML` | HTML Content | ✅ Rendered | Slower | ⚠️ Risky |
| `textContent` | Text only | ❌ Shown as text | Faster | ✅ Safer |

---

## Example

```html
<div id="demo"></div>
```

```javascript
const demo = document.getElementById('demo');

// Using innerHTML
demo.innerHTML = '<strong>Bold Text</strong>';
// Output: Bold Text (in bold)

// Using textContent
demo.textContent = '<strong>Bold Text</strong>';
// Output: <strong>Bold Text</strong> (shown as text)
```

## When to Use

- **`innerHTML`**: When you want to render HTML content (from trusted sources only)
- **`textContent`**: When you just need to display text (safer with user input)
