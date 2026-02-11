# 💻 Copy-Paste Terminal Commands

Follow these steps exactly. Copy and paste each command.

---

## ✅ Step 1: Install Git

### Linux (Ubuntu/Debian):
```bash
sudo apt-get update && sudo apt-get install git -y
```

### macOS:
If you don't have Homebrew:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then install Git:
```bash
brew install git
```

### Windows:
Download from: https://git-scm.com/download/windows

Then run the installer.

---

## ✅ Step 2: Verify Git Installation

Run this to confirm Git is installed:

```bash
git --version
```

You should see something like: `git version 2.x.x`

---

## ✅ Step 3: Configure Git

**Replace with YOUR name and email:**

```bash
git config --global user.name "Your Real Name"
git config --global user.email "your-email@example.com"
```

Example:
```bash
git config --global user.name "Bianka"
git config --global user.email "bianka@example.com"
```

Verify it worked:
```bash
git config --list
```

---

## ✅ Step 4: Create GitHub Account

1. Go to https://github.com
2. Click "Sign up"
3. Follow the prompts
4. **Write down your username!** (You'll need it soon)

Example username: `bianka-photography`

---

## ✅ Step 5: Create Personal Access Token

**Follow these steps EXACTLY:**

1. Log in to GitHub
2. Click your profile icon (top right)
3. Click "Settings"
4. On left side, scroll down to "Developer settings"
5. Click "Personal access tokens"
6. Click "Tokens (classic)"
7. Click "Generate new token" (classic button)
8. In "Note" field, type: `portfolio-push-token`
9. In "Expiration" dropdown, select: `90 days`
10. Check the box next to `repo` (all sub-items will auto-check)
11. Scroll down and click "Generate token"
12. **COPY the token immediately** (you won't see it again!)
13. Paste it into a text file and save it

**Your token looks like:** `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

## ✅ Step 6: Create GitHub Repository

1. Log in to GitHub
2. Click **"+"** (top right)
3. Click **"New repository"**
4. In "Repository name" field, type:
   ```
   your-username.github.io
   ```
   **Replace `your-username` with your actual GitHub username!**

   Example: `bianka-photography.github.io`

5. In "Description" field, type:
   ```
   Professional Modeling Portfolio
   ```

6. Select "Public"
7. **DO NOT check "Add a README file"**
8. Click "Create repository"

---

## ✅ Step 7: Deploy Using Git

**Now for the terminal commands. Copy & paste each one:**

### Navigate to Portfolio Folder:
```bash
cd /home/bianka/Pictures/Porfolio/modeling-portfolio
```

### Initialize Git:
```bash
git init
```

### Add All Files:
```bash
git add .
```

### Check Status (should show files in green):
```bash
git status
```

### Create Commit:
```bash
git commit -m "Initial commit: Add professional modeling portfolio"
```

### Set Branch to Main:
```bash
git branch -M main
```

### Connect to GitHub (IMPORTANT - Replace username twice!):

**Copy this and replace BOTH instances of `your-username`:**

```bash
git remote add origin https://github.com/your-username/your-username.github.io.git
```

**Example:**
```bash
git remote add origin https://github.com/bianka-photography/bianka-photography.github.io.git
```

### Push to GitHub:
```bash
git push -u origin main
```

**When asked for password, paste your Personal Access Token (not your password!)**

The token will appear empty in the terminal (for security) - that's normal. Just paste and press Enter.

---

## ✅ Step 8: Check Your Live Site

Open your browser and go to:

```
https://your-username.github.io
```

**Example:**
```
https://bianka-photography.github.io
```

Wait 1-2 minutes for GitHub to deploy, then refresh the page.

**You should see your portfolio!** 🎉

---

## 📝 Update Your Portfolio (After Initial Setup)

Every time you want to make changes:

### Edit a File:
```bash
nano index.html
```

Edit, then save with: **Ctrl+X** → **Y** → **Enter**

### Check What Changed:
```bash
git status
```

### Stage Changes:
```bash
git add .
```

### Commit:
```bash
git commit -m "Your message describing changes"
```

Example messages:
```bash
git commit -m "Update contact email"
git commit -m "Add social media links"
git commit -m "Add new portfolio images"
```

### Push to GitHub:
```bash
git push origin main
```

✨ **Done! Changes are live in 1-2 minutes!**

---

## 🎯 Quick Reference (Copy-Paste)

### First Time Setup:
```bash
cd /home/bianka/Pictures/Porfolio/modeling-portfolio
git init
git add .
git commit -m "Initial commit: Add professional modeling portfolio"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

### Every Update After:
```bash
cd /home/bianka/Pictures/Porfolio/modeling-portfolio
git add .
git commit -m "Your message"
git push origin main
```

---

## 🆘 Troubleshooting Commands

### Check Git Status:
```bash
git status
```

### See Commit History:
```bash
git log
```

### See Last 5 Commits:
```bash
git log -5 --oneline
```

### See What Changed:
```bash
git diff
```

### Undo Last Commit (Before Push):
```bash
git reset --soft HEAD~1
```

### Fix Remote URL:
```bash
git remote remove origin
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

---

## 🔐 Security Reminders

✅ **DO:**
- Use Personal Access Token for authentication
- Keep your token secret
- Use `git push` to update (not manual upload)

❌ **DON'T:**
- Share your Personal Access Token
- Commit your token to Git
- Use your GitHub password in terminal

---

## 📊 Common Commands Reference

| Command | What It Does |
|---------|------------|
| `git init` | Create new Git repo |
| `git add .` | Stage all changes |
| `git commit -m "msg"` | Save changes with message |
| `git push origin main` | Upload to GitHub |
| `git status` | Check current status |
| `git log` | See commit history |
| `git diff` | See what changed |
| `git pull origin main` | Download latest from GitHub |

---

## ✨ That's It!

You're all set to manage your portfolio with Git!

**Main workflow:**
1. Edit files
2. `git add .`
3. `git commit -m "description"`
4. `git push origin main`
5. Check your live site

---

## 📞 Need Help?

Run these commands to debug:

```bash
# Check Git version
git --version

# Check your config
git config --list

# Check repository status
git status

# Check remote
git remote -v
```

---

*Ready? Start with Step 1 and work your way down! Copy & paste each command.* 🚀
