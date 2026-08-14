# E-Commerce Landing Page — Learnable 24 Front End Standardisation Test

A fully responsive e-commerce landing page built with React, TypeScript, and Redux Toolkit, featuring live product data pulled from the DummyJSON API.

## Live Demo

🔗 [View live site on Netlify](YOUR_NETLIFY_URL_HERE)

## Overview

This project is a landing page for an e-commerce storefront, built as part of the Learnable 24 Front End Standardisation Test. It includes:

- A responsive header with live cart item count
- A top contact/announcement bar
- A hero/CTA banner
- A category grid
- A bestseller products section with live data from the DummyJSON API, discount pricing, and stock/rating display
- Featured posts, services, testimonials, and footer sections
- Add-to-cart functionality with quantity handling, powered by Redux Toolkit

## Tech Stack

- **React** (Vite + TypeScript)
- **Vanilla CSS** (BEM-style class naming, no CSS framework)
- **Redux Toolkit** — client-side state management (cart)
- **RTK Query** — API integration and caching (product data)
- **DummyJSON API** — product data source
- **Netlify** — deployment

## Project Structure

```
src/
├── app/              # Redux store setup and typed hooks
├── assets/           # Images and static assets
├── components/       # Page sections (Header, TopBar, CtaBanner, CategoryGrid,
│                       BestsellerSection, FeaturedPosts, ServicesSection,
│                       TestimonialSection, Footer)
├── features/
│   ├── cart/         # Cart Redux slice and selectors
│   └── products/     # RTK Query API slice and ProductCard component
├── App.tsx
├── main.tsx
└── index.css         # Global styles and CSS reset
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes bundled with Node.js)

### Installation

1. Clone the repository:
```bash
   git clone https://github.com/cloud29-svg/ecommerce-cart.git
   cd ecommerce-cart
```

2. Install dependencies:
```bash
   npm install
```

### Running Locally

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port, shown in your terminal).

### Building for Production

```bash
npm run build
```

This generates an optimized production build in the `dist/` folder.

To preview the production build locally:
```bash
npm run preview
```

## Deployment

This project is deployed on [Netlify](https://www.netlify.com/).

**Build settings used:**
- Build command: `npm run build`
- Publish directory: `dist`

## State Management

- **Cart state** (`src/features/cart`) is managed with Redux Toolkit's `createSlice`, handling adding items, removing items, and incrementing/decrementing quantity (capped at available stock).
- **Product data** (`src/features/products`) is fetched and cached using RTK Query's `useGetProductsQuery` hook, which handles loading and error states automatically.

## Assumptions & Implementation Notes

- Per the assessment brief, only the **landing page** was built — no separate cart page, checkout flow, or product detail page.
- The wishlist icon in the header is currently a static UI element and is not connected to Redux state, as wishlist functionality was not part of the required scope.
- Product category labels shown on product cards come directly from the DummyJSON API's `category` field.
- Cart quantity increment/decrement and edge-case handling (e.g. empty cart) are implemented in the Redux `cartSlice` logic; since a dedicated cart view was outside the landing-page-only scope, this logic is demonstrated in the code walkthrough video rather than a visible cart page.

## Author

Precious Inya — [GitHub](https://github.com/cloud29-svg)