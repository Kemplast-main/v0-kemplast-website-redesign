# Kemplast Process Solutions - Website Redesign

Welcome to the new Kemplast Process Solutions official website. Kemplast has been pioneering process instrumentation and industrial solutions since 1986. This project is a complete modern redesign of the website aiming to provide a premium, dynamic, and seamless experience for users browsing products, asking for quotes, or submitting career applications.

## 🎯 Objectives
- **Modern Upgrade:** Transition from a legacy design to a highly modern, animated UI.
- **Engagement:** Increase user engagement with interactive elements, floating animations, and bento-grid layouts.
- **Centralized Communications:** Unify product inquiries, quote requests, and job applications to route directly to `sales@kemplast.in`.
- **Product Integration:** Cleanly display the massive catalog of Kemplast products including the newly added Siemens PLC catalog.
- **SEO & Performance:** Ensure high performance, fast load times, and structured data representing the organization on Google and IndiaMART.

## 🏗 Architecture
This project is built on a highly scalable, modern web stack using:
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation Framework:** Framer Motion for scroll-linked animations and page transitions.
- **Components:** Shadcn / Radix UI primitives for robust accessibility.
- **Backend/Forms:** Next.js Route Handlers coupled with `Resend` for sending emails programmatically.
- **Icons:** `lucide-react`

## 📂 Project Structure

```text
kemplast-website-redesign/
├── app/
│   ├── api/             # Next.js API Routes (e.g., /send-application for Resend)
│   ├── (routes)/        # Page routes including /products, /contact, /services, etc.
│   ├── layout.tsx       # Global root layout, SEO metadata, and HTML Providers
│   └── page.tsx         # The main landing page
├── components/          # Reusable UI components
│   ├── ui/              # Shadcn primitive components (buttons, dialogs, inputs)
│   ├── hero-3d.tsx      # Main animated hero section
│   ├── about-section.tsx# Milestone and timeline components
│   └── ...              # Other composite sections
├── public/              # Static assets, images, and documents
├── styles/              # Global CSS & Tailwind configuration
└── package.json         # Project configuration and dependency manifests
```

## ✨ Features
- **Dynamic Hero Section:** A highly animated landing experience featuring scattered, floating stat cards with a glassy UI.
- **Interactive Timeline:** A scrollable, hover-responsive company milestone timeline with animated dots.
- **Rich Product Catalog:** Extensive Siemens PLC and Process Instrumentation catalog layout.
- **Form Integration:** Custom-built job application and quote request forms hooked up via Resend API to deliver directly to the sales team.
- **Global Search:** IndiaMART integrations embedded contextually throughout the product journey.

## 🚀 Commands to Run the Program

To get this project running on your local machine, follow these steps:

1. **Install Dependencies:**
   Make sure you have Node installed, then run:
   ```bash
   npm install
   ```
2. **Setup Environment Variables:**
   Create a `.env.local` file in the root directory and add your Resend API credentials (required for email forms):
   ```env
   RESEND_API_KEY=your_resend_api_key
   ```
3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the running application.

4. **Build for Production:**
   ```bash
   npm run build
   npm run start
   ```

## 🐙 Cloning from Git

To clone this repository to your local machine, use the standard Git command:

```bash
# Clone the repository
git clone https://github.com/your-username/kemplast-website-redesign.git

# Navigate into the project folder
cd kemplast-website-redesign

# Install dependencies and start
npm install
npm run dev
```

---
*Developed for Kemplast Process Solutions*




# ─────────────────────────────────────────────
# Resend (email delivery) — https://resend.com
# ─────────────────────────────────────────────
RESEND_API_KEY=re_ZDDuXXzt_AG3VhzULt7byJo7TsqmJZ1XV

# ─────────────────────────────────────────────
# Supabase — https://supabase.com/dashboard
# ─────────────────────────────────────────────
NEXT_PUBLIC_SUPABASE_URL=https://haznwgcywltiasqcpawp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhhem53Z2N5d2x0aWFzcWNwYXdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwMzczNjMsImV4cCI6MjA4MTYxMzM2M30.GiPbfmcOzzmqLjL0cyz_Yl6VIiR9X0EIaxlDH1UN964

# ─────────────────────────────────────────────
# Supabase Service Role Key (server-side only, never expose to client)
# Get from: Supabase Dashboard → Settings → API → service_role key
# ─────────────────────────────────────────────
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhhem53Z2N5d2x0aWFzcWNwYXdwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjAzNzM2MywiZXhwIjoyMDgxNjEzMzYzfQ.HO-h0uCX6x3UKIL8weDEFAVxlnT7-Y5ToWh7s19rOxI

# ─────────────────────────────────────────────
# Supabase Personal Access Token (for npm run db:setup only)
# Get from: https://supabase.com/dashboard/account/tokens → Generate new token
# ─────────────────────────────────────────────
SUPABASE_ACCESS_TOKEN=sbp_f1846ca6ae62c740a5b6bb441b1f85de1996e291
