# Ark-UI

A cross-framework, Tailwind-based design system for modern web applications.

## 🚀 Features

- **Cross-Framework Support**: Works with React, Vue, Angular, Svelte, and plain HTML
- **Tailwind CSS Foundation**: Utility-first styling with consistent design tokens
- **Modular Architecture**: Core utilities, compiled CSS, and framework adapters
- **Developer Experience**: TypeScript support, auto-completion, and comprehensive docs
- **Performance Optimized**: Tree-shakable builds and minimal runtime overhead
- **Extensible**: Customizable themes and easy component extension

## 📦 Packages

- `@ark-ui/core` - Core utilities and Tailwind configuration
- `@ark-ui/css` - Compiled Tailwind CSS for HTML users
- `@ark-ui/react` - React component wrappers
- `@ark-ui/vue` - Vue component wrappers
- `@ark-ui/angular` - Angular component wrappers
- `@ark-ui/svelte` - Svelte component wrappers
- `@ark-ui/docs` - Documentation site

## 🛠️ Setup

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/ark-ui.git
cd ark-ui

# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Start development
pnpm run dev
```

### Development

```bash
# Lint code
pnpm run lint

# Format code
pnpm run format

# Run tests
pnpm run test

# Build documentation
cd packages/docs && pnpm run dev
```

## 📚 Documentation

Visit [ark-ui.dev](https://ark-ui.dev) for comprehensive documentation, examples, and guides.

### Component Examples

View live HTML component examples at `packages/docs/src/examples.html` when running the development server.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 💡 Why Tailwind?

Tailwind CSS provides immediate consistency without custom CSS. It handles global resets, spacing, and typography out-of-the-box, allowing us to focus on component logic and cross-framework compatibility.
