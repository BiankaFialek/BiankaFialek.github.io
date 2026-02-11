#!/usr/bin/env python3
"""
Compress images from original_media and fix filenames (remove spaces and special characters)
"""

import os
import re
import shutil
from pathlib import Path
from PIL import Image
import unicodedata

# Configuration
ORIGINAL_FOLDER = Path("/home/bianka/Pictures/Porfolio/original_media")
PORTFOLIO_IMAGES = Path("/home/bianka/Pictures/Porfolio/modeling-portfolio/images")
MAX_WIDTH = 1200
MAX_HEIGHT = 1200
QUALITY = 75

def sanitize_filename(filename):
    """Remove spaces, special characters, and normalize unicode"""
    # Remove file extension
    name, ext = os.path.splitext(filename)

    # Normalize unicode (convert special characters to ASCII equivalents)
    name = unicodedata.normalize('NFKD', name)
    name = name.encode('ASCII', 'ignore').decode('ASCII')

    # Replace spaces and special characters with underscores
    name = re.sub(r'[^\w\-.]', '_', name)

    # Remove multiple underscores
    name = re.sub(r'_+', '_', name)

    # Remove leading/trailing underscores
    name = name.strip('_')

    return f"{name}{ext}"

def compress_image(input_path, output_path):
    """Compress a single image"""
    try:
        img = Image.open(input_path)

        # Convert RGBA to RGB if necessary
        if img.mode in ('RGBA', 'LA', 'P'):
            rgb_img = Image.new('RGB', img.size, (255, 255, 255))
            rgb_img.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = rgb_img

        # Calculate new size maintaining aspect ratio
        img.thumbnail((MAX_WIDTH, MAX_HEIGHT), Image.Resampling.LANCZOS)

        # Save with compression
        img.save(output_path, 'JPEG', quality=QUALITY, optimize=True)
        return True
    except Exception as e:
        print(f"  ⚠ Error compressing {input_path.name}: {e}")
        return False

def main():
    print("=" * 70)
    print("COMPRESS IMAGES WITH CLEAN FILENAMES")
    print("=" * 70)

    # Create output folder
    PORTFOLIO_IMAGES.mkdir(exist_ok=True)
    print(f"✓ Output folder: {PORTFOLIO_IMAGES}")

    # Get all images from original_media
    image_files = []
    for ext in ['.jpg', '.jpeg', '.png', '.tiff']:
        image_files.extend(ORIGINAL_FOLDER.glob(f'*{ext}'))
        image_files.extend(ORIGINAL_FOLDER.glob(f'*{ext.upper()}'))

    print(f"✓ Found {len(image_files)} images in original_media")

    # Process each image
    compressed_count = 0
    renamed_count = 0

    print("\nCompressing and renaming images...")

    for input_file in sorted(image_files):
        # Sanitize filename
        clean_name = sanitize_filename(input_file.name)

        # Add _compressed suffix if not already there
        if '_compressed' not in clean_name:
            name, ext = os.path.splitext(clean_name)
            clean_name = f"{name}_compressed{ext}"

        output_path = PORTFOLIO_IMAGES / clean_name

        # Skip if already exists
        if output_path.exists():
            print(f"⊘ Skipping {clean_name} (already exists)")
            continue

        # Compress
        print(f"  Processing: {input_file.name}")
        print(f"         → {clean_name}", end=' ')

        if compress_image(input_file, output_path):
            original_size = input_file.stat().st_size / (1024 * 1024)
            compressed_size = output_path.stat().st_size / (1024 * 1024)
            ratio = (1 - compressed_size / original_size) * 100
            print(f"✓ ({original_size:.1f}MB → {compressed_size:.1f}MB, {ratio:.0f}% reduction)")
            compressed_count += 1
            if input_file.name != clean_name:
                renamed_count += 1
        else:
            output_path.unlink(missing_ok=True)
            print("✗ Failed")

    # Summary
    print("\n" + "=" * 70)
    print("Summary:")
    print(f"  ✓ Compressed: {compressed_count} images")
    print(f"  ✓ Renamed: {renamed_count} files (removed special characters)")
    print(f"  📁 Output folder: {PORTFOLIO_IMAGES}")
    print(f"  💾 Total size: {sum(f.stat().st_size for f in PORTFOLIO_IMAGES.glob('*')) / (1024*1024):.1f} MB")
    print("=" * 70)
    print("✅ Done! All images ready for GitHub Pages")

if __name__ == "__main__":
    main()
