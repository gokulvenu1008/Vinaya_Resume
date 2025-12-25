# Personal Resume Website

A modern, responsive personal resume website built with React, featuring a clean professional design with a soft blue/white color theme.

## 🚀 Live Demo

The development server is running at: `http://localhost:5173/`

## ✨ Features

- **Modern Design**: Clean, professional corporate look with soft blue/white theme
- **Fully Responsive**: Desktop-first approach with mobile optimization
- **Smooth Animations**: Fade-in effects, hover states, and smooth transitions
- **One-Page Layout**: Scrollable sections with fixed navigation
- **SEO Optimized**: Proper meta tags and semantic HTML
- **React Components**: Modular, reusable component architecture

## 📋 Sections

1. **Hero** - Introduction with profile photo and call-to-action buttons
2. **About Me** - Professional background and key competencies
3. **Skills** - Technical skills organized in categorized cards
4. **Experience** - Work history with timeline layout
5. **Education** - Academic credentials
6. **Certifications** - Professional certifications
7. **Contact** - Contact form and social media links

## 🛠️ Tech Stack

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling
- **CSS3** - Modern styling with custom properties
- **Google Fonts (Inter)** - Professional typography

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Personal Information

1. **Name & Photo**: Edit `src/components/Hero.jsx`
   - Line 21: Replace "Vinaya R"
   - Line 56: Update profile photo URL

2. **Contact Information**: Edit `src/components/Contact.jsx`
   - Update email, LinkedIn, and GitHub links

3. **Experience**: Edit `src/components/Experience.jsx`
   - Update employment dates and details

4. **Education**: Edit `src/components/Education.jsx`
   - Add university name and graduation year

### Resume Download

Add your resume PDF to the `public/` folder and update the download function in `src/components/Hero.jsx`:

```javascript
const handleDownloadResume = () => {
  window.open('/your-resume.pdf', '_blank');
};
```

## 🎨 Color Scheme

The website uses a professional blue/white color palette:

- Primary Blue: `#4a90e2`
- Accent Blue: `#5ca9fb`
- Background: `#ffffff`, `#f4f7fc`
- Text: `#2c3e50`, `#546e7a`

You can customize colors in `src/index.css` (CSS variables in `:root`).

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 968px
- Mobile: < 768px
- Small Mobile: < 480px

## 📁 Project Structure

```
resume-website/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Deployment

### Vercel
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### Cloudflare Pages
```bash
npm run build
# Deploy dist/ folder to Cloudflare Pages
```

## 📝 License

This project is open source and available for personal and commercial use.

## 🙏 Acknowledgments

- Built with React and Vite
- Icons from inline SVG
- Typography by Google Fonts (Inter)

---

**Made with ❤️ using React**
