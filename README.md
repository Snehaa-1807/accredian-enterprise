# Accredian Enterprise — Next.js Clone

## Setup Instructions

### Prerequisites
- Node.js v18 or higher
- npm (comes with Node.js)

### Run Locally
```bash
git clone https://github.com/Snehaa-1807/accredian-enterprise
cd accredian-enterprise
npm install
npm run dev
```
Open http://localhost:3000 in your browser.

### Production Build
```bash
npm run build
npm start
```

---

## Approach Taken

I started by carefully studying the reference site (enterprise.accredian.com) through screenshots and source analysis to map out every section before writing any code.

**Sections built (in order):**
- Navbar with smooth scroll links: Home, Stats, Clients, Accredian Edge, CAT, How It Works, FAQs, Testimonials
- Hero: light blue card with headline "Next-Gen Expertise For Your Enterprise", feature checkmarks, Enquire Now CTA
- Track Record: 10K+, 200+, 5K+ animated count-up stats triggered on scroll via IntersectionObserver
- Proven Partnerships: Reliance, HCL, IBM, CRIF, ADP, Bayer client logos
- Accredian Edge: 7 connected icon circles with descriptive labels
- Domain Expertise: 7 domain cards (Product & Innovation Hub, Gen-AI Mastery, Leadership Elevation, etc.)
- Tailored Course Segmentation: 4 category cards (Program, Industry, Topic, Level Specific)
- Strategic Skill Enhancement: blue banner targeting 4 audience types
- CAT Framework: Concept → Application → Tools circular diagram
- How We Deliver Results: 3-step numbered process cards
- FAQs: tabbed accordion with 3 categories (About the Course, About the Delivery, Miscellaneous)
- Testimonials: ADP and Bayer partner quotes
- CTA Banner: "Want to Learn More About Our Training Solutions?"
- Footer: logo, social links, contact info, copyright

**Architecture decisions:**
- Next.js 16 App Router with TypeScript for type safety
- "use client" applied only on interactive components (Navbar, Stats, FAQs, Testimonials) — everything else is a server component
- Tailwind CSS for all styling — no external UI libraries
- IntersectionObserver for scroll-triggered count-up animations (no polling, no dependencies)
- /api/enquire route handler stores leads in-memory (swap for a real DB in production)
- All components are isolated, reusable, and individually testable

---

## AI Usage Explanation

**Where AI helped:**
- Wrote the useCountUp hook with IntersectionObserver for scroll-triggered animations
- Produced TypeScript interfaces and type annotations across components
- Built the tabbed FAQ accordion logic and mobile testimonial slider
- Created the Next.js API Route Handler boilerplate for /api/enquire
- Suggested responsive grid layouts and Tailwind class combinations
- Helped in finding images and the correct icons

**What I modified and verified manually:**
- Cross-checked every section, label, and copy against the actual reference screenshots to ensure accuracy
- Corrected all nav link labels (Home, Stats, Clients, Accredian Edge, CAT, How It Works, FAQs, Testimonials)
- Verified real client names: Reliance, HCL, IBM, CRIF, ADP, Bayer
- Matched exact testimonial quotes from ADP and Bayer shown on the reference site
- Reproduced the correct footer copyright text: "© 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved"
- Fixed a build error caused by next/font/google being blocked in the sandbox environment
- Tuned hero card layout (light blue background, rounded card, feature checkmarks)
- Adjusted the Accredian Edge connector lines between icon circles to match the reference

---

## Improvements I Would Make With More Time


1. **Enquire Now modal** — Build a proper popup form triggered by the Enquire Now button with name, email, company, and message fields

2. **Database integration** — Replace the in-memory lead store with Prisma + PostgreSQL (Supabase free tier) so enquiries persist across server restarts

3. **Email notifications** — Send an automated confirmation email to the user and alert email to the enterprise team on each new enquiry using Resend or Nodemailer

4. **Animations** — Add Framer Motion scroll-reveal animations on section entry to match the polished feel of the reference site

5. **Testimonials carousel** — Implement a proper auto-playing slider for testimonials (the reference shows pagination dots)

6. **Real SVG icons** — Replace emoji icons with proper SVG icons matching the blue circular icon style shown in the Accredian Edge and Domain Expertise sections

7. **SEO** — Add OpenGraph meta tags, a sitemap.xml, robots.txt, and JSON-LD structured data for better search visibility

8. **Dark mode** — Implement theme switching using next-themes with Tailwind's dark: variant

9. **E2E testing** — Add Playwright tests covering navigation, FAQ tab switching, form validation, and API response handling