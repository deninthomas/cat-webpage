# HTML Structure

## What is HTML?

**HTML** (HyperText Markup Language) is the standard markup language for creating web pages.

## Basic Document Structure

Every HTML document should have this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

### Breaking It Down

| Tag | Purpose |
|-----|---------|
| `<!DOCTYPE html>` | Declares this is an HTML5 document |
| `<html>` | Root element, wraps all content |
| `<head>` | Contains metadata, title, links to CSS |
| `<body>` | Contains all visible content |
| `<meta>` | Provides metadata (charset, viewport, etc.) |
| `<title>` | Page title shown in browser tab |

## Common HTML Elements

### Headings (h1 - h6)

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller heading</h3>
```

### Paragraphs

```html
<p>This is a paragraph of text.</p>
<p>This is another paragraph.</p>
```

### Line Breaks and Horizontal Rule

```html
<p>First line<br>Second line</p>
<hr> <!-- Horizontal line -->
```

### Text Formatting

```html
<b>Bold text</b> or <strong>Strong text</strong>
<i>Italic text</i> or <em>Emphasized text</em>
<u>Underlined text</u>
<mark>Highlighted text</mark>
<small>Small text</small>
<del>Deleted text</del>
<ins>Inserted text</ins>
```

### Lists

**Unordered List**
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

**Ordered List**
```html
<ol>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ol>
```

### Links

```html
<a href="https://example.com">Click here</a>
<a href="page.html">Internal link</a>
<a href="#section">Link to section</a>
```

### Images

```html
<img src="image.jpg" alt="Description of image" width="300">
```

---

## Best Practices

1. ✅ Always use `<!DOCTYPE html>` at the start
2. ✅ Set proper `lang` attribute on `<html>`
3. ✅ Include `<meta>` tags for charset and viewport
4. ✅ Use semantic HTML (proper tags for content)
5. ✅ Always provide `alt` text for images
6. ✅ Properly nest elements
7. ✅ Use lowercase for tag names
