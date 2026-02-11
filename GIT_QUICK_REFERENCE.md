# 🔧 Git Quick Reference Guide

Keep this handy while working with your portfolio!

---

## 🚀 Initial Setup (Do Once)

```bash
# Navigate to portfolio folder
cd /home/bianka/Pictures/Porfolio/modeling-portfolio

# Initialize Git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Add professional modeling portfolio"

# Rename branch to main
git branch -M main

# Connect to GitHub (replace your-username twice!)
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push to GitHub (enter Personal Access Token when prompted)
git push -u origin main
```

---

## 📝 Common Workflow (Do Every Update)

### 1️⃣ Edit Files
```bash
# Open file editor
nano index.html
# Make your changes, then save (Ctrl+X → Y → Enter)
```

### 2️⃣ Check Changes
```bash
git status
```

### 3️⃣ Stage Changes
```bash
# Stage everything
git add .

# OR stage specific file
git add index.html
```

### 4️⃣ Commit
```bash
git commit -m "Describe what you changed"
```

### 5️⃣ Push to GitHub
```bash
git push origin main
```

✨ **Done! Your changes are live in 1-2 minutes!**

---

## 📂 File Operations

### Add New Files
```bash
# Add specific file
git add newfile.html

# Add all new files
git add .
```

### Add New Images
```bash
# Copy images to images/ folder first, then:
git add images/
git commit -m "Add new portfolio images"
git push origin main
```

### Delete File (from Git)
```bash
# Remove from tracking
git rm filename.html

# Commit the deletion
git commit -m "Remove filename.html"
git push origin main
```

### Rename/Move File
```bash
# Git way to rename
git mv old_name.html new_name.html
git commit -m "Rename file"
git push origin main
```

---

## 🔍 View & Check

### See Current Status
```bash
git status
```

### See Recent Commits
```bash
git log
```

### See Specific Commit Details
```bash
git log -1  # Last 1 commit
git log -5  # Last 5 commits
```

### See What Changed in Files
```bash
git diff
```

### See Changes in Staged Files
```bash
git diff --staged
```

---

## ⏮️ Undo Changes

### Undo Changes (Before Committing)
```bash
# Discard changes in specific file
git checkout -- index.html

# Discard all changes
git checkout -- .
```

### Undo Last Commit (Before Pushing)
```bash
# Keep changes, just undo the commit
git reset --soft HEAD~1

# Then recommit
git commit -m "Fixed message"
```

### Undo Last Commit (Already Pushed)
```bash
# Create a new commit that undoes the last one
git revert HEAD
git push origin main
```

---

## 📤 Push & Pull

### Push Your Changes
```bash
git push origin main
```

### Check Remote Status
```bash
git remote -v
```

### Pull Latest Changes
```bash
git pull origin main
```

---

## 🎯 Useful Commands

### See Commit History (Pretty Format)
```bash
git log --oneline
```

### See All Branches
```bash
git branch -a
```

### Create New Branch (Advanced)
```bash
git branch new-branch-name
git checkout new-branch-name
```

### Switch Between Branches
```bash
git checkout branch-name
```

### Merge Branch Back to Main
```bash
git checkout main
git merge branch-name
git push origin main
```

---

## 🆘 Common Issues & Solutions

### Git says "Permission denied" on push
**Solution:** You used your password. Use Personal Access Token instead!

### Git says "fatal: not a git repository"
**Solution:** Navigate to portfolio folder first:
```bash
cd /home/bianka/Pictures/Porfolio/modeling-portfolio
```

### Git says "fatal: remote origin already exists"
**Solution:** You don't need to add remote again. Just push:
```bash
git push -u origin main
```

### Want to Fix Last Commit Message
```bash
git commit --amend -m "New message"
git push origin main --force-with-lease
```

### Accidentally Committed Wrong File
```bash
git reset --soft HEAD~1
git reset index.html
git add other_files.html
git commit -m "Correct files"
git push origin main
```

---

## 💾 Configuration

### Check Your Git Config
```bash
git config --global user.name
git config --global user.email
```

### Change Your Git Config
```bash
git config --global user.name "New Name"
git config --global user.email "new-email@example.com"
```

### See All Config Settings
```bash
git config --global --list
```

---

## 🔐 Personal Access Token

### Where to Get It:
1. GitHub → Profile icon → Settings
2. Developer settings → Personal access tokens → Tokens (classic)
3. Generate new token → Check `repo` → Generate
4. Copy token

### How to Use It:
- When Git asks for password during `git push`, paste the token
- The token appears to be just hanging in the terminal - that's normal!

### Store Token Safely:
- Don't share it!
- Don't commit it to Git!
- Keep it in a safe place

---

## 📝 Commit Message Tips

Good commit messages describe WHAT and WHY:

✅ **Good:**
```
git commit -m "Add social media links to contact section"
git commit -m "Update email address in footer"
git commit -m "Compress and add 20 new portfolio images"
```

❌ **Bad:**
```
git commit -m "Update"
git commit -m "Fix"
git commit -m "Changes"
```

---

## 🎯 Your Typical Day

```bash
# 1. Navigate to folder
cd /home/bianka/Pictures/Porfolio/modeling-portfolio

# 2. Edit files
nano index.html
# ...make changes...

# 3. Check status
git status

# 4. Stage changes
git add .

# 5. Commit
git commit -m "Updated bio section"

# 6. Push to GitHub
git push origin main

# 7. Check your site in browser
# https://your-username.github.io
```

Done in 30 seconds! ⚡

---

## 📚 Learn More

- **Git Docs**: https://git-scm.com/doc
- **GitHub Guides**: https://guides.github.com
- **GitHub Pages**: https://docs.github.com/pages
- **Git Tutorial**: https://www.atlassian.com/git/tutorials

---

## 🎉 Remember

- **git add** = Stage changes
- **git commit** = Save with message
- **git push** = Upload to GitHub
- **git pull** = Download from GitHub
- **git status** = Check what's going on

Master these 5 commands and you're a Git pro! 🚀

---

*Bookmark this page for quick reference while updating your portfolio!*
