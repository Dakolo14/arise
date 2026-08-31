# Arise Community Support Foundation (Arise CSF) - Website Redesign

This is a Next.js (App Router) project built with Tailwind CSS, acting as a redesign prototype for Arise CSF.

## Tech Stack
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) via `next/font`
- **Language**: TypeScript

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Contains all pages and routing.
  - `page.tsx`: The homepage containing the Hero preview and Support section.
  - `layout.tsx`: The global layout wrapping all pages (includes Navbar and Footer).
  - `about`, `contact`, etc.: Placeholder pages for future content.
- `src/components`: Reusable UI components.
  - `ui/`: Base components (Button, Logo).
  - `layout/`: Global layout components (Navbar, Footer).
  - `home/`: Sections for the homepage (HeroOption1, 2, 3, SupportOurMission).
- `public/images`: Static assets like images and illustrations.

## TODOs for the Client

Before launching, the client needs to address the following:

- **Exact Impact Numbers**: Update the placeholder numbers ("18+ Years", "1000s of Lives Touched") in `HeroOption1` and `HeroOption2`.
- **Payment Processor Integration**: The "Make a Donation" buttons (in `SupportOurMission` and Nav) currently do not process actual payments. You'll need to integrate Paystack, Flutterwave, Stripe, or a direct bank transfer modal.
- **Social Media Links**: Replace the `href="#"` placeholders in the `Footer` component with the actual Facebook, Instagram, LinkedIn, and YouTube URLs.
- **Content Population**: The pages for About Us, Vision & Mission, Initiatives, Get Involved, News, Gallery, and Contact are currently placeholders. The actual content and team bios need to be added to these components.
- **Real Logo**: Replace the SVG placeholder in `src/components/ui/Logo.tsx` with the official Arise CSF logo file.
- **Real Imagery**: Replace the generated placeholder images (`public/images/hero-1.jpg`) with authentic photos from the NGO.

## Performance & Accessibility

- The site uses `next/image` for automatic image optimization.
- The `Inter` font is self-hosted via Next.js to prevent render-blocking.
- The UI is designed to be fully responsive across mobile, tablet, and desktop breakpoints.
- The color scheme was checked for WCAG AA contrast compliance.
- Semantic HTML and ARIA labels are used for screen-reader accessibility.
