# Accredian Enterprise — Next.js Clone

A faithful clone of **enterprise.accredian.com** built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Setup Instructions

```bash
# Unzip and enter the project
unzip accredian-enterprise.zip
cd accredian-enterprise

# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

### Production Build
```bash
npm run build && npm start
```

---

## 🌐 Deploy to Vercel
1. Push repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) → Import your repo
3. Click **Deploy** — Vercel auto-detects Next.js

---

## 📄 Pages & Sections Built

All sections match the reference screenshots of `enterprise.accredian.com`:

| Section | Component |
|---|---|
| Navbar | Home, Stats, Clients, Accredian Edge, CAT, How It Works, FAQs, Testimonials |
| Hero | "Next-Gen Expertise For Your Enterprise" + feature bullets + Enquire Now |
| Track Record | 10K+ / 200+ / 5K+ animated count-up stats |
| Proven Partnerships | Reliance, HCL, IBM, CRIF, ADP, Bayer logo cards |
| Accredian Edge | 7-item icon circle train with top/bottom labels |
| Domain Expertise | 7 domain cards (Product, Gen-AI, Leadership, etc.) |
| Course Segmentation | 4 image cards (Program/Industry/Topic/Level Specific) |
| Strategic Skill Enhancement | Blue banner for 4 audience types |
| CAT Framework | Concept → Application → Tools circle diagram |
| How We Deliver Results | 3-step numbered cards |
| FAQs | Tabbed accordion (About Course / Delivery / Misc) |
| Testimonials | ADP and Bayer quote cards |
| CTA Banner | "Want to Learn More..." with Contact Us button |
| Footer | Logo, social links, Accredian/Contact columns, copyright |

---

## 🤖 AI Usage (Claude)

**Where AI helped:**
- Scaffolded all 12 components from screenshot descriptions
- Wrote the animated count-up hook with IntersectionObserver
- Generated TypeScript types for all data structures
- Built the tabbed FAQ accordion and testimonial slider logic

**What I modified manually:**
- Verified all copy, section names, and company names against the actual screenshots
- Tuned the hero card layout (light blue bg, two-person layout, rounded card)
- Adjusted the Accredian Edge connector lines between icon circles
- Fixed build error (removed next/font/google — sandbox blocks googleapis.com)

---

## 🔮 Improvements With More Time
1. Replace emoji icons with actual SVG icons matching the reference
2. Add real person photo to Hero (matching the two professionals in the screenshot)
3. Add company SVG logos (Reliance, HCL, IBM, CRIF, ADP, Bayer)
4. Persist enquiries to a database (Prisma + Supabase)
5. Add Framer Motion scroll-reveal animations
6. Build the actual enquiry modal/form triggered by "Enquire Now"
7. Add E2E Playwright tests

---

## 📬 Submission
https://docs.google.com/forms/d/e/1FAIpQLSeC-GbWRJNCY5ja3nFV8a2G4ChP4Ar_7lMZSbLAtcKRP0oJ2Q/viewform
