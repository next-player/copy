# Next Copy

A simple and efficient web component that allows users to copy text to the clipboard. Built with TypeScript and bundled using Rollup.

## Features

- **Easy to Use**: Just include the component in your HTML and use it.
- **Lightweight**: Minimal footprint and dependencies.
- **Customizable**: Easy to extend and modify.

## Installation

You can install the component via npm:

```bash
npm install next-copy
```

Or you can include the bundled script directly in your HTML:

```html
<script src="dist/bundle.js"></script>
```

## Usage

Here is how you can use the web component in your HTML file:

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Web Component</title>
</head>
<body>
  <next-copy></next-copy>
  <script src="path/to/bundle.js"></script> <!-- Use the path to your bundled script -->
</body>
</html>
```

### JavaScript

If you are using a module bundler like Webpack or Rollup, you can import and use the component like this:

```javascript
import 'next-copy';

// Now you can use <next-copy> in your HTML
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the open-source community for various tools and libraries.
- Inspired by various web component tutorials and examples.
