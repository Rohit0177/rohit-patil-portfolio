# Rohit Patil Portfolio Project

## Overview
This project is a modern, professional portfolio website for Rohit Patil, a Full Stack Web Developer. The site is designed to showcase skills, projects, education, experience, and contact information in a premium, responsive layout.

## Tech Stack
- Next.js 16
- App Router
- TypeScript
- Tailwind CSS v4
- React 19
- CSS custom design tokens
- Responsive design with dark/light theme support

## Features
- Separate route-based pages for Home, About, Skills, Projects, Education, Experience, and Contact
- Professional landing page with clear developer branding and call-to-action buttons
- Skills section with categorized cards and progress bars
- Project showcase cards for QuickNews, YSK Tour & Travels, and Stress & Mood Prediction
- Education and experience timeline-style sections
- Contact page with a working email-based form flow
- Active navigation highlighting and clean routing structure
- Responsive layout for desktop, tablet, and mobile devices
- Premium modern styling with warm off-white and charcoal theme
- Download resume button and social profile links

## Project Structure
```text
portfolio/
├── app/
│   ├── [slug]/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── contact-form.tsx
│   └── site-shell.tsx
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── PROJECT.md
└── README.md
```

## Pages Included
- Home
- About
- Skills
- Projects
- Education
- Experience
- Contact

## Deployment / Running
```bash
npm install
npm run dev
```
Then open:
```text
http://localhost:3000
```

## Production Build
```bash
npm run build
```

## Notes
The project is built for a clean portfolio experience with route-based navigation rather than a single-page scroll layout, as requested. The content is tailored to Rohit Patil’s background and work.

## Author
Rohit Patil
