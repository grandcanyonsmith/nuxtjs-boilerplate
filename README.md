# Xpress A/C Specialists Website

A modern, responsive website for Xpress A/C Specialists - mobile automotive A/C repair services in Utah.

## Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Contact Form Integration**: Form submissions are sent to your webhook endpoint
- **Smooth Animations**: Scroll-triggered animations and smooth navigation
- **Modern UI/UX**: Clean, professional design with intuitive navigation
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Website Sections

1. **Hero Section**: Eye-catching banner with call-to-action buttons
2. **Services**: 6 core A/C services offered
3. **About Us**: Company information and experience
4. **Testimonials**: 8 customer reviews
5. **Gallery**: Service images
6. **FAQ**: Common questions and answers
7. **Contact Form**: Lead capture with webhook integration

## Contact Form Integration

The contact form sends the following data to your webhook:
- Name
- Email
- Phone
- Vehicle Make & Model
- Message
- Timestamp
- Source identifier

Webhook URL: `https://services.leadconnectorhq.com/hooks/c2DjRsOo4e13Od6ZTU6S/webhook-trigger/b67fee8b-941e-47c1-b454-0149ee1a5c01`

## Deployment

### Option 1: Simple Web Hosting
1. Upload all files (`index.html`, `styles.css`, `script.js`) to your web host
2. Ensure files are in the same directory
3. Access via your domain

### Option 2: GitHub Pages
1. Create a new GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select source and branch
5. Your site will be available at `https://[username].github.io/[repository-name]`

### Option 3: Netlify
1. Zip all files
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop your zip file
4. Get instant hosting with a free subdomain

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0075FF;  /* Main blue color */
    --secondary-color: #FF6B35; /* Orange accent color */
}
```

### Content
All content is in `index.html` - simply edit the text directly.

### Images
The website uses placeholder images from Unsplash. Replace with your actual service photos for better authenticity.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contact Information

- **Phone**: (801) 996-4205
- **Email**: ACXpressUtah@gmail.com
- **Service Areas**: Utah County, Salt Lake County and surrounding areas

## License

This website is created for Xpress A/C Specialists. All rights reserved.
