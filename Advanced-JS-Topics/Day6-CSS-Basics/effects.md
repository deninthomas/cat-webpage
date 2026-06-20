# Effects & Transitions

## Hover Effects

```css
/* Color change on hover */
button:hover {
    background-color: #ff6b6b;
    color: white;
}

/* Scale on hover */
.card:hover {
    transform: scale(1.05);
}

/* Shadow on hover */
.item:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Opacity change */
img:hover {
    opacity: 0.8;
}
```

## Transitions

Smooth animation when properties change.

```css
.button {
    background-color: blue;
    color: white;
    transition: all 0.3s ease;  /* Animate all properties over 0.3s */
}

.button:hover {
    background-color: red;
    transform: translateY(-2px);
}
```

### Transition Properties

```css
div {
    transition-property: background-color, transform;  /* Which properties to animate */
    transition-duration: 0.5s;                         /* How long */
    transition-timing-function: ease-in-out;          /* Animation curve */
    transition-delay: 0.1s;                           /* Wait before starting */
    
    /* Shorthand */
    transition: background-color 0.5s ease-in-out 0.1s;
}
```

### Timing Functions

```css
transition-timing-function: linear;       /* Constant speed */
transition-timing-function: ease;         /* Slow start and end */
transition-timing-function: ease-in;      /* Slow start */
transition-timing-function: ease-out;     /* Slow end */
transition-timing-function: ease-in-out;  /* Slow start and end */
```

## Transform

Change the appearance without affecting document flow.

```css
div {
    transform: translateX(20px);        /* Move right */
    transform: translateY(-10px);       /* Move up */
    transform: scale(1.2);              /* Enlarge */
    transform: rotate(45deg);           /* Rotate */
    transform: skewX(10deg);            /* Skew horizontally */
    
    /* Multiple transforms */
    transform: translate(20px, 10px) scale(1.1) rotate(5deg);
}
```

## Animations

Automated, keyframe-based animations.

```css
@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.element {
    animation: slideIn 0.5s ease-out;
}
```

## Common Effects

### Button Hover

```css
button {
    padding: 10px 20px;
    background-color: #667eea;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    background-color: #764ba2;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

button:active {
    transform: translateY(0);
}
```

### Card Hover

```css
.card {
    padding: 20px;
    border-radius: 8px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
```

### Fade In Animation

```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade-in {
    animation: fadeIn 1s ease-in;
}
```

---

## Opacity

Control transparency.

```css
div {
    opacity: 1;     /* Fully visible */
    opacity: 0.5;   /* 50% transparent */
    opacity: 0;     /* Fully transparent */
}
```
