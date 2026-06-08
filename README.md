<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=180&color=0:020617,45:0F4C81,100:38BDF8&text=Ashish%20Goswami%20Portfolio&fontColor=ffffff&fontSize=42&fontAlignY=35&animation=fadeIn&desc=Dark%20Motion-Rich%20Developer%20Portfolio&descAlignY=58&descSize=16" alt="Ashish Goswami Portfolio animated banner" />

<img src="https://readme-typing-svg.demolab.com?font=Kanit&weight=700&size=22&duration=2800&pause=800&color=000000&center=true&vCenter=true&width=900&lines=Built+with+React+%2B+TypeScript+%2B+Vite;Styled+with+Tailwind+CSS;Animated+with+Framer+Motion;Designed+as+a+dark+interactive+portfolio" alt="Animated portfolio tech stack typing line" />

<br />
<br />

<p align="center">
  <a href="https://react.dev/"><img src="https://skillicons.dev/icons?i=react" width="54" height="54" alt="React" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://skillicons.dev/icons?i=ts" width="54" height="54" alt="TypeScript" /></a>
  <a href="https://vite.dev/"><img src="https://skillicons.dev/icons?i=vite" width="54" height="54" alt="Vite" /></a>
  <a href="https://tailwindcss.com/"><img src="https://skillicons.dev/icons?i=tailwind" width="54" height="54" alt="Tailwind CSS" /></a>
  <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-111111?style=for-the-badge&logo=framer&logoColor=white&labelColor=0055FF" height="42" alt="Framer Motion" /></a>
</p>

</div>

## Overview

This portfolio presents Ashish Goswami as a Computer Science student and full-stack developer focused on scalable web apps, Flutter mobile apps, AI-powered tools, backend systems, dashboards, and UI/UX design.

The site is designed as a single-page portfolio experience with large editorial typography, a black visual system, animated reveal effects, interactive project cards, smooth section navigation, and a strong contact-focused ending.

## Live Experience

The page is organized into five main sections:

| Section | Purpose |
| --- | --- |
| Home | Full-screen hero with oversized identity typography, portrait artwork, magnetic motion, and a contact CTA. |
| About | Personal profile with animated text reveal and decorative 3D-style visuals. |
| Services | Clear list of development, AI, backend, dashboard, mobile, and UI/UX offerings. |
| Projects | Featured project stack with sticky animated cards and visual previews. |
| Contact | Email, phone number, location, and professional/social links. |

## Highlights

- Fixed top navigation with anchor links for fast movement between sections.
- Responsive hero layout with large uppercase typography.
- Framer Motion powered fade-in animations throughout the page.
- Magnetic hover interaction on the hero portrait.
- Scroll-driven project marquee with two animated rows.
- Sticky project showcase where cards scale as the user scrolls.
- Responsive Tailwind CSS layout across desktop, tablet, and mobile widths.
- Project visuals served from `public/projects`.
- Contact section with direct email, phone, LinkedIn, GitHub, and Instagram links.

## Featured Projects

The main project section currently highlights:

| No. | Project | Category | Summary |
| --- | --- | --- | --- |
| 01 | INSPECTO | Flutter + Node | Premium API testing and debugging toolkit with request builder, response viewer, collections, and environments. |
| 02 | FileForge | AI + Files | File conversion suite for PDF, DOCX, PPTX, video, and AI summarization. |
| 03 | CareLink | Healthcare | AI-driven hospital kiosk with symptom assessment, chatbot diagnosis, and lab booking. |
| 04 | Medisynth | Med-Ed AI | Virtual patient simulator for medical training using FastAPI, React, and OpenCV. |
| 05 | Tunify | Flutter App | Android music streaming app with playlists, search, and YouTube audio backend. |
| 06 | DocLens | AI + OCR | Document analyzer for extracting, summarizing, and explaining PDFs and images. |
| 07 | RESONIX | Flutter | Ad-free music player with high-fidelity streaming and smart playlists. |
| 08 | IRIS AI | Python + AI | Virtual assistant for workflow automation, voice commands, and productivity. |

The marquee section expands the project surface with additional work such as Talkio, REELMATE, VS Code Error Sounds, Tetherfi, full-stack web apps, and backend systems.

## Tech Stack

| Area | Tools |
| --- | --- |
| Frontend | React 19, TypeScript, Vite |
| Styling | Tailwind CSS, custom CSS, Kanit font |
| Animation | Framer Motion |
| Icons | Lucide React |
| Build Tooling | Vite, TypeScript project references |
| Code Quality | ESLint, TypeScript ESLint |

## Project Structure

```text
.
|-- public/
|   |-- favicon.svg
|   |-- icons.svg
|   `-- projects/
|       |-- inspecto.png
|       |-- fileforge.png
|       |-- carelink.png
|       |-- medisynth.png
|       |-- tunify.png
|       |-- doclens.png
|       |-- resonix.png
|       `-- irisai.png
|-- src/
|   |-- components/
|   |   |-- AnimatedText.tsx
|   |   |-- ContactButton.tsx
|   |   |-- FadeIn.tsx
|   |   |-- LiveProjectButton.tsx
|   |   `-- Magnet.tsx
|   |-- sections/
|   |   |-- HeroSection.tsx
|   |   |-- MarqueeSection.tsx
|   |   |-- AboutSection.tsx
|   |   |-- ServicesSection.tsx
|   |   |-- ProjectsSection.tsx
|   |   `-- ContactSection.tsx
|   |-- App.tsx
|   |-- App.css
|   |-- index.css
|   `-- main.tsx
|-- tailwind.config.js
|-- vite.config.ts
|-- tsconfig.json
`-- package.json
```

## Component Breakdown

### `App.tsx`

Defines the page shell, fixed navigation, section order, and footer.

### `HeroSection.tsx`

Creates the first-screen portfolio identity with a large responsive heading, hero portrait, magnetic hover behavior, and contact CTA.

### `MarqueeSection.tsx`

Displays two horizontal rows of compact project cards. The rows move in opposite directions based on scroll position, and each card includes 3D tilt behavior using motion values.

### `AboutSection.tsx`

Introduces the developer profile with scroll-revealed text and decorative visual assets around the content.

### `ServicesSection.tsx`

Lists the primary service offerings in a high-contrast white section with oversized numbering and responsive spacing.

### `ProjectsSection.tsx`

Builds the featured project stack using sticky cards, project metadata, and large preview images.

### `ContactSection.tsx`

Provides direct contact details and external links for LinkedIn, GitHub, and Instagram.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Vite will start a local development server, usually at:

```text
http://localhost:5173
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Customization Guide

### Update featured projects

Edit the `PROJECTS` array in:

```text
src/sections/ProjectsSection.tsx
```

Each project supports:

```ts
{
  id: "01",
  title: "Project Name",
  category: "Category",
  description: "Short project summary.",
  images: {
    col1_1: "/projects/image.png",
    col1_2: "/projects/image.png",
    col2: "/projects/image.png"
  }
}
```

### Update marquee cards

Edit `ROW1_PROJECTS` and `ROW2_PROJECTS` in:

```text
src/sections/MarqueeSection.tsx
```

### Update contact information

Edit:

```text
src/sections/ContactSection.tsx
```

### Update services

Edit the `SERVICES` array in:

```text
src/sections/ServicesSection.tsx
```

### Update theme colors and fonts

Core styling lives in:

```text
src/index.css
tailwind.config.js
```

## Design Direction

The portfolio uses a bold, minimal, high-contrast visual language:

- Deep black base background: `#0C0C0C`
- Soft metallic text gradient for hero headings
- Kanit typography for a strong geometric look
- Large uppercase section titles
- Rounded project cards with thick borders
- White service section for contrast and rhythm
- Motion effects that support the page flow without changing navigation behavior

## Contact

| Channel | Value |
| --- | --- |
| Email | `ashishgoswami1013@gmail.com` |
| Phone | `+91-8804339456` |
| Location | Mangalore, India |
| GitHub | [Ashish6298](https://github.com/Ashish6298) |
| LinkedIn | [Ashish Goswami](https://www.linkedin.com/in/ashish-goswami-58797a24a) |
| Instagram | [a.s.h.i.s.h__g.o.s.w.a.m.i](https://www.instagram.com/a.s.h.i.s.h__g.o.s.w.a.m.i/) |

## License

This is a personal portfolio project. All portfolio content, personal details, and project assets belong to Ashish Goswami unless stated otherwise.
