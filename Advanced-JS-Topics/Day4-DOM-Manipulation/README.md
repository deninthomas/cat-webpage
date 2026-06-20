# Day 4 - DOM Manipulation

## Topics Covered

Learn to interact with HTML elements dynamically using JavaScript!

### DOM Basics

- **querySelector()** & **getElementById()** - Select elements
- **innerHTML** & **textContent** - Modify content
- **addEventListener()** - Handle user interactions
- **classList** - Manage CSS classes
- **style** property - Change element styles

## Theory Files

- [querySelector.md](querySelector.md) - Selecting elements from the DOM
- [innerHTML-textContent.md](innerHTML-textContent.md) - Modifying element content
- [addEventListener.md](addEventListener.md) - Handling user events

## Examples

- [domExamples.js](domExamples.js) - Basic DOM manipulation code

## Practical Projects

Build real-world applications:

### 1. 🔢 Counter App
- **File**: [01_counterApp.html](Projects/01_counterApp.html)
- **Description**: Click buttons to increase/decrease counter with color changes
- **Concepts**: `addEventListener`, `textContent`, `style` property
- **[Read More](Projects/01_counterApp.md)**

### 2. 🎨 Color Changer
- **File**: [02_colorChanger.html](Projects/02_colorChanger.html)
- **Description**: Change background color with saved preferences using localStorage
- **Concepts**: `localStorage`, `input` events, `style` property
- **[Read More](Projects/02_colorChanger.md)**

### 3. ✅ Form Validation
- **File**: [03_formValidation.html](Projects/03_formValidation.html)
- **Description**: Real-time form validation with error/success messages
- **Concepts**: `querySelector`, `addEventListener`, regex, `classList`
- **[Read More](Projects/03_formValidation.md)**

## How to Use

1. **Read the theory** - Start with markdown files to understand concepts
2. **Study examples** - Look at `domExamples.js` to see code patterns
3. **Open projects** - Open `.html` files in your browser to see them work
4. **Try it yourself** - Build the projects from scratch first, then compare
5. **Modify & experiment** - Change the code and see what happens

## DOM Manipulation Cheat Sheet

### Selecting Elements
```javascript
// By ID
const el = document.getElementById('id');

// By selector (first match)
const el = document.querySelector('.class');

// By selector (all matches)
const els = document.querySelectorAll('div');
```

### Modifying Content
```javascript
el.innerHTML = '<h1>HTML content</h1>';
el.textContent = 'Just text';
el.innerText = 'With formatting';
```

### Handling Events
```javascript
el.addEventListener('click', (event) => {
    console.log('Clicked!');
});
```

### Managing Classes
```javascript
el.classList.add('active');
el.classList.remove('disabled');
el.classList.toggle('highlight');
```

### Changing Styles
```javascript
el.style.color = 'red';
el.style.fontSize = '20px';
el.style.display = 'none';
```

## Key Concepts Checklist

- ✅ Understand the DOM tree
- ✅ Select elements accurately
- ✅ Modify content and styles
- ✅ Handle user events
- ✅ Manage element classes
- ✅ Store data with localStorage
- ✅ Validate user input
- ✅ Provide user feedback

## Common Mistakes to Avoid

❌ **Wrong**: Using `innerHTML` with user input (security risk)  
✅ **Right**: Use `textContent` for user input, or sanitize first

❌ **Wrong**: Not handling events properly  
✅ **Right**: Always use `addEventListener` with proper callbacks

❌ **Wrong**: Forgetting to check if element exists  
✅ **Right**: Always validate that `querySelector` found the element

❌ **Wrong**: Mixing `innerHTML` and `textContent` confusingly  
✅ **Right**: Choose one and use it consistently

---

## Next Steps

After mastering DOM Manipulation:
- Explore the [Day 5 - HTML Basics](../Day5-HTML-Basics/)
- Learn [Day 6 - CSS Basics](../Day6-CSS-Basics/)
- Study [Bonus - Async/Promises](../Bonus-Async-Promises/)

## Resources

- [MDN - DOM API](https://developer.mozilla.org/en-US/docs/Web/API/DOM)
- [MDN - querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN - addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

---

**Happy coding! 🚀**
