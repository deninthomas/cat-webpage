# addEventListener()

## What is an Event?

An **event** is something that happens on a web page:
- Click on a button
- Mouse hover over an element
- Keyboard key press
- Form submission
- Page load

## addEventListener()

Attaches an event handler to an element.

```javascript
element.addEventListener('eventType', function);
```

## Common Events

| Event | Triggers |
|-------|----------|
| `'click'` | When element is clicked |
| `'mouseover'` | When mouse enters element |
| `'mouseout'` | When mouse leaves element |
| `'keydown'` | When keyboard key is pressed |
| `'keyup'` | When keyboard key is released |
| `'submit'` | When form is submitted |
| `'change'` | When input value changes |
| `'input'` | While typing in input |

## Basic Example

```javascript
const button = document.getElementById('myBtn');

button.addEventListener('click', function() {
    console.log('Button clicked!');
});
```

## With Arrow Function

```javascript
const button = document.getElementById('myBtn');

button.addEventListener('click', () => {
    console.log('Button clicked!');
});
```

## Accessing Event Object

```javascript
const button = document.getElementById('myBtn');

button.addEventListener('click', (event) => {
    console.log(event); // Full event details
    console.log(event.target); // The clicked element
    console.log(event.type); // 'click'
});
```

## Multiple Events

```javascript
const input = document.getElementById('myInput');

// Event while typing
input.addEventListener('input', (e) => {
    console.log('Current value:', e.target.value);
});

// Event when input loses focus
input.addEventListener('blur', () => {
    console.log('Input lost focus');
});
```

## Remove Event Listener

```javascript
function handleClick() {
    console.log('Clicked!');
}

// Add
button.addEventListener('click', handleClick);

// Remove
button.removeEventListener('click', handleClick);
```

---

## Full Example

```html
<button id="btn">Click Me</button>
<p id="text"></p>

<script>
    const btn = document.getElementById('btn');
    const text = document.getElementById('text');
    let count = 0;

    btn.addEventListener('click', () => {
        count++;
        text.textContent = `Button clicked ${count} times`;
    });
</script>
```
