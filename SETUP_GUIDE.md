# 🚀 Portfolio Setup Guide

## Step-by-Step Setup Instructions

### Step 1: Install Node.js (If not already installed)

1. Go to [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Install it on your computer
4. Verify installation by opening terminal/command prompt and running:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Open Project in VS Code

1. Open Visual Studio Code
2. **Drag and drop** the `modern-portfolio` folder into VS Code
   - OR use File → Open Folder and select `modern-portfolio`

### Step 3: Install Dependencies

1. Open the integrated terminal in VS Code:
   - Menu: Terminal → New Terminal
   - Or press: `Ctrl + ~` (Windows/Linux) or `Cmd + ~` (Mac)

2. Make sure you're in the project directory. You should see `modern-portfolio` in the path.

3. Run the installation command:
   ```bash
   npm install
   ```

4. Wait for all packages to install (this may take 2-5 minutes)

### Step 4: Start Development Server

1. Once installation is complete, run:
   ```bash
   npm run dev
   ```

2. You should see output like:
   ```
   VITE v5.1.0  ready in 500 ms
   
   ➜  Local:   http://localhost:3000/
   ➜  Network: use --host to expose
   ```

3. **Open your browser** and go to: `http://localhost:3000`

### Step 5: Customize Your Portfolio

#### A. Update Personal Information

1. Open `src/data/personal.js`
2. Replace the placeholder information with YOUR details:
   - Name
   - Title/Role
   - Email, Phone, Location
   - Social media links (GitHub, LinkedIn, Twitter)
   - About section description
   - Profile image URL

#### B. Update Your Skills

1. Open `src/data/skills.js`
2. Modify the skills array:
   - Add your actual skills
   - Adjust the proficiency levels (0-100)
   - Change icons (use emoji or leave as is)
   - Add or remove skill categories

#### C. Add Your Projects

1. Open `src/data/projects.js`
2. Replace placeholder projects with YOUR projects:
   - Project title and description
   - Technology stack
   - GitHub repository links
   - Live demo URLs
   - Project images (you can use Unsplash URLs or your own)
   - Mark important projects as `featured: true`

#### D. Customize Colors (Optional)

1. Open `tailwind.config.js`
2. Modify the color palette in the `theme.extend.colors` section

#### E. Update Brand Name

1. Open `src/components/Navbar.jsx`
2. Find the logo section and replace "YourName" with your actual name or brand

### Step 6: Add Your Images

**Option 1: Use External URLs (Easiest)**
- Use Unsplash: `https://images.unsplash.com/photo-xxxxx`
- Use your own hosted images
- Use GitHub raw URLs

**Option 2: Use Local Images**
1. Create a folder: `public/images`
2. Add your images there
3. Reference them as: `/images/your-image.jpg`

### Step 7: Test Your Changes

1. The development server auto-reloads when you save files
2. Check each section:
   - ✅ Hero section shows your name
   - ✅ About section has your info
   - ✅ Skills display correctly
   - ✅ Projects show your work
   - ✅ Contact form works
   - ✅ Social links go to correct profiles

### Step 8: Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with optimized files.

## 🎨 Quick Customization Checklist

- [ ] Changed name in `src/data/personal.js`
- [ ] Updated title/role
- [ ] Added email, phone, location
- [ ] Updated social media links
- [ ] Wrote about section
- [ ] Added profile image
- [ ] Updated skills in `src/data/skills.js`
- [ ] Added real projects in `src/data/projects.js`
- [ ] Updated brand name in Navbar
- [ ] Tested all sections
- [ ] Tested on mobile view (browser dev tools)
- [ ] Tested dark mode toggle

## 🐛 Common Issues & Solutions

### Issue: "npm is not recognized"
**Solution:** Install Node.js from nodejs.org

### Issue: Port 3000 already in use
**Solution:** 
- Close other applications using port 3000
- Or the app will automatically use port 3001

### Issue: Changes not showing
**Solution:**
- Save the file (Ctrl+S / Cmd+S)
- Refresh browser
- Check browser console for errors

### Issue: Images not loading
**Solution:**
- Check image URLs are correct
- Make sure URLs are publicly accessible
- For local images, put them in `public` folder

### Issue: Build fails
**Solution:**
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again
- Run `npm run build` again

## 📱 Testing Responsive Design

In VS Code:
1. Open browser dev tools (F12)
2. Click device toggle toolbar (phone icon)
3. Test different screen sizes:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Free)
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Vercel automatically deploys!

### Option 2: Netlify (Free)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop the `dist` folder
4. Done!

### Option 3: GitHub Pages (Free)
1. Create a GitHub repository
2. Push your code
3. Enable GitHub Pages in settings
4. Deploy the `dist` folder

## 💡 Tips for Success

1. **Start Small**: Update personal info first, then gradually customize
2. **Save Often**: Files auto-reload when you save
3. **Use Browser DevTools**: Check console for errors
4. **Test Thoroughly**: Check every section before deploying
5. **Keep It Simple**: Don't over-customize initially
6. **Backup Your Work**: Use Git to version control

## 🎓 Learning Resources

If you want to customize further:

- **React**: [react.dev](https://react.dev)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion/)

## 📞 Need Help?

If you're stuck:
1. Check the browser console for error messages
2. Make sure all files are saved
3. Try restarting the dev server (Ctrl+C, then `npm run dev`)
4. Check that you're editing the right file

---

**Ready to go?** Follow Step 1 above and start building your amazing portfolio! 🚀
