# School Registry App

A modern, accessible SvelteKit web application for managing a simple school registry of students and teachers.

## Features

- Add students and teachers with validation
- Responsive, mobile-friendly UI
- Accessible forms and modal dialogs
- In-memory data management (no backend required)
- Modern SvelteKit, TypeScript, and TailwindCSS stack
- Custom form validation and error messages
- Clean, maintainable codebase

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
# or
npm run dev -- --open
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  lib/
    components/      # Svelte UI components
    stores/          # In-memory data store
    validators/      # Form validation logic
    types/           # TypeScript types
  routes/            # SvelteKit routes
  app.css            # Global styles (TailwindCSS)
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint and format code
- `npm run test` - Run all tests (if implemented)

## Accessibility & Best Practices

- All forms use proper labels and ARIA attributes
- Modal dialogs are keyboard accessible
- Responsive design for all screen sizes
- Custom error messages for invalid input

## License

MIT
