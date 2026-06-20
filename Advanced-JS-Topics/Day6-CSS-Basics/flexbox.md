# Flexbox & Layouts

## Flexbox Basics

Flexbox is a powerful layout tool for creating flexible, responsive designs.

## Container Properties

```css
.container {
    display: flex;                  /* Enable flexbox */
    flex-direction: row;            /* row, column, row-reverse, column-reverse */
    justify-content: center;        /* Horizontal alignment */
    align-items: center;            /* Vertical alignment */
    gap: 20px;                      /* Space between items */
    flex-wrap: wrap;                /* Wrap to next line */
}
```

### justify-content (Horizontal)

```css
/* Align left */
justify-content: flex-start;

/* Align right */
justify-content: flex-end;

/* Center */
justify-content: center;

/* Space around */
justify-content: space-around;

/* Space between */
justify-content: space-between;

/* Space evenly */
justify-content: space-evenly;
```

### align-items (Vertical)

```css
align-items: flex-start;    /* Top */
align-items: center;        /* Middle */
align-items: flex-end;      /* Bottom */
align-items: stretch;       /* Full height */
```

## Item Properties

```css
.item {
    flex: 1;                /* Grow equally */
    flex-grow: 1;           /* How much to grow */
    flex-shrink: 1;         /* How much to shrink */
    flex-basis: 200px;      /* Base size */
    align-self: center;     /* Override container alignment */
}
```

## Common Patterns

### Centered Content

```css
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
}
```

### Navbar

```css
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}
```

### Card Layout

```css
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
}

.card {
    flex: 1 1 calc(33.333% - 20px);  /* 3 columns */
    min-width: 250px;
}
```

### Sidebar Layout

```css
.layout {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    flex: 0 0 250px;        /* Fixed width */
    background: #f0f0f0;
}

.main {
    flex: 1;                /* Takes remaining space */
}
```

## Grid (Alternative to Flexbox)

```css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
    gap: 20px;
}

/* Responsive */
.grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

---

## Responsive Design with Flexbox

```css
/* Desktop - 3 columns */
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.item {
    flex: 1 1 calc(33.333% - 20px);
    min-width: 250px;
}

/* Mobile - 1 column */
@media (max-width: 768px) {
    .item {
        flex: 1 1 100%;
    }
}
```
