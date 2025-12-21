# Design System & Branding Guide

This document outlines the design system, branding guidelines, and visual language used throughout the portfolio.

---

## Design Philosophy

The portfolio follows a **clean, minimal, and professional** aesthetic that reflects the technical expertise of a cloud-native/SRE engineer. The design balances:

- **Technical credibility** - Subtle infrastructure-themed elements without being overwhelming
- **Readability** - Clean typography and generous whitespace
- **Modern professionalism** - Sophisticated color palette and refined components

---

## Color Palette

### Primary Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `hsl(220, 20%, 8%)` | Main background - deep blue-gray |
| `--foreground` | `hsl(220, 15%, 90%)` | Primary text color |
| `--primary` | `hsl(210, 100%, 60%)` | Accent color - clean blue |
| `--primary-foreground` | `hsl(220, 20%, 8%)` | Text on primary backgrounds |

### Secondary Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--secondary` | `hsl(220, 15%, 15%)` | Card backgrounds, subtle elements |
| `--secondary-foreground` | `hsl(220, 15%, 90%)` | Text on secondary backgrounds |
| `--muted` | `hsl(220, 15%, 12%)` | Muted backgrounds |
| `--muted-foreground` | `hsl(220, 10%, 55%)` | Secondary text, descriptions |

### Utility Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--border` | `hsl(220, 15%, 18%)` | Card borders, dividers |
| `--ring` | `hsl(210, 100%, 60%)` | Focus rings, interactive states |
| `--accent` | `hsl(220, 15%, 15%)` | Hover states, highlights |

### Color Rationale

- **Blue accent** (`hsl(210, 100%, 60%)`) - Chosen for its association with technology, trust, and cloud services (AWS, Azure, Kubernetes all use blue)
- **Dark blue-gray background** - More sophisticated than pure black, reduces eye strain
- **Limited palette** - Only 3-4 colors total for cohesion and cleanliness

---

## Typography

### Font Families

| Font | Variable | Usage |
|------|----------|-------|
| **Inter** | `--font-sans` | Body text, headings, UI elements |
| **JetBrains Mono** | `--font-mono` | Code blocks, technical labels, terminal elements |

### Type Scale

| Element | Classes | Size |
|---------|---------|------|
| Hero Title | `text-5xl md:text-7xl font-bold` | 48px / 72px |
| Section Title | `text-3xl md:text-4xl font-bold` | 30px / 36px |
| Card Title | `text-xl font-semibold` | 20px |
| Body Text | `text-base` | 16px |
| Small Text | `text-sm` | 14px |
| Labels/Tags | `text-xs` | 12px |

### Typography Guidelines

- Use `text-balance` on headings for optimal line breaks
- Body text uses `leading-relaxed` for readability
- Section numbers use monospace font for technical feel
- Maintain hierarchy with font weight, not just size

---

## Spacing System

The design uses Tailwind's default spacing scale consistently:

| Space | Tailwind | Usage |
|-------|----------|-------|
| 4px | `1` | Tight gaps, icon margins |
| 8px | `2` | Element spacing |
| 12px | `3` | Small gaps |
| 16px | `4` | Standard padding |
| 24px | `6` | Card padding |
| 32px | `8` | Section gaps |
| 48px | `12` | Component spacing |
| 80px | `20` | Section padding (vertical) |

### Layout Spacing

- **Section padding**: `py-20` (80px vertical)
- **Container max-width**: `max-w-6xl` (1152px)
- **Card padding**: `p-6` (24px)
- **Grid gaps**: `gap-6` to `gap-8`

---

## Component Patterns

### Cards

```
bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-6
hover:border-primary/50 transition-all duration-300
```

Features:
- Semi-transparent background with blur
- Subtle border that highlights on hover
- Rounded corners (`rounded-xl` = 12px)
- Smooth 300ms transitions

### Section Headers

```tsx
<h2 className="text-3xl md:text-4xl font-bold mb-4">
  <span className="text-primary font-mono">0X.</span> Section Title
</h2>
```

Features:
- Numbered prefixes in monospace + primary color
- Clear visual hierarchy
- Bottom margin for content separation

### Buttons / Links

```
text-primary hover:text-primary/80 transition-colors
```

For primary actions:
```
bg-primary text-primary-foreground px-6 py-3 rounded-lg
hover:bg-primary/90 transition-colors
```

### Tags / Badges

```
px-3 py-1 bg-primary/10 text-primary text-sm rounded-full
```

Features:
- Pill shape (`rounded-full`)
- Muted primary background
- Consistent sizing

---

## Animated Background

### Node Network Animation

The background features a subtle infrastructure-themed animation:

**Nodes**
- Count: 50 floating nodes
- Size: 2-4px radius
- Color: Primary blue at 30-60% opacity
- Movement: Slow drift with slight velocity changes

**Connections**
- Drawn between nodes within 150px distance
- Opacity based on distance (closer = more visible)
- Maximum opacity: 15%

**Performance**
- Uses `requestAnimationFrame` for smooth 60fps
- Canvas-based rendering for efficiency
- Fixed positioning behind content

---

## Iconography

### Icon Library

Uses **Lucide React** for consistent iconography:

| Icon | Usage |
|------|-------|
| `Github`, `Linkedin`, `Twitter` | Social links |
| `Mail` | Contact/email |
| `ExternalLink` | External links |
| `Calendar` | Dates |
| `MapPin` | Locations |
| `Clock` | Duration/time |
| `ArrowRight`, `ArrowLeft` | Navigation |
| `Menu`, `X` | Mobile menu |
| `Award` | Certifications |
| `Mic2` | Speaking engagements |

### Icon Sizing

- Navigation/inline: `w-4 h-4` (16px)
- Cards/features: `w-5 h-5` (20px)
- Hero/large: `w-6 h-6` (24px)

---

## Layout Structure

### Grid System

| Breakpoint | Columns | Usage |
|------------|---------|-------|
| Mobile | 1 column | Default stack |
| `md` (768px) | 2 columns | Cards, split layouts |
| `lg` (1024px) | 3 columns | Certification grid |

### Container

```
max-w-6xl mx-auto px-6
```

- Maximum width: 1152px
- Centered with auto margins
- Horizontal padding: 24px

### Section Structure

```tsx
<section id="section-name" className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Section header */}
    {/* Section content */}
  </div>
</section>
```

---

## Interactive States

### Hover Effects

| Element | Effect |
|---------|--------|
| Cards | Border color shifts to `primary/50` |
| Links | Color shifts to `primary/80` |
| Buttons | Background opacity to 90% |
| Images | Scale to 105%, grayscale removal |
| Tags | Slight background darkening |

### Transitions

All interactive elements use:
```
transition-all duration-300
```

Or for color-only changes:
```
transition-colors
```

### Focus States

```
focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
```

---

## Image Guidelines

### Profile Photo

- Container: `w-48 h-48 md:w-64 md:h-64`
- Shape: `rounded-2xl` (16px corners)
- Effect: Grayscale by default, color on hover
- Border: `ring-2 ring-border`

### Certification Badges

- Size: `w-24 h-24`
- Shape: `rounded-lg`
- Fit: `object-contain`
- Background: Transparent-friendly

### Project Images

- Aspect ratio: Natural or 16:9
- Border radius: `rounded-lg`
- Shadow: `shadow-2xl` for depth

---

## Dark Mode

The portfolio is **dark mode only** by design:

- Reduces eye strain for developers
- Aligns with terminal/IDE aesthetics
- Creates premium, sophisticated feel
- Better showcase for code snippets

The `dark` class is applied to the `<html>` element.

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Default | < 768px | Mobile-first base styles |
| `md` | >= 768px | Tablet, two-column layouts |
| `lg` | >= 1024px | Desktop, three-column grids |

### Mobile Considerations

- Navigation collapses to hamburger menu
- Hero stacks vertically
- Cards go full-width
- Reduced padding (`px-4` vs `px-6`)

---

## Accessibility

### Color Contrast

- Primary text on background: 11:1 ratio (AAA)
- Muted text on background: 4.5:1 ratio (AA)
- Primary accent is accessible for interactive elements

### Focus Indicators

All interactive elements have visible focus rings using the `ring` utility.

### Semantic HTML

- Proper heading hierarchy (h1 > h2 > h3)
- Landmark regions (header, main, footer, nav)
- ARIA labels on icon-only buttons

### Screen Reader Support

- `sr-only` class for visually hidden labels
- Alt text on all meaningful images
- Skip navigation support

---

## File Structure

```
├── app/
│   ├── globals.css          # Design tokens & base styles
│   └── layout.tsx           # Font configuration
├── components/
│   ├── animated-background.tsx  # Canvas animation
│   └── [component].tsx      # Individual components
└── public/
    └── badges/              # Certification badge images
```

---

## Design Token Reference

All tokens are defined in `app/globals.css` using CSS custom properties:

```css
@layer base {
  :root {
    --background: 220 20% 8%;
    --foreground: 220 15% 90%;
    --primary: 210 100% 60%;
    --secondary: 220 15% 15%;
    --muted: 220 15% 12%;
    --muted-foreground: 220 10% 55%;
    --border: 220 15% 18%;
    --ring: 210 100% 60%;
    --radius: 0.75rem;
  }
}
```

---

## Summary

The design system creates a **clean, professional, and technically-oriented** portfolio that:

1. Uses a restrained 4-color palette centered on blue
2. Balances technical aesthetics with readability
3. Maintains consistent spacing and component patterns
4. Provides subtle animation without distraction
5. Ensures accessibility and responsive behavior
