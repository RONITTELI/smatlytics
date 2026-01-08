# CSS Design Patterns Used in Smartlytics

## 1. Glassmorphism Cards

```css
.module-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}
```

**Effect**: Frosted glass appearance with depth

---

## 2. Gradient Backgrounds

### Page Background
```css
.analytics-hub-page {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
```

### Button Gradient
```css
.nav-cta {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
}

.nav-cta:hover {
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
}
```

### Text Gradient
```css
.nav-logo {
  background: linear-gradient(135deg, #6366f1 0%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 3. Animation Patterns

### Slide Down (Entrance)
```css
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hub-header {
  animation: slideDown 0.6s ease;
}
```

### Hover Elevation
```css
.module-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Loading Spinner
```css
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

---

## 4. Focus States

### Input Focus
```css
.hub-search:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}
```

### Button Focus
```css
.module-link:focus-visible {
  outline: 3px solid #6366f1;
  outline-offset: 4px;
  border-radius: 15px;
}
```

---

## 5. Responsive Grid

### Auto-fit Grid (Mobile-responsive)
```css
.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .modules-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .modules-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 6. Form Input Styling

```css
.hub-search {
  width: 100%;
  max-width: 500px;
  padding: 1rem 1.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 0.95rem;
  background: white;
  color: #1f2937;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.hub-search::placeholder {
  color: #6b7280;
}

.hub-search:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}
```

---

## 7. Alert Components

### Error Alert
```css
.alert-error {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-radius: 10px;
  background-color: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  border: 1px solid rgba(239, 68, 68, 0.2);
  animation: slideIn 0.3s ease;
}
```

### Success Alert
```css
.alert-success {
  background-color: rgba(16, 185, 129, 0.1);
  color: #059669;
  border: 1px solid rgba(16, 185, 129, 0.2);
}
```

---

## 8. Feature Grid

```css
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, 
                                       rgba(16, 185, 129, 0.05) 100%);
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-4px);
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, 
                                       rgba(16, 185, 129, 0.1) 100%);
}
```

---

## 9. Navigation Bar

```css
.hub-navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

---

## 10. CSS Variables (Design Tokens)

```css
:root {
  /* Colors */
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --primary-light: #818cf8;
  --secondary: #10b981;
  --accent: #f59e0b;
  --danger: #ef4444;
  --bg: #f8fafc;
  --card: #ffffff;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --border: #e5e7eb;

  /* Effects */
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 20px 50px rgba(0, 0, 0, 0.15);

  /* Timing */
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Usage */
.button {
  background: var(--primary);
  color: white;
  box-shadow: var(--shadow);
  transition: var(--transition);
}
```

---

## 11. Mobile-First Media Queries

```css
/* Mobile First - Default is mobile */
.modules-grid {
  grid-template-columns: 1fr;
}

/* Tablet */
@media (min-width: 640px) {
  .modules-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .modules-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .nav-navbar {
    position: sticky;
  }
}

/* Large screens */
@media (min-width: 1280px) {
  .hub-main {
    padding: 4rem 2rem;
  }
}
```

---

## 12. Flexbox Patterns

### Centered Card
```css
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Navbar with Spacing
```css
.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-right {
  display: flex;
  gap: 1rem;
  align-items: center;
}
```

---

## 13. Text Utilities

### Gradient Text
```css
.nav-logo {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-size: 1.35rem;
}
```

### Truncate Text
```css
.module-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

---

## 14. Interactive Button States

```css
.upload-button {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
}

/* Hover */
.upload-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
}

/* Active */
.upload-button:active:not(:disabled) {
  transform: translateY(0);
}

/* Disabled */
.upload-button:disabled {
  background: linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%);
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}
```

---

## Summary

These CSS patterns create a:
- ✨ **Modern** interface with glassmorphism and gradients
- 🎯 **Responsive** design that works on all devices
- 🚀 **Smooth** interactions with animations and transitions
- ♿ **Accessible** with focus states and color contrast
- 🎨 **Cohesive** design using CSS variables and consistent spacing

All patterns follow **Tailwind CSS** principles while using vanilla CSS for maximum compatibility!
