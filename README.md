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


<img width="891" height="877" alt="Screenshot 2025-11-14 at 12 34 37" src="https://github.com/user-attachments/assets/893348e5-fd3d-41d3-b001-3152acb3dca6" />
<img width="890" height="874" alt="Screenshot 2025-11-14 at 12 34 56" src="https://github.com/user-attachments/assets/4e86aba5-f4d7-49ed-98b8-0bb181c7145e" />
<img width="890" height="875" alt="Screenshot 2025-11-14 at 12 35 11" src="https://github.com/user-attachments/assets/612ed248-d230-4d44-927a-9514c448d075" />


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
