# AgencyHub - Professional Agency Portfolio Website

A modern, fully responsive agency portfolio website built with React, featuring a sleek design and comprehensive project showcase capabilities.

## Features ✨

- **Modern Design**: Beautiful dark-themed UI with gradient accents and smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Component-Based Architecture**: Well-organized, reusable React components
- **Fast Navigation**: React Router for smooth page transitions
- **Professional Layout**: Including Home, Projects, About, and Contact pages
- **Eye-catching Hero Section**: With animated background elements
- **Services Showcase**: Display your agency's services
- **Projects Gallery**: Beautiful grid layout for project showcase
- **Contact Form**: Functional contact form with validation
- **Social Integration**: Footer with social media links
- **React Icons**: Professional icon library integrated

## Project Structure 📁

```
agency/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with mobile menu
│   │   ├── Hero.jsx             # Hero section with CTA buttons
│   │   ├── Services.jsx         # Services showcase grid
│   │   ├── FeaturedProjects.jsx # Featured projects display
│   │   ├── About.jsx            # About company section
│   │   └── Footer.jsx           # Footer with links and social
│   ├── pages/
│   │   ├── Home.jsx             # Home page (combines multiple components)
│   │   ├── Projects.jsx         # Full projects listing page
│   │   ├── AboutPage.jsx        # Detailed about page
│   │   └── Contact.jsx          # Contact form page
│   ├── styles/
│   │   ├── index.css            # Global styles
│   │   ├── Navbar.css           # Navbar styling
│   │   ├── Hero.css             # Hero section styling
│   │   ├── Services.css         # Services section styling
│   │   ├── FeaturedProjects.css # Featured projects styling
│   │   ├── About.css            # About component styling
│   │   ├── Footer.css           # Footer styling
│   │   ├── Projects.css         # Projects page styling
│   │   ├── AboutPage.css        # About page styling
│   │   └── Contact.css          # Contact page styling
│   ├── data/
│   │   └── projects.js          # Sample project data
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # React entry point
│   └── App.css                  # Additional app styles
├── package.json
├── vite.config.js
├── eslint.config.js
└── index.html

```

## Installation & Setup 🚀

### Prerequisites
- Node.js (v14.0 or higher)
- npm or yarn

### Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The app will be available at `http://localhost:5173/`

## Available Scripts 📝

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Dependencies 📦

- **react** (^19.2.5) - UI library
- **react-dom** (^19.2.5) - React DOM rendering
- **react-router-dom** (^7.0.0) - Routing solution
- **react-icons** (^5.0.0) - Icon library

## Customization 🎨

### Colors & Theme
- Edit CSS files in `src/styles/` to modify colors
- Primary gradient: `#667eea` to `#764ba2`
- Background: `#0f0f1e` dark theme

### Projects Data
- Edit `src/data/projects.js` to add your projects
- Update the `projectsData` array with your portfolio items

### Navigation Links
- Edit `src/components/Navbar.jsx` to modify navigation menu

### Company Information
- Update footer text in `src/components/Footer.jsx`
- Modify about section in `src/pages/AboutPage.jsx`
- Update contact info in `src/pages/Contact.jsx`

## Design Highlights 🎯

- **Gradient Backgrounds**: Modern gradient color schemes throughout
- **Smooth Animations**: Hover effects and fade-in animations
- **Mobile-First Responsive Design**: Adapts beautifully to all screen sizes
- **Professional Typography**: Clear hierarchy and readability
- **Glassmorphism Effects**: Frosted glass effects on cards and sections
- **Interactive Elements**: Hover effects and smooth transitions

## Pages Overview 📄

### Home Page
- Hero section with prominent CTA buttons
- Services showcase in a responsive grid
- Featured projects preview
- Call to action to view all projects

### Projects Page
- Full project listing with detailed cards
- Project images, descriptions, and technologies used
- Category badges
- Technology tags for each project

### About Page
- Company story and mission
- Statistics (projects completed, clients, team members)
- Core values and why choose us section
- Team introduction section

### Contact Page
- Contact form with validation
- Contact information display
- Office location, email, and phone
- Business hours

## Performance Optimization ⚡

- Optimized images with proper sizing
- Lazy loading ready
- Minimal CSS for fast load times
- Vite for fast development and optimized builds

## Browser Compatibility 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements 💡

- Add actual project filtering by category
- Implement email functionality for contact form
- Add blog section
- Integrate CMS for dynamic content
- Add animation library (Framer Motion)
- SEO optimization
- Dark/Light theme toggle

## Support & Contact 📞

For questions or support regarding this portfolio template, feel free to reach out through the contact form on the website.

## License 📜

This project is open source and available for personal and commercial use.

---

**Built with ❤️ using React, Vite, and React Router**
