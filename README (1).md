# Modern Portfolio Website

A beautiful, modern, and responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 Modern and clean design with smooth animations
- 🌓 Dark mode toggle with persistent preference
- 📱 Fully responsive (mobile-first design)
- ⚡ Fast and optimized with Vite
- 🎭 Framer Motion animations for smooth transitions
- 📊 Dynamic content rendering
- 🎯 SEO-friendly structure
- 📝 Easy to customize and maintain

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Extract the project folder** (if you downloaded as zip)

2. **Navigate to the project directory:**
   ```bash
   cd modern-portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
modern-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/           # Content data files (EDIT THESE!)
│   │   ├── personal.js  # Personal info, social links, about
│   │   ├── skills.js    # Your skills and proficiency
│   │   └── projects.js  # Your projects portfolio
│   ├── hooks/          # Custom React hooks
│   │   └── useDarkMode.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization Guide

### 1. Personal Information

Edit `src/data/personal.js`:

```javascript
export const personalInfo = {
  name: "Your Name",              // Change to your name
  title: "Your Title",            // Your professional title
  tagline: "Your tagline",        // Short description
  email: "your@email.com",        // Your email
  phone: "+1 234 567 890",        // Your phone
  location: "Your City",          // Your location
  
  social: {
    github: "your-github-url",    // Your GitHub profile
    linkedin: "your-linkedin-url", // Your LinkedIn profile
    twitter: "your-twitter-url",   // Your Twitter profile
  },

  about: {
    description: "Your bio...",   // About you description
    highlights: [                 // Your achievements
      "Achievement 1",
      "Achievement 2",
    ],
    image: "your-image-url",      // Your profile image
  },
};
```

### 2. Skills

Edit `src/data/skills.js`:

```javascript
export const skills = [
  {
    category: "Category Name",
    items: [
      { name: "Skill Name", level: 90, icon: "🎨" },
      // Add more skills...
    ]
  },
  // Add more categories...
];
```

### 3. Projects

Edit `src/data/projects.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    image: "project-image-url",
    tech: ["React", "Node.js"],     // Tech stack
    github: "github-repo-url",
    demo: "live-demo-url",
    featured: true,                 // Set to true for featured projects
  },
  // Add more projects...
];
```

### 4. Colors & Theming

Edit `tailwind.config.js` to customize colors:

```javascript
colors: {
  primary: {
    // Your custom color palette
  },
}
```

### 5. Logo/Brand Name

Edit `src/components/Navbar.jsx` - change "YourName" in the logo section.

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📦 Building for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files ready for deployment.

## 🚀 Deployment

You can deploy this portfolio to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Drag and drop the `dist` folder to Netlify
2. Or connect your GitHub repository

### GitHub Pages
```bash
npm run build
# Deploy the dist folder to GitHub Pages
```

## 🎨 Customizing Images

Replace placeholder images with your own:

1. **Profile Image**: Update `personalInfo.about.image` in `src/data/personal.js`
2. **Project Images**: Update `image` field for each project in `src/data/projects.js`

You can use:
- Your own hosted images
- Unsplash URLs
- Local images in the `public` folder

## 🔧 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (1024px and up)
- 🖥️ Large screens (1440px and up)

## 🌟 Key Features Explained

### Dark Mode
- Automatically detects system preference
- Saves user preference in localStorage
- Smooth transition between modes

### Form Validation
- Client-side validation
- Error messages
- Success feedback
- Console logging (ready for backend integration)

### Smooth Scrolling
- Navigation links scroll smoothly to sections
- Offset for fixed navbar

### Animations
- Scroll-triggered animations
- Hover effects
- Loading animations
- Page transitions

## 🤝 Support

If you encounter any issues:

1. Make sure Node.js is installed: `node --version`
2. Delete `node_modules` and run `npm install` again
3. Clear browser cache
4. Check browser console for errors

## 📄 License

This project is free to use for personal and commercial purposes.

## 🙏 Credits

- Icons by [Lucide Icons](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Images from [Unsplash](https://unsplash.com/)

---

Made with ❤️ using React and Tailwind CSS
