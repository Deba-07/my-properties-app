# Property Marketplace Demo

A small **Next.js + TypeScript** demo web application showcasing a list of properties with detail pages, a responsive carousel, and live search. Styled with **TailwindCSS** and animated with **Framer Motion**.  

This project demonstrates modern frontend practices, including **glassmorphism UI**, **responsive layouts**, and **optimized images** using `next/image`.  

---

## Features

- Display 10 properties with **title, price, location, and images**
- Property detail page with **carousel of images**
- **Responsive design** for mobile and desktop
- **Live search** to filter properties by title or location
- **Premium UI/UX** with gradients, hover effects, and animations
- **Back button** to navigate to the main page
- Optimized images using Next.js `<Image>` component
- Smooth transitions and animations with **Framer Motion**
- Glassmorphism style for carousel controls and buttons

---

## Demo

You can see a live demo here:  
[Live Site on Vercel](YOUR_VERCEL_LINK_HERE)

---

## Tech Stack

- **Next.js 14+ (App Router)**  
- **TypeScript**  
- **TailwindCSS**  
- **Framer Motion** for animations  
- **Embla Carousel** for property image slider  
- **Next/Image** for optimized images  

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/property-marketplace.git
cd property-marketplace
```
---

### Install Dependencies

```bash
npm install
# or
yarn install
```

---

## Run the development server

```bash
npm run dev
# or
yarn dev
```
Open http://localhost:3000 with your browser.

---

### Project Structure

```bash
src/
  app/
    properties/
      [id]/page.tsx        # Property detail page
    page.tsx               # Main page listing all properties
  components/
    Navbar.tsx             # Sticky navbar with search
    PropertyCard.tsx       # Property preview card
  data/
    properties.json        # Property data
```
