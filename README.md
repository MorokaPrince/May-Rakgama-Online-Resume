# Modern Portfolio Website

A sleek, responsive portfolio website built with React, featuring a modern design with glassmorphism effects and smooth animations.

## Features

- 🎨 Modern UI/UX with glassmorphism effects
- 📱 Fully responsive design
- 🌈 Smooth animations and transitions
- 🎯 Interactive skill progress bars
- 📜 Dynamic certificate management with drag & drop
- 🔄 Animated timeline for experience
- 🎓 Comprehensive education section
- 💼 Project showcase
- 📬 Contact form

## Tech Stack

- React.js
- React Router for navigation
- CSS3 with modern features (Grid, Flexbox, Variables)
- Font Awesome for icons
- AOS (Animate On Scroll) for scroll animations
- Bootstrap for additional styling

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Experience.js
│   │   ├── Skills.js
│   │   ├── Education.js
│   │   ├── Certificates.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies:
```bash
cd portfolio
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## Design Features

### Glassmorphism
- Frosted glass effect using backdrop-filter
- Subtle transparency with rgba colors
- Soft shadows for depth

### Animations
- Smooth hover effects on cards
- AOS animations for scroll reveals
- Floating animations for icons
- Progress bar animations
- Timeline animations for experience section

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Collapsible navigation
- Optimized for all screen sizes

### Color Scheme
- Modern gradient combinations
- Consistent color variables
- Accessible contrast ratios
- Smooth color transitions

## Customization

### Colors
Edit the CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #a855f7;
  --accent-1: #14b8a6;
  --accent-2: #f59e0b;
  --accent-3: #ec4899;
  --background-light: #f8fafc;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
}
```

### Content
Update the profile data in `src/App.js` to customize:
- Personal information
- Skills
- Experience
- Education
- Projects
- Certificates

## Performance Optimization

- Lazy loading of images
- Code splitting with React Router
- Optimized animations
- Efficient CSS with modern practices
- Responsive image handling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- AOS library for scroll animations
- React community for inspiration and resources