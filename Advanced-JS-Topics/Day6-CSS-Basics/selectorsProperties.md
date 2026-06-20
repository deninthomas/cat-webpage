# CSS Selectors & Properties

## What is CSS?

**CSS (Cascading Style Sheets)** is used to style HTML elements - colors, fonts, spacing, layouts, etc.

## Selectors

### Basic Selectors

```css
/* Element selector */
p {
    color: blue;
}

/* Class selector */
.highlight {
    background-color: yellow;
}

/* ID selector */
#header {
    background-color: navy;
}

/* Universal selector */
* {
    margin: 0;
    padding: 0;
}
```

### Combination Selectors

```css
/* Descendant selector */
div p {
    color: red;
}

/* Child selector */
ul > li {
    list-style: none;
}

/* Adjacent selector */
h1 + p {
    margin-top: 0;
}

/* Sibling selector */
h1 ~ p {
    color: gray;
}
```

### Attribute Selectors

```css
/* Has specific attribute */
input[type="text"] {
    border: 1px solid blue;
}

/* Attribute value contains */
a[href*="example"] {
    color: purple;
}

/* Attribute value starts with */
a[href^="https"] {
    color: green;
}

/* Attribute value ends with */
a[href$=".pdf"] {
    color: red;
}
```

### Pseudo-classes

```css
/* Link states */
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:active { color: orange; }

/* Other pseudo-classes */
input:focus { border-color: blue; }
button:disabled { opacity: 0.5; }
li:first-child { font-weight: bold; }
li:last-child { margin-bottom: 0; }
li:nth-child(2) { color: red; }
```

## Common Properties

### Text Properties

```css
div {
    color: #333;              /* Text color */
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;        /* 100-900 or bold, normal */
    font-style: italic;       /* italic, normal, oblique */
    text-align: center;       /* left, right, center, justify */
    text-decoration: underline;
    line-height: 1.6;
    letter-spacing: 2px;
}
```

### Background Properties

```css
div {
    background-color: #f0f0f0;
    background-image: url('image.jpg');
    background-size: cover;   /* cover, contain, 100px, etc */
    background-position: center;
    background-repeat: no-repeat;
}
```

### Width & Height

```css
div {
    width: 300px;
    height: 200px;
    max-width: 100%;          /* Responsive */
    min-height: 50px;
}
```

## Units

| Unit | Example | Use Case |
|------|---------|----------|
| `px` | `16px` | Pixels - fixed size |
| `%` | `50%` | Percentage - relative |
| `em` | `1.5em` | Relative to font-size |
| `rem` | `1.5rem` | Relative to root font-size |
| `vh` | `50vh` | Viewport height |
| `vw` | `50vw` | Viewport width |

---

## Colors

### Color Formats

```css
div {
    color: red;                    /* Named colors */
    color: #FF0000;                /* Hex colors */
    color: rgb(255, 0, 0);         /* RGB */
    color: rgba(255, 0, 0, 0.5);   /* RGBA with transparency */
}
```
