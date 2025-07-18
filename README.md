# Meal Item Selector

A checkbox-driven meal item manager that enforces selection limits for precise user input control.

[View on GitPage](https://chrisnajman.github.io/meal-item-selector)

---

## How it works

Users select items from five food categories — Starters, Mains, Vegetables, Desserts, and Drinks — with selection limits enforced per category. Selections are visually displayed with corresponding icons and prices, and a running total is calculated. The interface is fully keyboard-accessible and includes accessibility features such as live region announcements and focus management.

---

## Features

- Checkbox-based selection grouped by food categories
- Custom limits per group (e.g., max 2 starters, 1 main)
- Dynamic feedback when limits are exceeded
- Lazy-loaded images for performance (after first image)
- Total price calculation on form submission
- ARIA live region support for screen reader announcements
- "Skip to submit" keyboard links per group
- Responsive and accessible interface
- Modular JavaScript and CSS structure
- Light/dark theme toggle with local storage support

---

## JavaScript

Built with **vanilla ES6 JavaScript**, focusing on modern syntax and browser APIs, then bundled, transpiled to ES2015, and minified for broad browser compatibility.

The JavaScript has been split into separate modules, improving code modularity:

### Main

- `meal-item-selector/`
  - `meal-item-selector.js`: Initializes the form logic, binds event handlers, and controls flow from input to output on submission.
  - `components/`
    - `checkbox-groups.js`: Defines the five checkbox groups and their individual limits using data attributes.
    - `enforce-checkbox-limits.js`: Dynamically prevents users from exceeding the selection limits for each group, providing inline warnings.
    - `output-checkbox-values.js`: Builds and appends a DOM structure showing the selected items, their icons, and prices.
    - `output-prices.js`: Totals all selected checkbox prices and displays the result in the output container.
    - `remove-no-checkbox-selected-warning.js`: Removes the "no selection" warning once a checkbox is selected after an empty submission.
- `image-credits.js`: Applies lazy-loading to icons used on the image credits page, skipping the first image for eager loading.
- `helpers/`
  - `lazy-load-images.js`: Tracks image count to apply `loading="lazy"` to all but the first image.
  - `set-multiple-attributes.js`: Utility function to assign multiple attributes to a single DOM element efficiently.

### Other

- `loader.js`: Displays a loader animation until the page is fully rendered, then removes the loader and announces readiness for screen readers.
- `theme.js`: Handles theme toggling (light/dark mode) and local storage management.

---

## CSS

Built with modern CSS features such as nesting, custom properties, and the `:has()` pseudo-class, this project emphasizes modular, accessible, and maintainable styling.

The main `style.css` file serves as an entry point and imports individual CSS modules using `@import`. These are then processed by PostCSS (with `postcss-import`, `postcss-nesting`, and `cssnano`) during the build.

---

## Theme Toggling

The application includes a dark mode and light mode toggle:

- The current theme state is stored in **local storage** and applied automatically on page reload.
- Accessible buttons with appropriate ARIA attributes are used to improve usability.

> [!IMPORTANT]
> Remember to change `const LOCAL_STORAGE_PREFIX` in `js-modules/theme.js` to a unique identifier.

---

## Accessibility

The site is fully navigable using tab keys and arrow keys. Key accessibility features include:

- ARIA `role="alert"` used to announce output content changes to screen readers.
- `tabindex="-1"` and `.focus()` used to direct keyboard focus after form submission.
- Skip links (`a.skip-link`) placed after each food group to quickly jump to the submit button.
- Warnings (e.g., for over-selection or missing selections) are announced and clearly styled.
- Lazy-loading excludes the first image to ensure immediate content visibility for screen reader users on slower connections.

---

## Testing and Compatibility

The application has been tested on the following platforms and browsers:

- **Operating System**: Windows 10
- **Browsers**:
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge

### Device View Testing

The layout and functionality have been verified in both browser and device simulation views to ensure responsiveness and usability.

---

## How to Run

1. Clone or download the repository to your local machine.
2. Open the project folder and start a simple HTTP server (e.g., using `Live Server` in VS Code or Python's `http.server` module).
3. Open the project in a modern browser (e.g., Chrome, Firefox, or Edge).

---

## Build & Deployment Setup for `/docs` Folder

If you want to deploy a minified version of this project to **GitHub Pages**, read on.

### 1. Install Required Packages

Run this once in your project root to install dev dependencies:

```bash
npm install
```

### 2. Run the full build process

In the terminal, run:

```bash
npm run build
```

### 3. Deploy to GitHub Pages

Once you've created a repository and pushed the files,

- go to `https://github.com/[your-name]/[your-project-name]/settings/pages`.
- Under "Build and deployment > Branch" make sure you set the branch to `main` and folder to `/docs`.
- Click "Save".

> [!NOTE]
> For a detailed description of the build process, configuration files and npm packages see my [GitHub Pages Optimised Build](https://github.com/chrisnajman/github-pages-optimised-build).
