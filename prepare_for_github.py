#!/usr/bin/env python3
"""
Prepare portfolio for GitHub upload
- Copies compressed images to 'images' folder
- Updates script.js with correct image paths
- Creates a deployable package
"""

import os
import shutil
from pathlib import Path

PORTFOLIO_DIR = Path(__file__).parent
COMPRESSED_DIR = PORTFOLIO_DIR.parent / "compressed_media"
IMAGES_DIR = PORTFOLIO_DIR / "images"

def main():
    print("=" * 60)
    print("PORTFOLIO GITHUB PREPARATION")
    print("=" * 60)

    # Check if compressed_media folder exists
    if not COMPRESSED_DIR.exists():
        print(f"❌ Error: compressed_media folder not found at {COMPRESSED_DIR}")
        print("Make sure you're in the correct directory")
        return

    # Create images folder
    print("\n1. Creating images folder...")
    IMAGES_DIR.mkdir(exist_ok=True)
    print(f"   ✓ Created: {IMAGES_DIR}")

    # Copy images
    print("\n2. Copying compressed images...")
    image_files = list(COMPRESSED_DIR.glob("*.jpg")) + list(COMPRESSED_DIR.glob("*.jpeg")) + list(COMPRESSED_DIR.glob("*.png"))
    image_files = image_files[:100]  # Limit to 100 images to keep repo size reasonable

    copied = 0
    for img in image_files:
        try:
            dest = IMAGES_DIR / img.name
            if not dest.exists():
                shutil.copy2(img, dest)
                copied += 1
        except Exception as e:
            print(f"   ⚠ Error copying {img.name}: {e}")

    print(f"   ✓ Copied {copied} images to 'images' folder")
    print(f"   📁 Total images in folder: {len(list(IMAGES_DIR.glob('*.jpg')))}")

    # Update script.js
    print("\n3. Updating script.js paths...")
    script_path = PORTFOLIO_DIR / "script.js"

    try:
        with open(script_path, 'r') as f:
            content = f.read()

        # Replace relative paths with 'images/' paths
        updated_content = content.replace("'../compressed_media/", "'images/")

        with open(script_path, 'w') as f:
            f.write(updated_content)

        print("   ✓ Updated image paths in script.js")
    except Exception as e:
        print(f"   ⚠ Error updating script.js: {e}")

    # Create .gitignore
    print("\n4. Creating .gitignore...")
    gitignore_path = PORTFOLIO_DIR / ".gitignore"
    gitignore_content = """# OS files
.DS_Store
Thumbs.db
*.swp
*.swo
*~

# Dependencies
node_modules/

# Logs
*.log

# Local files
.env
.vscode/
.idea/
*.pyc
"""
    with open(gitignore_path, 'w') as f:
        f.write(gitignore_content)
    print("   ✓ Created .gitignore")

    # Summary
    print("\n" + "=" * 60)
    print("✅ READY FOR GITHUB!")
    print("=" * 60)
    print("\nNext steps:")
    print("1. Go to github.com and create account")
    print("2. Create new repository: your-username.github.io")
    print("3. Upload all files from this folder to GitHub")
    print("\nFiles to upload:")
    print("   • index.html")
    print("   • styles.css")
    print("   • script.js")
    print("   • README.md")
    print("   • images/ (folder with all pictures)")
    print("   • .gitignore")
    print("\nYour site will be live at:")
    print("   https://your-username.github.io")
    print("=" * 60)

if __name__ == "__main__":
    main()
