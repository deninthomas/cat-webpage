# Tables & Media

## HTML Tables

Tables organize data in rows and columns.

```html
<table border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>25</td>
            <td>New York</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>30</td>
            <td>London</td>
        </tr>
    </tbody>
</table>
```

### Table Elements

| Tag | Purpose |
|-----|---------|
| `<table>` | Container for table |
| `<thead>` | Table header section |
| `<tbody>` | Table body section |
| `<tfoot>` | Table footer section |
| `<tr>` | Table row |
| `<th>` | Table header cell |
| `<td>` | Table data cell |

## Images

```html
<!-- Basic image -->
<img src="photo.jpg" alt="Photo description">

<!-- Image with width and height -->
<img src="photo.jpg" alt="Photo" width="300" height="200">

<!-- Image as link -->
<a href="page.html">
    <img src="thumbnail.jpg" alt="Click to visit">
</a>
```

### Image Formats

- **JPG**: For photos (smaller file size)
- **PNG**: For graphics with transparency
- **GIF**: For animations
- **WebP**: Modern format (smaller, faster)
- **SVG**: Vector graphics (scalable)

## Audio & Video

### Audio

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser doesn't support audio.
</audio>
```

### Video

```html
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser doesn't support video.
</video>
```

### Attributes

```html
<!-- Autoplay -->
<audio autoplay></audio>

<!-- Loop -->
<video loop></video>

<!-- Muted -->
<audio muted></audio>

<!-- Preload -->
<video preload="auto"></video>
```

---

## Best Practices

1. ✅ Use `alt` text for all images
2. ✅ Use meaningful table headers
3. ✅ Provide fallback content for media
4. ✅ Optimize image sizes
5. ✅ Use appropriate file formats
