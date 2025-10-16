# Shake Sea - Modern Coffee Shop Website

A full-stack coffee shop website built with Next.js 14, TypeScript, and modern React ecosystem tools. Showcasing delicious coffee, food items, and creating an immersive online experience for coffee lovers.

## 🚀 Features

- **Next.js 14 App Router** - Latest Next.js with App Router for optimal performance
- **TypeScript** - Full type safety throughout the application
- **Responsive Design** - Mobile-first responsive layouts for all devices
- **Modern UI Components** - Beautiful, accessible UI components
- **TailwindCSS** - Utility-first CSS framework with custom design system
- **Framer Motion** - Production-ready motion library for smooth animations
- **Interactive Gallery** - Circular gallery component for showcasing food items
- **Menu Section** - Dynamic menu display with coffee and food items
- **Testimonials** - Customer reviews and feedback section
- **Location & Contact** - Store location and contact information
- **Instagram Integration** - Social media posts display
- **Newsletter Signup** - Email subscription functionality
- **Peak Hours Display** - Store operating hours information
- **Journey Section** - Brand story and journey
- **Hero Section** - Engaging landing area with animations

## 📁 Project Structure

```
shake-sea/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles with TailwindCSS
│   ├── layout.jsx           # Root layout component
│   ├── page.tsx             # Home page with all sections
│   └── index.jsx            # Main page component
├── components/              # Reusable components
│   ├── blocks/             # Feature and content blocks
│   ├── layout/             # Header and footer components
│   ├── sections/           # Main page sections
│   │   ├── connect.jsx     # Contact/connect section
│   │   ├── gallery.jsx     # Photo gallery section
│   │   ├── hero.jsx        # Hero landing section
│   │   ├── insta-posts.jsx # Instagram posts section
│   │   ├── journey.jsx     # Brand journey section
│   │   ├── location.jsx    # Store location section
│   │   ├── menu.jsx        # Food and drinks menu
│   │   ├── newsletter.jsx  # Email newsletter signup
│   │   ├── peak-hours.jsx  # Operating hours display
│   │   ├── testimonials.jsx # Customer testimonials
│   │   └── vibe.jsx        # Atmosphere/vibe section
│   └── ui/                 # UI components
│       ├── button.jsx      # Custom button component
│       ├── circular-gallery.jsx # Circular image gallery
│       ├── container-scroll-animation.jsx # Scroll animations
│       ├── glowing-effect.jsx # Glowing visual effects
│       ├── highlighter.jsx # Text highlighting component
│       └── hover-footer.jsx # Hover footer component
├── lib/                    # Utility functions
│   └── utils.js           # Utility functions
├── public/                # Static assets
│   ├── favicon.ico        # Website favicon
│   ├── gallery/           # Gallery images
│   ├── img/              # Food and drink images
│   ├── video/            # Video assets
│   ├── apple-touch-icon.png # iOS touch icon
│   ├── icon.svg          # Website icon
│   └── site.webmanifest  # Web app manifest
├── scripts/              # Utility scripts
│   ├── check-images.js   # Image validation script
│   └── generate-placeholders.js # Placeholder generation
├── TODO.md               # Project tasks and progress
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # TailwindCSS configuration
├── postcss.config.mjs    # PostCSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd shake-sea
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the coffee shop website.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (if configured)
- `npm run format` - Format code with Prettier (if configured)

## 🎨 Styling & UI Components

This project uses **TailwindCSS** for styling with custom components:

### TailwindCSS Configuration
- Custom design system with CSS variables
- Responsive design utilities
- Custom animations and effects
- Mobile-first approach

### Custom UI Components
- **Button** - Custom styled buttons with hover effects
- **Circular Gallery** - Interactive circular image gallery
- **Glowing Effect** - Visual glowing animations
- **Highlighter** - Text highlighting with animations
- **Container Scroll Animation** - Smooth scroll-triggered animations
- **Hover Footer** - Interactive footer with hover effects

### Animations
- **Framer Motion** for smooth animations
- Scroll-triggered animations
- Hover effects and transitions
- Loading animations

## 📸 Gallery & Media

### Food & Drink Images
The website showcases various coffee and food items:
- Hot Coffee, Cold Coffee, Iced Tea
- Specialty shakes (Chocolate, Vanilla, Strawberry, Mango Lassi)
- Food items (BBQ Chicken Pizza, Nutella Waffle, Peri Peri Chicken varieties)
- Lemonade and other beverages

### Gallery Section
- Interactive photo gallery
- Circular gallery component
- High-quality food photography
- Responsive image display

## 🏪 Sections Overview

### Hero Section
- Engaging landing area
- Smooth animations and effects
- Call-to-action elements

### Menu Section
- Comprehensive food and beverage menu
- Categorized items (Coffee, Shakes, Food, etc.)
- Pricing and descriptions

### Gallery Section
- Photo showcase of food items
- Interactive circular gallery
- High-resolution images

### Testimonials
- Customer reviews and feedback
- Social proof section

### Location & Contact
- Store address and map integration
- Contact information
- Operating hours

### Instagram Posts
- Social media integration
- Latest posts display

### Newsletter
- Email subscription functionality
- Customer engagement

### Journey Section
- Brand story and background
- Company history

### Peak Hours
- Operating hours display
- Special hours information

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables if needed
4. Deploy automatically on every push

### Other Platforms
This Next.js application can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify
- Heroku

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📚 Documentation Links

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [React Documentation](https://reactjs.org/docs)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the documentation links above
2. Review the component implementations for examples
3. Check the TODO.md file for current development status
4. Open an issue in this repository

---

Built with ❤️ using Next.js 14, TypeScript, and the modern React ecosystem for Shake Sea Coffee Shop.
