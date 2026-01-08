# How to Run Smartlytics Frontend

## Quick Start (Using CMD)

Open Command Prompt (cmd.exe) and run:

```bash
cd C:\Users\ronit\OneDrive\Desktop\smatlytics\frontend
npm start
```

This will:
- Start React development server
- Open browser at http://localhost:3000
- Hot-reload on file changes

---

## If npm start doesn't work

### Option 1: Use CMD instead of PowerShell
```bash
cd C:\Users\ronit\OneDrive\Desktop\smatlytics\frontend
npm start
```

### Option 2: Windows Terminal (Recommended)
1. Install Windows Terminal from Microsoft Store
2. Open Windows Terminal
3. Run the commands above

### Option 3: VS Code Integrated Terminal
1. Open VS Code
2. Open the frontend folder
3. Terminal → New Terminal (automatically in correct folder)
4. Run `npm start`

---

## Build for Production

```bash
npm run build
```

Creates optimized production build in `frontend/build/`

---

## Available Scripts

```bash
npm start          # Start dev server
npm run build      # Build for production
npm test          # Run tests
npm run eject     # Eject from Create React App (NOT RECOMMENDED)
```

---

## Troubleshooting

### Port 3000 already in use
```bash
# Use different port
PORT=3001 npm start
```

### node_modules issues
```bash
# Clear cache and reinstall
npm cache clean --force
npm install --legacy-peer-deps
npm start
```

### Module not found errors
```bash
# Delete node_modules and package-lock.json
rmdir /s /q node_modules
del package-lock.json
npm install --legacy-peer-deps
npm start
```

---

## What to expect when npm start runs:

1. Webpack compiles React app
2. Dev server starts on http://localhost:3000
3. Browser opens automatically
4. See login page with new design
5. File changes = automatic reload

---

**Enjoy your new design!** 🎉
