# Xpress A/C Specialists - Professional Automotive A/C Services

A modern, responsive website for automotive A/C services built with Nuxt 3, Vue 3, and Tailwind CSS.

## 🚀 Key Features

### Modern Design & UX
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI Components**: Clean, professional design with smooth animations
- **Accessibility**: WCAG compliant with proper focus states and keyboard navigation
- **Performance**: Optimized images, lazy loading, and fast page loads

### Professional Components
- **Dynamic Header**: Sticky navigation with mobile menu
- **Hero Section**: Compelling messaging with animated elements and statistics
- **Services Grid**: Detailed service cards with pricing and features
- **Testimonials**: Customer reviews with ratings and photos
- **Contact Form**: Comprehensive quote request form with validation
- **About Section**: Company information and certifications

### Technical Excellence
- **Nuxt 3**: Latest framework with SSR and modern development features
- **Vue 3 Composition API**: Modern, efficient component structure
- **Tailwind CSS**: Utility-first CSS framework for fast development
- **TypeScript**: Type-safe development environment
- **SEO Optimized**: Proper meta tags, structured data, and performance optimization

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Install Dependencies**
```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

2. **Start Development Server**
```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

3. **Build for Production**
```bash
# Using npm
npm run build

# Using yarn
yarn build

# Using pnpm
pnpm build
```

## 📁 Project Structure

```
├── components/           # Vue components
│   ├── TheHeader.vue    # Navigation header
│   ├── HeroSection.vue  # Hero section with CTA
│   ├── AboutSection.vue # Company information
│   ├── ServicesSection.vue # Services grid
│   ├── TestimonialsSection.vue # Customer reviews
│   ├── ContactSection.vue # Contact form
│   └── TheFooter.vue    # Footer with links
├── assets/
│   └── css/
│       └── main.css     # Global styles and Tailwind imports
├── app.vue              # Main app component
├── nuxt.config.ts       # Nuxt configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#1e3c72 to #2a5298)
- **Secondary**: Red gradient (#ef4444 to #dc2626)
- **Accent**: Yellow (#fbbf24)
- **Neutral**: Gray scale (50-900)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large sizes with gradient text
- **Body**: Regular weight, optimized line height

### Components
- **Buttons**: Gradient backgrounds with hover effects
- **Cards**: Rounded corners with soft shadows
- **Forms**: Clean inputs with focus states
- **Icons**: Heroicons SVG icons

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
npx vercel

# Or connect your GitHub repository to Vercel
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
.output/public
```

### Static Generation
```bash
# Generate static files
npm run generate

# Deploy the dist/ folder to any static host
```

## 📱 Features Breakdown

### Header Component
- Sticky navigation with smooth scroll
- Mobile-responsive hamburger menu
- Company logo and branding
- Call-to-action buttons

### Hero Section
- Compelling headline and subheading
- Feature highlights with check icons
- Statistics display
- Dual call-to-action buttons
- Animated background elements

### Services Section
- Six detailed service cards
- Pricing information
- Feature lists with icons
- Hover animations
- Free diagnosis call-to-action

### About Section
- Company credentials and certifications
- Feature highlights
- Statistics and track record
- Professional design elements

### Testimonials Section
- Customer reviews with star ratings
- Customer avatars and vehicle information
- Service type badges
- Overall statistics display

### Contact Section
- Comprehensive quote request form
- Vehicle information fields
- Service type selection
- Business hours and contact info
- Interactive form validation

### Footer
- Company information and links
- Social media icons
- Contact details
- Privacy policy links

## 🔧 Customization

### Updating Content
1. Edit component files in `/components/`
2. Update business information in relevant sections
3. Modify colors in `tailwind.config.js`
4. Change fonts in `nuxt.config.ts`

### Adding New Sections
1. Create new component in `/components/`
2. Import and use in `app.vue`
3. Add corresponding styles in CSS

### Form Integration
The contact form is ready for backend integration:
- Form data is structured and validated
- Easy to connect to email services or CRM
- Includes success/error handling

## 📊 Performance Optimizations

- **Image Optimization**: Nuxt Image with WebP/AVIF support
- **Code Splitting**: Automatic component lazy loading
- **CSS Optimization**: Tailwind CSS purging
- **SEO**: Proper meta tags and structured data
- **Accessibility**: ARIA labels and keyboard navigation

## 🎯 SEO Features

- **Meta Tags**: Comprehensive head management
- **Open Graph**: Social media sharing optimization
- **Schema Markup**: Ready for business schema
- **Sitemap**: Automatic generation
- **Performance**: Fast loading times

## 🔄 Major Improvements Made

### From Previous Version:
1. **Modular Architecture**: Split monolithic 381-line file into focused components
2. **Modern Framework**: Upgraded to Nuxt 3 with Vue 3 Composition API
3. **Professional Design**: Complete UI/UX overhaul with modern design principles
4. **Functionality**: Added working contact form, testimonials, and interactive elements
5. **Performance**: Optimized images, animations, and loading times
6. **SEO**: Comprehensive meta tags and optimization
7. **Accessibility**: WCAG compliance and keyboard navigation
8. **Responsive**: Mobile-first design with breakpoint optimization
9. **Content**: Enhanced copy, added testimonials, and detailed service information
10. **Maintenance**: Clean, documented code structure for easy updates

## 📝 License

This project is private and proprietary to Xpress A/C Specialists.

## 🤝 Support

For technical support or customization requests, please contact the development team.
