# Developer Portfolio - Cloud Native / SRE Engineer

A modern, clean portfolio website built for backend engineers, SREs, and cloud architects. Features a sophisticated dark theme with subtle animations and a professional layout.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Typography**: Inter (body) + JetBrains Mono (code)
- **Icons**: Lucide React
- **Components**: shadcn/ui

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main portfolio page
│   ├── globals.css         # Theme colors and global styles
│   └── blog/
│       ├── page.tsx        # Blog listing page
│       └── [slug]/page.tsx # Individual blog post pages
├── components/
│   ├── animated-background.tsx  # Floating nodes background animation
│   ├── header.tsx          # Navigation header
│   ├── hero.tsx            # Hero section with photo and intro
│   ├── about.tsx           # About section with bio and skills
│   ├── experience.tsx      # Work experience timeline
│   ├── projects.tsx        # Featured projects grid
│   ├── certifications.tsx  # Certification badges
│   ├── speaking.tsx        # Conference talks and presentations
│   ├── contact.tsx         # Contact CTA section
│   └── footer.tsx          # Footer with social links
├── lib/
│   └── blog-data.ts        # Blog posts data and content
└── public/
    └── badges/             # Certification badge images
```

## Customization Guide

### 1. Personal Information

#### Hero Section (`components/hero.tsx`)

Update your name, title, and introduction:

```tsx
<h1>Your Name</h1>
<p>Your Title / Role</p>
```

Replace the profile photo by updating the image path or adding your own image to `/public/`.

Update social links (GitHub, LinkedIn, Twitter) with your URLs.

#### About Section (`components/about.tsx`)

Edit the bio paragraphs to describe your background and expertise.

Update the skills array with your technical skills:

```tsx
const skills = [
  "Kubernetes", "Docker", "Terraform", "AWS", "GCP",
  // Add your skills...
]
```

### 2. Experience (`components/experience.tsx`)

Update the `experiences` array with your work history:

```tsx
const experiences = [
  {
    company: "Company Name",
    role: "Your Role",
    period: "2022 - Present",
    description: "What you did and achieved...",
    skills: ["Skill1", "Skill2", "Skill3"]
  },
  // Add more experiences...
]
```

### 3. Projects (`components/projects.tsx`)

Update the `projects` array with your featured work:

```tsx
const projects = [
  {
    title: "Project Name",
    description: "What the project does and your contributions...",
    tech: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/username/repo",
    external: "https://project-url.com", // optional live link
    image: "/path-to-screenshot.png" // optional
  },
  // Add more projects...
]
```

### 4. Certifications (`components/certifications.tsx`)

Update the `certifications` array and add your badge images to `/public/badges/`:

```tsx
const certifications = [
  {
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "2024",
    badge: "/badges/your-badge.png",
    link: "https://verification-url.com"
  },
  // Add more certifications...
]
```

### 5. Speaking Engagements (`components/speaking.tsx`)

Update the `talks` array with your presentations:

```tsx
const talks = [
  {
    title: "Talk Title",
    event: "Conference Name",
    location: "City, Country",
    date: "Month 2024",
    description: "Brief description of the talk...",
    videoLink: "https://youtube.com/...", // optional
    slidesLink: "https://speakerdeck.com/..." // optional
  },
  // Add more talks...
]
```

### 6. Blog Posts (`lib/blog-data.ts`)

Add or edit blog posts in the `blogPosts` array:

```tsx
export const blogPosts: BlogPost[] = [
  {
    slug: "url-friendly-slug",
    title: "Blog Post Title",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Tag1", "Tag2"],
    excerpt: "Brief summary shown in the listing...",
    content: `
# Your Markdown Content

Write your blog post content here using markdown syntax.

## Code Blocks

```yaml
apiVersion: v1
kind: ConfigMap
```
    `
  },
  // Add more posts...
]
```

### 7. Theme Colors (`app/globals.css`)

Adjust the color scheme by modifying CSS variables:

```css
:root {
  --background: 222 47% 6%;      /* Main background */
  --foreground: 210 40% 98%;    /* Primary text */
  --primary: 217 91% 60%;       /* Accent color (blue) */
  --muted: 217 33% 12%;         /* Card backgrounds */
  --border: 217 33% 17%;        /* Border color */
}
```

### 8. Metadata (`app/layout.tsx`)

Update the site metadata for SEO:

```tsx
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your professional summary...",
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Run lint
pnpm lint

# Open http://localhost:3000
```

## Features

- Responsive design (mobile, tablet, desktop)
- Animated background with floating network nodes
- Smooth scroll navigation
- Blog with markdown support and syntax highlighting
- Certification badges display
- Dark theme optimized for readability
- SEO-friendly metadata
- Accessible (semantic HTML, ARIA labels)

## License

MIT License - Feel free to use this template for your own portfolio.
