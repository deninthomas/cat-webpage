# Box Model & Spacing

## The Box Model

Every element in CSS consists of:

```
┌─────────────────────────────────┐
│         MARGIN                  │
│  ┌───────────────────────────┐  │
│  │      BORDER               │  │
│  │  ┌─────────────────────┐  │  │
│  │  │    PADDING          │  │  │
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │   CONTENT     │  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

## Margin

Space **outside** the border (between elements).

```css
div {
    margin: 20px;                    /* All sides */
    margin: 10px 20px;               /* Top/Bottom 10px, Left/Right 20px */
    margin: 10px 20px 30px 40px;     /* Top Right Bottom Left */
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 30px;
    margin-left: 40px;
    margin: 0 auto;                  /* Center horizontally */
}
```

## Padding

Space **inside** the border (between content and border).

```css
div {
    padding: 20px;                   /* All sides */
    padding: 10px 20px;              /* Top/Bottom 10px, Left/Right 20px */
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
}
```

## Border

Line around the element.

```css
div {
    border: 2px solid black;         /* Width Style Color */
    border-width: 2px;
    border-style: solid;             /* solid, dashed, dotted, double */
    border-color: black;
    border-radius: 8px;              /* Rounded corners */
    border-top: 3px solid red;       /* Individual sides */
}
```

## Border Styles

- `solid` - Solid line
- `dashed` - Dashed line
- `dotted` - Dotted line
- `double` - Double line
- `groove` - Grooved effect
- `ridge` - Ridge effect
- `inset` - Inset effect
- `outset` - Outset effect

## Examples

```css
/* Button with padding and margin */
button {
    padding: 10px 20px;
    margin: 10px;
    border: 2px solid blue;
    border-radius: 5px;
}

/* Card with shadow and spacing */
.card {
    padding: 20px;
    margin: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Container with centered content */
.container {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;        /* Center horizontally */
    padding: 20px;
}
```

## Calculating Total Width

When `box-sizing: border-box;` is set:

```
Total Width = Content Width (including padding and border, excluding margin)
```

Without it (default):

```
Total Width = Content Width + Padding + Border + Margin
```

**Best Practice:**

```css
* {
    box-sizing: border-box;  /* Make sizing predictable */
}
```
