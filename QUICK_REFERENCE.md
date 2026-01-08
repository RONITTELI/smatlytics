# 🎨 Smartlytics Design - Quick Reference

## Color System

```
Indigo (Primary)    #6366f1
Indigo Dark         #4f46e5
Indigo Light        #818cf8
Green (Secondary)   #10b981
Amber (Accent)      #f59e0b
Red (Danger)        #ef4444

Dark Gray (Text)    #1f2937
Med Gray (Muted)    #6b7280
Light Gray (Border) #e5e7eb
Off White           #f8fafc
```

## Typography

```
Headings: Poppins, Bold (600-700)
Body:     Inter, Regular (400-500)

Sizes: 0.75rem, 0.85rem, 0.9rem, 0.95rem, 1rem, 1.1rem, 1.15rem, 
       1.25rem, 1.35rem, 1.5rem, 1.75rem, 2rem, 2.5rem, 2.75rem
```

## Spacing Scale

```
2px   - borders
4px   - tiny gaps
6px   - small gaps
8px   - button padding
12px  - input padding
16px  - element padding (1rem)
24px  - section spacing (1.5rem)
32px  - large spacing (2rem)
48px  - section padding (3rem)
64px  - page padding (4rem)
```

## Shadow System

```
Light:   0 4px 6px rgba(0,0,0,0.05)
Normal:  0 10px 30px rgba(0,0,0,0.1)
Heavy:   0 20px 50px rgba(0,0,0,0.15)
Focus:   0 0 0 3px rgba(99,102,241,0.1)
```

## Border Radius

```
4px   - small inputs
8px   - buttons, badges
10px  - cards, modals
12px  - search bar
15px  - large cards
20px  - rounded pills
```

## Transitions

```
All props:  all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
Fast:       0.15s
Normal:     0.3s
Slow:       0.6s
```

---

## Component Examples

### Button (Primary)
```jsx
<button className="nav-cta">Click me</button>

/* Styles */
.nav-cta {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: white;
  padding: 0.6rem 1.25rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
}
```

### Card
```jsx
<div className="module-card">Content</div>

/* Styles */
.module-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.module-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}
```

### Input
```jsx
<input className="hub-search" placeholder="Search..." />

/* Styles */
.hub-search {
  padding: 1rem 1.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 0.95rem;
  background: white;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.hub-search:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}
```

### Alert
```jsx
<div className="alert alert-error">Error message</div>

/* Styles */
.alert {
  display: flex;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-radius: 10px;
  border: 1px solid;
}

.alert-error {
  background-color: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  border-color: rgba(239, 68, 68, 0.2);
}

.alert-success {
  background-color: rgba(16, 185, 129, 0.1);
  color: #059669;
  border-color: rgba(16, 185, 129, 0.2);
}
```

---

## Common CSS Patterns

### Flexbox Center
```css
display: flex;
align-items: center;
justify-content: center;
```

### Gradient Background
```css
background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
```

### Glassmorphism
```css
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Hover Elevation
```css
transition: all 0.3s ease;
:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

### Responsive Grid
```css
display: grid;
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
gap: 1.5rem;
```

### Focus State
```css
:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}
```

---

## File Structure

```
frontend/
├── src/
│   ├── index.css ................... Global styles
│   ├── App.css ..................... App-level styles
│   ├── pages/
│   │   ├── auth.css ................ Login/Register
│   │   ├── data-clean.css .......... Data cleaning
│   │   ├── auto-dashboard.css ...... Dashboard
│   │   └── analytics-hub.css ....... Hub & modules
│   ├── components/
│   │   ├── ChartView.js ............ Chart component
│   │   ├── AIChat.js ............... Chat component
│   │   └── CSVUpload.js ............ Upload component
│   └── services/
│       └── api.js .................. API calls
```

---

## Quick Copy-Paste

### CSS Variables
```css
:root {
  --primary: #6366f1;
  --secondary: #10b981;
  --accent: #f59e0b;
  --danger: #ef4444;
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 20px 50px rgba(0, 0, 0, 0.15);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Modern Button
```css
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--shadow);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

### Responsive Container
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
```

---

## Mobile Breakpoints

```css
@media (max-width: 480px) { /* Mobile */ }
@media (max-width: 768px) { /* Tablet */ }
@media (min-width: 768px) { /* Desktop */ }
@media (min-width: 1024px) { /* Large */ }
@media (min-width: 1280px) { /* Extra Large */ }
```

---

## Useful Classes

```
Display:        flex, grid, block, inline-block
Position:       relative, absolute, fixed, sticky
Align:          center, flex-start, flex-end, space-between
Direction:      row, column, column-reverse
Wrap:           wrap, nowrap
Overflow:       hidden, scroll, auto
Z-index:        1, 10, 100
Opacity:        0.5, 0.7, 0.9, 1
```

---

**Last Updated**: January 8, 2026
**Version**: 1.0
**Framework**: React 19 + Vanilla CSS (Tailwind-inspired)
