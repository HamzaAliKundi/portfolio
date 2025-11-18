# Portfolio Website

A modern, animated portfolio website built with React, Tailwind CSS, Three.js, and Framer Motion. Features Apple-style 3D animations and smooth transitions.

## Features

- 🎨 Modern dark theme with gradient accents
- 🎭 3D animations using Three.js (similar to Apple's website)
- ✨ Smooth page transitions with Framer Motion
- 📱 Fully responsive design
- 🎯 Centralized data configuration
- ⚡ Fast and optimized with Vite

## Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   └── Scene3D.jsx     # 3D background scene
│   ├── sections/           # Page sections
│   │   ├── Hero.jsx        # Hero/landing section
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Experience.jsx  # Work experience
│   │   └── Contact.jsx     # Contact form
│   ├── data/
│   │   └── portfolioData.js # Centralized portfolio data
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles with Tailwind
├── public/                 # Static assets (images, etc.)
└── package.json
```

## Configuration

All portfolio data is centralized in `src/data/portfolioData.js`. Simply edit this file to customize:

- Personal information (name, job title, bio, contact)
- Social media links
- Skills and technologies
- Projects (with images, descriptions, links)
- Work experience
- Education
- Theme colors

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Update your information in `src/data/portfolioData.js`

3. Add your images to the `public/` folder:
   - `avatar.jpg` - Your profile picture
   - `project1.jpg`, `project2.jpg`, etc. - Project images

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Customization

### Theme Colors

Edit the `theme` object in `portfolioData.js`:

```javascript
theme: {
  primaryColor: "#6366f1",    // Indigo
  secondaryColor: "#8b5cf6",   // Purple
  accentColor: "#ec4899",      // Pink
  // ... more colors
}
```

### Adding Projects

Add new projects to the `projects` array in `portfolioData.js`:

```javascript
{
  id: 4,
  title: "Your Project",
  description: "Project description",
  image: "/project4.jpg",
  technologies: ["React", "Node.js"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://project-demo.com",
  featured: true,
}
```

## Technologies Used

- React 19
- Vite
- Tailwind CSS
- Three.js & React Three Fiber
- Framer Motion
- React Three Drei

## License

MIT
