# Bianka - Professional Modeling Portfolio

A responsive, modern portfolio website showcasing professional modeling photography.

## Features

- 📸 Responsive gallery with image filtering (Fashion, Portrait, Lifestyle)
- 🖼️ Lightbox image viewer with keyboard navigation
- 📱 Mobile-friendly design
- ✨ Smooth animations and transitions
- 🎯 Professional layout suitable for modeling portfolios

## Quick Start

### To view locally:
1. Open `index.html` in your web browser
2. Click on images to open in lightbox
3. Use arrow keys or buttons to navigate
4. Press ESC to close lightbox

## Setup on GitHub Pages (Step by Step)

### Step 1: Create a GitHub Account
1. Go to https://github.com
2. Click "Sign up"
3. Enter your email address
4. Create a password
5. Choose a username (e.g., `your-username`)
6. Click "Create account"
7. Verify your email address

### Step 2: Create a New Repository
1. Log in to GitHub
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `your-username.github.io` (replace your-username with your GitHub username)
   - **Important**: The name MUST be exactly this format
4. Add description: "Professional Modeling Portfolio"
5. Choose "Public"
6. Check "Add a README file"
7. Click "Create repository"

### Step 3: Upload Files to GitHub

**Option A: Using Git Command Line (Recommended)**

1. Install Git from https://git-scm.com/download
2. Open terminal/command prompt
3. Navigate to this folder:
   ```bash
   cd "/home/bianka/Pictures/Porfolio/modeling-portfolio"
   ```

4. Initialize git and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Add modeling portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git push -u origin main
   ```

**Option B: Using GitHub Web Interface**

1. Go to your new repository on GitHub
2. Click "Add file" → "Upload files"
3. Drag and drop all files from `modeling-portfolio` folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
4. Add commit message: "Add portfolio files"
5. Click "Commit changes"

### Step 4: Update Image Paths

**Important**: The images won't load automatically. You need to either:

**Option 1: Use absolute image URLs**
- Upload compressed images to a cloud service (Imgur, Cloudinary, etc.)
- Update image paths in `script.js`

**Option 2: Use GitHub to store images**
1. In your repository, create a folder called `images`
2. Upload all compressed images there
3. Update `script.js` image paths to:
   ```javascript
   { src: 'images/DSC03036_compressed.jpg', alt: '...', category: '...' }
   ```

### Step 5: Verify Your Site

Your portfolio will be live at:
```
https://your-username.github.io
```

(Replace `your-username` with your actual GitHub username)

Wait about 1-2 minutes for GitHub to build and deploy.

## Customization

### Update Contact Information
Edit `index.html` and find the Contact section:
```html
<a href="mailto:your-email@example.com" class="cta-button">Send Email</a>
```
Replace `your-email@example.com` with your email

### Add Social Media Links
Find the social links section and update:
```html
<a href="https://instagram.com/your-handle" target="_blank">Instagram</a>
```

### Change Colors
Edit `styles.css` and modify the color variables:
```css
:root {
    --primary-color: #1a1a1a;      /* Dark background */
    --secondary-color: #d4af37;    /* Gold accent */
    --text-color: #333;
    --light-bg: #f5f5f5;
}
```

### Add/Remove Images
Edit `script.js` and modify the `images` array:
```javascript
const images = [
    { src: 'path/to/image.jpg', alt: 'Description', category: 'portrait' },
    // Add more images...
];
```

## Image Categories
- `portrait` - Portrait and headshots
- `fashion` - Fashion photography
- `metro` - Lifestyle and urban photography

## Browser Support
- Chrome/Chromium
- Firefox
- Safari
- Edge
- Mobile browsers

## Tips for Success

1. **Update your email** - Change the contact email so people can reach you
2. **Add more images** - The more portfolio pieces, the better
3. **Organize by category** - Properly categorize photos for filtering
4. **Update social links** - Link to your Instagram and other social media
5. **Keep it updated** - Add new portfolio pieces regularly

## Need Help?

- GitHub Docs: https://docs.github.com/en/pages
- Git Tutorial: https://git-scm.com/doc
- HTML/CSS Help: https://developer.mozilla.org/en-US/

---

**Created**: 2026
**Portfolio Version**: 1.0
