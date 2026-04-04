# Anbagam NGO Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a single-page Next.js website for Anbagam NGO showcasing 3 care centers with UPI deeplink donation buttons per meal.

**Architecture:** Single `page.tsx` assembles Hero + 3 LocationSections. All center data lives in `lib/config.ts`. Each MealCard generates a UPI deeplink from the config UPI_ID constant.

**Tech Stack:** Next.js 14 (App Router), Tailwind CSS, shadcn/ui, TypeScript

---

## Task 1: Scaffold Next.js App

**Files:**
- Create: `/Users/varun/Projects/anbagam-ngo/` (project root)

**Step 1: Create Next.js app**

```bash
cd /Users/varun/Projects/anbagam-ngo
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=no --import-alias="@/*"
```
When prompted, accept all defaults.

**Step 2: Verify dev server starts**

```bash
npm run dev
```
Expected: Server running at http://localhost:3000 with default Next.js page.

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js app with Tailwind"
```

---

## Task 2: Install and Configure shadcn/ui

**Files:**
- Modify: `components.json` (auto-generated)
- Modify: `app/globals.css`

**Step 1: Initialize shadcn/ui**

```bash
npx shadcn@latest init
```
When prompted:
- Style: Default
- Base color: Stone
- CSS variables: Yes

**Step 2: Add required shadcn components**

```bash
npx shadcn@latest add card badge button
```

**Step 3: Verify components exist**

```bash
ls components/ui/
```
Expected: `card.tsx`, `badge.tsx`, `button.tsx`

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add shadcn/ui with card, badge, button"
```

---

## Task 3: Create Config File with All Data

**Files:**
- Create: `lib/config.ts`

**Step 1: Create the config file**

```typescript
// lib/config.ts

export const UPI_ID = "your-upi-id@bank"; // Replace with actual UPI ID

export type Meal = {
  name: string;
  icon: string;
  amount: number;
  note: string; // used in UPI transaction note
};

export type Center = {
  name: string;
  location: string;
  residents: number;
  meals: Meal[];
};

export const centers: Center[] = [
  {
    name: "Anbagam Otteri",
    location: "Otteri",
    residents: 60,
    meals: [
      { name: "Breakfast", icon: "🌅", amount: 3500, note: "Breakfast+Otteri" },
      { name: "Lunch",     icon: "🍽️",  amount: 5000, note: "Lunch+Otteri" },
      { name: "Dinner",    icon: "🌙", amount: 5000, note: "Dinner+Otteri" },
      { name: "Snacks",    icon: "🍊", amount: 1500, note: "Snacks+Otteri" },
    ],
  },
  {
    name: "Anbagam Royapetta",
    location: "Royapetta",
    residents: 60,
    meals: [
      { name: "Breakfast", icon: "🌅", amount: 3500, note: "Breakfast+Royapetta" },
      { name: "Lunch",     icon: "🍽️",  amount: 5000, note: "Lunch+Royapetta" },
      { name: "Dinner",    icon: "🌙", amount: 5000, note: "Dinner+Royapetta" },
      { name: "Snacks",    icon: "🍊", amount: 1500, note: "Snacks+Royapetta" },
    ],
  },
  {
    name: "Anbagam Thirunilai",
    location: "Thirunilai",
    residents: 250,
    meals: [
      { name: "Breakfast", icon: "🌅", amount: 5000,  note: "Breakfast+Thirunilai" },
      { name: "Lunch",     icon: "🍽️",  amount: 12500, note: "Lunch+Thirunilai" },
      { name: "Dinner",    icon: "🌙", amount: 10000, note: "Dinner+Thirunilai" },
      { name: "Snacks",    icon: "🍊", amount: 3000,  note: "Snacks+Thirunilai" },
    ],
  },
];

export function buildUpiLink(amount: number, note: string): string {
  return `upi://pay?pa=${UPI_ID}&pn=Anbagam&am=${amount}&tn=${note}&cu=INR`;
}
```

**Step 2: Commit**

```bash
git add lib/config.ts
git commit -m "feat: add center data and UPI config"
```

---

## Task 4: Build Navbar Component

**Files:**
- Create: `components/Navbar.tsx`

**Step 1: Create the component**

```tsx
// components/Navbar.tsx
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-lg">
          A
        </div>
        <div>
          <h1 className="font-bold text-stone-800 text-lg leading-none">Anbagam</h1>
          <p className="text-xs text-stone-500">Nourishing lives, one meal at a time</p>
        </div>
      </div>
    </nav>
  );
}
```

**Step 2: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: add Navbar component"
```

---

## Task 5: Build Hero Component

**Files:**
- Create: `components/Hero.tsx`

**Step 1: Create the component**

```tsx
// components/Hero.tsx
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-amber-50 via-stone-50 to-teal-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <Badge className="mb-4 bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200">
          Community Care
        </Badge>
        <h2 className="text-4xl font-bold text-stone-800 mb-4 leading-tight">
          Feed a Family,<br />
          <span className="text-amber-600">Change a Life</span>
        </h2>
        <p className="text-stone-600 text-lg max-w-xl mx-auto leading-relaxed">
          Anbagam runs three care centers across Chennai, providing nutritious
          daily meals to over 370 residents. Your donation directly feeds a
          meal for the day.
        </p>
        <div className="mt-8 flex justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-700">370+</div>
            <div className="text-sm text-stone-500">Residents</div>
          </div>
          <div className="w-px bg-stone-200" />
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-700">3</div>
            <div className="text-sm text-stone-500">Centers</div>
          </div>
          <div className="w-px bg-stone-200" />
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-700">4</div>
            <div className="text-sm text-stone-500">Meals Daily</div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: add Hero section with stats"
```

---

## Task 6: Build MealCard Component

**Files:**
- Create: `components/MealCard.tsx`

**Step 1: Create the component**

```tsx
// components/MealCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { buildUpiLink, type Meal } from "@/lib/config";

interface MealCardProps {
  meal: Meal;
}

export function MealCard({ meal }: MealCardProps) {
  const upiLink = buildUpiLink(meal.amount, meal.note);

  return (
    <Card className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 border-stone-100">
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="text-3xl">{meal.icon}</span>
          <span className="text-xs text-stone-400 bg-stone-50 px-2 py-1 rounded-full">
            daily
          </span>
        </div>
        <h4 className="font-semibold text-stone-700 mb-1">{meal.name}</h4>
        <p className="text-2xl font-bold text-teal-700 mb-4">
          ₹{meal.amount.toLocaleString("en-IN")}
        </p>
        <a href={upiLink}>
          <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium">
            Donate via UPI
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}
```

**Step 2: Commit**

```bash
git add components/MealCard.tsx
git commit -m "feat: add MealCard with UPI deeplink"
```

---

## Task 7: Build LocationSection Component

**Files:**
- Create: `components/LocationSection.tsx`

**Step 1: Create the component**

```tsx
// components/LocationSection.tsx
import { Badge } from "@/components/ui/badge";
import { MealCard } from "@/components/MealCard";
import { type Center } from "@/lib/config";

interface LocationSectionProps {
  center: Center;
  index: number;
}

const bgColors = [
  "bg-amber-50",
  "bg-teal-50",
  "bg-stone-50",
];

export function LocationSection({ center, index }: LocationSectionProps) {
  return (
    <section className={`py-14 px-4 ${bgColors[index % bgColors.length]}`}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-stone-800">{center.name}</h3>
            <Badge variant="outline" className="text-teal-700 border-teal-200 bg-teal-50">
              {center.residents} residents
            </Badge>
          </div>
          <p className="text-stone-500 flex items-center gap-1">
            <span>📍</span> {center.location}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {center.meals.map((meal) => (
            <MealCard key={meal.name} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add components/LocationSection.tsx
git commit -m "feat: add LocationSection with meal grid"
```

---

## Task 8: Build Footer Component

**Files:**
- Create: `components/Footer.tsx`

**Step 1: Create the component**

```tsx
// components/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-400 py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <span className="font-semibold text-stone-200">Anbagam</span>
        </div>
        <p className="text-sm">
          Serving nutritious meals to those who need it most — every single day.
        </p>
        <p className="text-xs mt-4 text-stone-600">
          © {new Date().getFullYear()} Anbagam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
```

**Step 2: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: add Footer component"
```

---

## Task 9: Assemble page.tsx and Update Layout

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

**Step 1: Update globals.css — remove default Next.js styles, keep Tailwind directives**

Replace contents of `app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Step 2: Update layout.tsx**

```tsx
// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anbagam — Nourishing Lives",
  description: "Support Anbagam NGO by donating a meal for our 370+ residents across 3 care centers in Chennai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-stone-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

**Step 3: Assemble page.tsx**

```tsx
// app/page.tsx
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";
import { centers } from "@/lib/config";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {centers.map((center, i) => (
        <LocationSection key={center.name} center={center} index={i} />
      ))}
      <Footer />
    </main>
  );
}
```

**Step 4: Run dev server and visually verify**

```bash
npm run dev
```

Open http://localhost:3000 and check:
- Navbar is sticky
- Hero shows stats (370+, 3, 4)
- All 3 location sections render with 4 meal cards each
- Donate buttons are amber colored
- Page scrolls cleanly

**Step 5: Commit**

```bash
git add app/page.tsx app/layout.tsx app/globals.css
git commit -m "feat: assemble full single-page layout"
```

---

## Task 10: Build Verification

**Step 1: Run production build**

```bash
npm run build
```
Expected: Build completes with no errors. TypeScript errors will block the build — fix any that appear.

**Step 2: Final commit**

```bash
git add -A
git commit -m "chore: production build verified"
```

---

## Done

The site is complete. To configure the UPI ID, edit `lib/config.ts` line 3:
```typescript
export const UPI_ID = "your-upi-id@bank";
```
