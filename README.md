# ComponentKit

> Framework-agnostic Web Components library built with TypeScript. Copy and paste components into your project - no npm install required.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

## ✨ Features

- 🎯 **Framework Agnostic** - Works with React, Vue, Angular, Svelte, or vanilla JavaScript
- 📋 **Copy & Paste** - No npm packages, full code ownership
- 💪 **TypeScript First** - Complete type safety
- 🎨 **Fully Customizable** - Own and modify the code
- 🚀 **Zero Dependencies** - Pure Web Components
- ♿ **Accessible** - Built with ARIA attributes and keyboard navigation

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- TypeScript knowledge (optional but recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/componentkit.git
cd componentkit

# Install dependencies
npm install

# Build TypeScript files
npm run build

# Start development server
npm run serve
```

Open `http://localhost:3000/public/index.html` in your browser.

## 📁 Project Structure

```
componentkit/
├── src/
│   ├── components/          # Web Component source files
│   │   ├── button/
│   │   │   ├── ck-button.ts
│   │   │   ├── ck-button.styles.ts
│   │   │   └── index.ts
│   │   ├── card/
│   │   ├── modal/
│   │   └── index.ts        # Main component registry
│   ├── styles/              # Global CSS files
│   │   ├── variables.css   # CSS custom properties
│   │   ├── global.css      # Global styles
│   │   └── components.css  # Component page styles
│   ├── types/               # TypeScript type definitions
│   │   └── component-types.ts
│   └── utils/               # Utility functions
│       └── register-components.ts
├── public/                  # Static HTML pages
│   ├── index.html          # Landing page
│   ├── components.html     # Component documentation
│   └── assets/             # Images, icons, etc.
├── dist/                    # Compiled JavaScript (generated)
├── docs/                    # Component documentation
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Usage

### Using a Component

1. **Browse Components**: Visit `/public/components.html` to see all available components
2. **Copy the Code**: Click the "Copy" button to get the TypeScript source
3. **Paste into Your Project**: Add the component files to your project
4. **Customize**: Modify styles and behavior as needed

### Example: Adding a Button

```typescript
// Import and use the button component
import './components/button';

// In your HTML
Click Me

// With JavaScript
const button = document.querySelector('ck-button');
button.addEventListener('ck-click', () => {
  console.log('Button clicked!');
});
```

## 📚 Available Components

### Button
Customizable button with multiple variants (primary, secondary, outline)

```html
Primary Button
Secondary Button
Outline Button
```

### Card
Flexible card layout with header, content, and footer slots

```html

  Card Title
  Card content goes here
  
    Action
  

```

### Modal
Dialog component with backdrop overlay

```html

  Modal Title
  Modal content
  
    Close
  



  const modal = document.querySelector('#myModal');
  modal.open();  // Opens the modal
  modal.close(); // Closes the modal

```

## 🛠️ Development

### Watch Mode
Automatically rebuild on file changes:
```bash
npm run dev
```

### Build for Production
Compile TypeScript to JavaScript:
```bash
npm run build
```

### Local Development Server
Serve the project locally:
```bash
npm run serve
```

## 🎨 Customization

### Styling Components
Each component has its styles defined in a separate `.styles.ts` file. Modify these to customize appearance:

```typescript
// src/components/button/ck-button.styles.ts
export const buttonStyles = `
  button {
    /* Your custom styles */
  }
`;
```

### CSS Variables
Customize the color scheme by modifying `src/styles/variables.css`:

```css
:root {
  --ck-primary: #6366f1;
  --ck-primary-hover: #4f46e5;
  /* ... more variables */
}
```

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-component`)
3. Follow the existing component structure
4. Add documentation for your component
5. Commit your changes (`git commit -m 'Add amazing component'`)
6. Push to the branch (`git push origin feature/amazing-component`)
7. Open a Pull Request

### Adding a New Component

1. Create a new folder: `src/components/your-component/`
2. Add three files:
   - `your-component.ts` - Component logic
   - `your-component.styles.ts` - Component styles
   - `index.ts` - Export and registration
3. Register in `src/components/index.ts`
4. Add documentation to `public/components.html`

## 📖 Documentation

Full documentation is available at `/public/components.html` when running the development server.

## 🧪 Browser Support

ComponentKit uses native Web Components and requires:
- Chrome/Edge 67+
- Firefox 63+
- Safari 10.1+
- Opera 54+

For older browsers, consider using [webcomponents.js polyfills](https://github.com/webcomponents/polyfills).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Inspired by [shadcn/ui](https://ui.shadcn.com/) - the copy-paste component library approach for React.

## 📞 Support

- 📫 Create an issue for bug reports or feature requests
- 💬 Start a discussion for questions or ideas
- ⭐ Star this repo if you find it helpful!

---

Built with ❤️ using Web Components and TypeScript