# Anbagam NGO Website — Design Document

**Date:** 2026-04-04  
**Stack:** Next.js + Tailwind CSS + shadcn/ui  
**Type:** Single-page website

---

## Overview

A single-page website for Anbagam NGO to showcase their three care centers and allow donors to contribute via UPI deeplinks for specific meals.

---

## Data

### Centers

| Center | Location | Residents |
|--------|----------|-----------|
| Anbagam Otteri | Otteri | 60 |
| Anbagam Royapetta | Royapetta | 60 |
| Anbagam Thirunilai | Thirunilai | 250 |

### Meal Costs (daily, per center)

| Meal | Otteri | Royapetta | Thirunilai |
|------|--------|-----------|------------|
| Breakfast | ₹3,500 | ₹3,500 | ₹5,000 |
| Lunch | ₹5,000 | ₹5,000 | ₹12,500 |
| Dinner | ₹5,000 | ₹5,000 | ₹10,000 |
| Snacks | ₹1,500 | ₹1,500 | ₹3,000 |

---

## Page Structure

1. **Navbar** — "Anbagam" name + tagline
2. **Hero** — Mission statement, warm background
3. **Location Section × 3** — stacked vertically, one per center
4. **Footer** — simple note

---

## Visual Design

- **Background:** `stone-50` (warm off-white)
- **Primary accent:** `amber-600` (warm saffron)
- **Location headers:** `teal-700`
- **Meal cards:** white, soft shadow, hover lift
- **Donate button:** `amber-500` → `amber-600` on hover
- **Font:** Inter

---

## Components

- `Navbar` — logo + tagline
- `Hero` — mission text
- `LocationSection` — header (name, resident count) + 4 MealCards
- `MealCard` — icon, name, cost, Donate button
- `Footer`

---

## UPI Payment

UPI deeplink format:
```
upi://pay?pa=UPI_ID&pn=Anbagam&am=AMOUNT&tn=MEAL+LOCATION&cu=INR
```

UPI_ID stored in `lib/config.ts` as a single constant for easy configuration.

---

## File Structure

```
anbagam-ngo/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── LocationSection.tsx
│   ├── MealCard.tsx
│   └── Footer.tsx
├── lib/
│   └── config.ts        ← UPI_ID constant + center data
└── docs/plans/
    └── 2026-04-04-anbagam-ngo-design.md
```
