# 🚀 Deploy with Git Commands - Step by Step

Your professional modeling portfolio is ready! Here's exactly how to launch it online using Git commands.

---

## ✅ Step 1: Install Git (5 minutes)

### On Linux (Ubuntu/Debian):
```bash
sudo apt-get update
sudo apt-get install git
```

### On macOS:
```bash
# Via Homebrew
brew install git

# Or download from: https://git-scm.com/download/mac
```

### On Windows:
Download and install from: **https://git-scm.com/download/windows**

### Verify Installation:
```bash
git --version
```

✨ **Git is installed!**

---

## ✅ Step 2: Configure Git (2 minutes)

Set your name and email (required for commits):

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Replace with your actual name and email.

Verify it worked:
```bash
git config --global user.name
git config --global user.email
```

✨ **Git is configured!**

---

## ✅ Step 3: Create GitHub Account (2 minutes)

1. Go to **https://github.com**
2. Click **"Sign up"**
3. Enter your **email address**
4. Create a **password**
5. Choose a **username** (e.g., `bianka-photography`)
   - This will be part of your website URL!
6. Click **"Create account"**
7. Complete the email verification

✨ **You now have a GitHub account!**

---

## ✅ Step 4: Create Your Repository (2 minutes)

1. Log in to GitHub
2. Click the **"+"** icon (top right)
3. Select **"New repository"**
4. **Repository name** (IMPORTANT):
   ```
   your-username.github.io
   ```
   Replace `your-username` with YOUR GitHub username

   *Example: `bianka-photography.github.io`*

5. Description: `Professional Modeling Portfolio`
6. Select **"Public"**
7. **DO NOT** check "Add a README file" (we'll push our own)
8. Click **"Create repository"**

✨ **Your repository is created!**

---

## ✅ Step 5: Set Up Git Authentication (3 minutes)

GitHub now requires authentication via token or SSH. Here's the easiest way:

### Create a Personal Access Token:

1. Go to GitHub → Click your **profile icon** (top right)
2. Select **"Settings"**
3. Click **"Developer settings"** (left sidebar, bottom)
4. Click **"Personal access tokens"** → **"Tokens (classic)"**
5. Click **"Generate new token"** (classic)
6. Set:
   - **Note**: `git-push-token`
   - **Expiration**: 90 days (or more)
   - **Scopes**: Check ✓ `repo` (all sub-items)
7. Click **"Generate token"**
8. **COPY the token** (you won't see it again!)
9. Save it somewhere safe

✨ **Token created!**

---

## ✅ Step 6: Navigate to Portfolio Folder (1 minute)

Open terminal and go to your portfolio:

```bash
cd /home/bianka/Pictures/Porfolio/modeling-portfolio
```

Verify files are there:
```bash
ls -la
```

You should see:
- `index.html`
- `styles.css`
- `script.js`
- `images/` folder
- `README.md`

✨ **You're in the right folder!**

---

## ✅ Step 7: Initialize Git & Push (5 minutes)

### 1. Initialize Git Repository:
```bash
git init
```

### 2. Add All Files:
```bash
git add .
```

Verify files are staged:
```bash
git status
```

You should see all files listed in green.

### 3. Create First Commit:
```bash
git commit -m "Initial commit: Add professional modeling portfolio"
```

### 4. Set Main Branch:
```bash
git branch -M main
```

### 5. Add Remote Repository:
```bash
git remote add origin https://github.com/your-username/your-username.github.io.git
```

Replace `your-username` with YOUR actual GitHub username (2 times)

Example:
```bash
git remote add origin https://github.com/bianka-photography/bianka-photography.github.io.git
```

### 6. Push to GitHub:
```bash
git push -u origin main
```

When prompted for password, **paste your Personal Access Token** (not your password!)

You should see:
```
Counting objects...
Delta compression using up to X threads...
Compressing objects...
Writing objects...
...
remote: Create a pull request for 'main' on GitHub by visiting:
...
To https://github.com/your-username/your-username.github.io.git
 * [new branch]      main -> main
```

✨ **Files pushed to GitHub!**

---

## ✅ Step 8: Your Site is LIVE! 🎉

Your modeling portfolio is now live at:

```
https://your-username.github.io
```

**Example:** If your username is `bianka-photography`:
```
https://bianka-photography.github.io
```

**Wait 1-2 minutes** for GitHub to build and deploy.

Then open the URL and you'll see your portfolio!

---

## 📝 Common Git Commands Reference

### View Status:
```bash
git status
```

### Add Specific File:
```bash
git add filename.html
```

### Add All Changes:
```bash
git add .
```

### Commit Changes:
```bash
git commit -m "Your message describing changes"
```

### Push to GitHub:
```bash
git push origin main
```

### View Commit History:
```bash
git log
```

### Undo Last Commit (before push):
```bash
git reset --soft HEAD~1
```

---

## 🎨 Update Your Portfolio (Make Changes)

### Update Email:

1. Edit `index.html`:
```bash
nano index.html
```

2. Find: `mailto:your-email@example.com`
3. Replace with your email
4. Save (Ctrl+X → Y → Enter)

5. Stage and commit:
```bash
git add index.html
git commit -m "Update contact email"
git push origin main
```

### Add Social Media Links:

1. Edit `index.html`:
```bash
nano index.html
```

2. Find social links section
3. Update URLs with yours
4. Save

5. Commit and push:
```bash
git add index.html
git commit -m "Add social media links"
git push origin main
```

### Add More Images:

1. Copy new compressed images to `images/` folder
2. Edit `script.js` to add them to gallery array
3. Commit:
```bash
git add images/
git add script.js
git commit -m "Add new portfolio images"
git push origin main
```

Changes go live instantly!

---

## 🔄 Typical Git Workflow (After Setup)

Every time you want to update your portfolio:

```bash
# Make changes to files
nano index.html

# Check what changed
git status

# Stage changes
git add .

# Commit with message
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

That's it! Changes are live!

---

## 🐛 Troubleshooting

### "fatal: not a git repository"
- Make sure you're in the portfolio folder:
```bash
cd /home/bianka/Pictures/Porfolio/modeling-portfolio
```

### "fatal: remote origin already exists"
- You already initialized. Skip the `git remote add` step.

### "Permission denied" when pushing
- Check your Personal Access Token (not your password!)
- Make sure you copied it correctly (no extra spaces)

### Changes not showing on website
- Run: `git push origin main` (make sure it says "done")
- Wait 1-2 minutes for GitHub to rebuild
- Refresh website (Ctrl+F5 to clear cache)

### "fatal: origin does not appear to be a git repository"
- Your remote URL is wrong. Fix it:
```bash
git remote remove origin
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

---

## 📊 What You Have

✅ Professional responsive design
✅ Image gallery with filtering
✅ Lightbox viewer
✅ Mobile-friendly
✅ Free hosting on GitHub Pages
✅ 100+ high-quality compressed images
✅ Git version control
✅ Easy to update anytime

---

## 🚀 Summary

**Using Git is better because:**
- ✓ Version control (track all changes)
- ✓ Easy to update (1 command: `git push`)
- ✓ Revert changes if needed
- ✓ Professional workflow
- ✓ Works from terminal/command line

**Your deployment process:**
1. ✓ Install Git
2. ✓ Configure Git
3. ✓ Create GitHub account
4. ✓ Create repository
5. ✓ Create Personal Access Token
6. ✓ Initialize & push portfolio

**Then whenever you update:**
- Make changes
- `git add .`
- `git commit -m "message"`
- `git push origin main`
- Done! ✨

---

## 🎉 You're Ready!

Your portfolio is live and version-controlled!

Share your site URL with photographers, agencies, and clients.

**Congratulations on your professional online portfolio!** 🚀

---

*Questions? Check README.md or visit: https://docs.github.com/en/get-started*
