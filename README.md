# Vue.js Course Platform

A lightweight and responsive Vue.js + Tailwind CSS application for managing course materials, lectures, and quizzes.

## Features
- Built with Vue.js and Tailwind CSS for a modern UI
- Vue Router for seamless navigation between pages
- Dynamic course pages for lectures and quizzes
- Fully responsive design for desktop and mobile

---

## Challenges Faced During Development

Building this project came with a few key challenges that needed careful handling:

### **1. Routing & Navigation**
Setting up Vue Router for seamless page transitions while ensuring the correct routes were activated, especially within nested views.

### **2. Styling & UI Consistency**
Tailwind CSS provided a solid foundation, but minor conflicts arose due to class overrides. Careful adjustments were made to maintain a clean, responsive design.

### **4. Dependency & Version Conflicts**
The project initially ran into compatibility issues with different Node.js versions. Updating and managing dependencies while maintaining stability was a necessary step.

### **Final Thoughts**
The project successfully overcame these hurdles, resulting in a clean, scalable structure ready for further expansion.

---

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/RobOHt/app-framework.git
cd app-framework
```

### 2. Install Dependencies
Ensure Node.js (v16 or higher) is installed, then run:
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173/`.

---

## Deployment

### Deploy to Netlify
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Deploy to Vercel
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy:
   ```bash
   vercel
   ```

### Deploy to GitHub Pages
1. Install GitHub Pages package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add these scripts to `package.json`:
   ```json
   "scripts": {
     "build": "vite build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy:
   ```bash
   npm run build
   npm run deploy
   ```

---

## Troubleshooting

### Missing Dependencies
If you encounter errors related to missing dependencies, try running:
```bash
npm install
```

### Port Already in Use
If `npm run dev` fails due to a port conflict, specify a different port:
```bash
npm run dev -- --port=3000
```

### Build Issues
If the build fails, clear cached dependencies and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
