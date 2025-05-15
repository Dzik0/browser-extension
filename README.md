# 🧩 Extensions Manager

A sleek, user-friendly React app for managing browser extensions. Filter active and inactive extensions, toggle their status, and switch between dark and light mode—all in a clean and modern interface.

## ✨ Features

- ✅ Toggle extensions on/off
- 🗑 Remove extensions from the list
- 🎯 Filter by All / Active / Inactive
- 🌗 Light and Dark Mode support
- ⚛️ Built with React + clsx

## 📸 Preview

![Extensions Manager Screenshot](./screenshot.jpg)

➡️ Live site: https://dzik0.github.io/browser-extension/

## 🚀 Tech Stack

- **React** (Functional components + Hooks)
- **clsx** for conditional class styling
- **Modular components** (`Header`, `Extension`, `FilterButton`)
- **JSON** as local data source

## 🧠 Code Overview

### State Management

- `apps`: The main extension list loaded from `data.json`
- `filter`: Current filter state (1 = All, 2 = Active, 3 = Inactive)
- `darkMode`: Boolean flag to switch UI theme

### Core Functions

- `toggleExtension(id)` – Toggle an extension's active state
- `removeExtension(id)` – Remove an extension from the list
- `changeFilter(id)` – Change the current filter view
- `toggleDarkMode()` – Toggle between light/dark UI

### Filtering Logic

```js
const appsOn = apps.filter((item) => item.isActive);
const appsOff = apps.filter((item) => !item.isActive);
```

### Render Logic

`renderExtensions()` handles the conditional rendering based on filter and extension availability.

## 📂 Project Structure

```
src/
├── comps/
│   ├── Header.jsx
│   ├── Extension.jsx
│   └── FilterButton.jsx
├── data.json
├── App.jsx
├── main.js
└── styles.css
```

## 🛠 Setup & Installation

1. **Clone the repo:**

   ```bash
   git clone https://github.com/your-username/extensions-manager.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
