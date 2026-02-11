// Image data - only files that work on GitHub Pages (without special characters)
const images = [
    { src: 'images/image00002_compressed.jpg', alt: 'Portfolio 1', category: 'portrait' },
    { src: 'images/image00005_compressed.jpg', alt: 'Portfolio 2', category: 'portrait' },
    { src: 'images/image00013_compressed.jpg', alt: 'Portfolio 3', category: 'portrait' },
    { src: 'images/image00014_compressed.jpg', alt: 'Portfolio 4', category: 'portrait' },
    { src: 'images/image00017_compressed.jpg', alt: 'Portfolio 5', category: 'fashion' },
    { src: 'images/image00024_compressed.jpg', alt: 'Portfolio 6', category: 'fashion' },
    { src: 'images/image00025_compressed.jpg', alt: 'Portfolio 7', category: 'portrait' },
    { src: 'images/image00030_compressed.jpg', alt: 'Portfolio 8', category: 'fashion' },
    { src: 'images/image00032_compressed.jpg', alt: 'Portfolio 9', category: 'fashion' },
    { src: 'images/image00033_compressed.jpg', alt: 'Portfolio 10', category: 'portrait' },
    { src: 'images/image00036_compressed.jpg', alt: 'Portfolio 11', category: 'portrait' },
    { src: 'images/image00038_compressed.jpg', alt: 'Portfolio 12', category: 'fashion' },
    { src: 'images/image00040_compressed.jpg', alt: 'Portfolio 13', category: 'portrait' },
    { src: 'images/image00043_compressed.jpg', alt: 'Portfolio 14', category: 'portrait' },
    { src: 'images/image00044_compressed.jpg', alt: 'Portfolio 15', category: 'fashion' },
    { src: 'images/image00048_compressed.jpg', alt: 'Portfolio 16', category: 'fashion' },
    { src: 'images/image00049_compressed.jpg', alt: 'Portfolio 17', category: 'portrait' },
    { src: 'images/image00051_compressed.jpg', alt: 'Portfolio 18', category: 'portrait' },
    { src: 'images/IMG-20250701-WA0059_compressed.jpg', alt: 'Editorial 1', category: 'fashion' },
    { src: 'images/IMG-20250702-WA0006_compressed.jpg', alt: 'Editorial 2', category: 'portrait' },
    { src: 'images/IMG-20250702-WA0007_compressed.jpg', alt: 'Editorial 3', category: 'portrait' },
    { src: 'images/IMG-20250702-WA0014_compressed.jpg', alt: 'Editorial 4', category: 'fashion' },
    { src: 'images/IMG-20250714-WA0000_compressed.jpg', alt: 'Editorial 5', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0025_compressed.jpg', alt: 'Studio 1', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0031_compressed.jpg', alt: 'Studio 2', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0098_compressed.jpg', alt: 'Studio 3', category: 'fashion' },
    { src: 'images/IMG-20251007-WA0117_compressed.jpg', alt: 'Studio 4', category: 'fashion' },
    { src: 'images/IMG-20251007-WA0121_compressed.jpg', alt: 'Studio 5', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0138_compressed.jpg', alt: 'Studio 6', category: 'fashion' },
    { src: 'images/IMG-20251007-WA0140_compressed.jpg', alt: 'Studio 7', category: 'portrait' },
    { src: 'images/IMG_20250713_134125_452_compressed.jpg', alt: 'Creative 1', category: 'metro' },
    { src: 'images/IMG_20250713_134127_584_compressed.jpg', alt: 'Creative 2', category: 'metro' },
    { src: 'images/IMG_20250713_134136_473_compressed.jpg', alt: 'Creative 3', category: 'metro' },
    { src: 'images/IMG_20250713_134143_320_compressed.jpg', alt: 'Creative 4', category: 'metro' },
    { src: 'images/IMG_20250921_164837_803_compressed.jpg', alt: 'Lifestyle 1', category: 'metro' },
    { src: 'images/IMG_20250921_164839_422_compressed.jpg', alt: 'Lifestyle 2', category: 'metro' },
    { src: 'images/IMG_20250921_164841_280_compressed.jpg', alt: 'Lifestyle 3', category: 'metro' },
    { src: 'images/IMG_20250921_164853_388_compressed.jpg', alt: 'Lifestyle 4', category: 'metro' },
    { src: 'images/IMG_20251007_100412_572_compressed.jpg', alt: 'Casual 1', category: 'metro' },
    { src: 'images/IMG_20251203_163236_873_compressed.jpg', alt: 'Casual 2', category: 'metro' },
    { src: 'images/IMG_20251221_122526_740_compressed.jpg', alt: 'Winter 1', category: 'fashion' },
    { src: 'images/IMG_20251221_131521_235_compressed.jpg', alt: 'Winter 2', category: 'fashion' },
    { src: 'images/IMG_20251221_131526_778_compressed.jpg', alt: 'Winter 3', category: 'fashion' },
    { src: 'images/IMG_20251221_131541_713_compressed.jpg', alt: 'Winter 4', category: 'portrait' },
    { src: 'images/IMG_20251221_131541_978_compressed.jpg', alt: 'Winter 5', category: 'portrait' },
    { src: 'images/IMG_20251221_131545_721_compressed.jpg', alt: 'Winter 6', category: 'fashion' },
    { src: 'images/IMG_20251221_131546_753_compressed.jpg', alt: 'Winter 7', category: 'fashion' },
    { src: 'images/IMG_20251221_131549_102_compressed.jpg', alt: 'Winter 8', category: 'portrait' },
    { src: 'images/IMG_20251221_131553_863_compressed.jpg', alt: 'Winter 9', category: 'fashion' },
    { src: 'images/IMG_20251221_131559_572_compressed.jpg', alt: 'Winter 10', category: 'portrait' },
    { src: 'images/IMG_20251221_131618_064_compressed.jpg', alt: 'Winter 11', category: 'fashion' },
    { src: 'images/IMG_20251221_131621_077_compressed.jpg', alt: 'Winter 12', category: 'portrait' },
    { src: 'images/METRO_MODELS29463_compressed.jpg', alt: 'Metro 1', category: 'metro' },
    { src: 'images/METRO_MODELS29471_compressed.jpg', alt: 'Metro 2', category: 'metro' },
    { src: 'images/METRO_MODELS29484_compressed.jpg', alt: 'Metro 3', category: 'metro' },
    { src: 'images/METRO_MODELS29496_compressed.jpg', alt: 'Metro 4', category: 'metro' },
    { src: 'images/METRO_MODELS29503_compressed.jpg', alt: 'Metro 5', category: 'metro' },
    { src: 'images/METRO_MODELS29546_compressed.jpg', alt: 'Metro 6', category: 'metro' },
    { src: 'images/Screenshot_2025-04-22-20-47-10-526_com.instagram.android_compressed.jpg', alt: 'Feature 1', category: 'portrait' },
    { src: 'images/Screenshot_2025-05-25-17-52-30-489_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 2', category: 'fashion' },
    { src: 'images/Screenshot_2025-05-25-17-52-40-434_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 3', category: 'portrait' },
    { src: 'images/Screenshot_2025-05-25-18-02-10-214_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 4', category: 'fashion' },
    { src: 'images/Screenshot_2025-05-25-18-02-21-402_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 5', category: 'portrait' },
    { src: 'images/Screenshot_2025-05-25-18-08-03-641_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 6', category: 'fashion' },
    { src: 'images/Screenshot_2025-06-07-15-49-59-263_com.google.android.apps.docs_compressed.jpg', alt: 'Look 1', category: 'fashion' },
    { src: 'images/Screenshot_2025-06-07-15-50-41-903_com.google.android.apps.docs_compressed.jpg', alt: 'Look 2', category: 'portrait' },
    { src: 'images/Screenshot_2025-06-07-15-51-22-833_com.google.android.apps.docs_compressed.jpg', alt: 'Look 3', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-40-13-314_com.instagram.android_compressed.jpg', alt: 'Social 1', category: 'portrait' },
    { src: 'images/Screenshot_2026-02-11-15-41-40-735_com.instagram.android_compressed.jpg', alt: 'Social 2', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-42-09-404_com.instagram.android_compressed.jpg', alt: 'Social 3', category: 'portrait' },
    { src: 'images/Screenshot_2026-02-11-15-42-21-714_com.instagram.android_compressed.jpg', alt: 'Social 4', category: 'metro' },
    { src: 'images/Screenshot_2026-02-11-15-42-56-463_com.instagram.android_compressed.jpg', alt: 'Social 5', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-43-09-925_com.instagram.android_compressed.jpg', alt: 'Social 6', category: 'portrait' },
    { src: 'images/Screenshot_2026-02-11-15-43-29-416_com.instagram.android_compressed.jpg', alt: 'Social 7', category: 'metro' },
    { src: 'images/Screenshot_2026-02-11-15-44-04-627_com.instagram.android_compressed.jpg', alt: 'Social 8', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-48-50-204_com.instagram.android_compressed.jpg', alt: 'Social 9', category: 'portrait' },
    { src: 'images/WhatsApp Image 2026-02-09 at 16.07.25_compressed.jpg', alt: 'Candid 1', category: 'metro' },
    { src: 'images/large-1740438201-dcd3f6a42b8dc063279ee2a3ebb7274f_compressed.jpg', alt: 'Professional 1', category: 'portrait' },
    { src: 'images/large-1740438203-b2b92d3a6f6252d6225cef4dd949194f_compressed.jpg', alt: 'Professional 2', category: 'fashion' },
    { src: 'images/large-1740438204-df9b7d9ea182e1fcc3e6b80713c2916b_compressed.jpg', alt: 'Professional 3', category: 'portrait' },
    { src: 'images/large-1740438205-918387479668b0854f6de761792ce8db_compressed.jpg', alt: 'Professional 4', category: 'fashion' },
    { src: 'images/large-1745326282-662209e3abe3055d32fe4ddad8eeb537_compressed.jpg', alt: 'Pro Shot 1', category: 'portrait' },
    { src: 'images/large-1745326283-da650af965ed979b40c5547e70194f5c_compressed.jpg', alt: 'Pro Shot 2', category: 'fashion' },
    { src: 'images/large-1763055701-ec1ab177f844b1bc743fcbf3c4452900_compressed.jpg', alt: 'Studio Session 1', category: 'fashion' },
    { src: 'images/large-1763055702-520542acd7f7a0d008c0310dace89397_compressed.jpg', alt: 'Studio Session 2', category: 'portrait' },
    { src: 'images/large-1763055702-db8d05633304162446590a68d17efa37_compressed.jpg', alt: 'Studio Session 3', category: 'fashion' },
    { src: 'images/large-1763055704-ea9ee4b0338bc21f28e14b4c4b22259d~2_compressed.jpg', alt: 'Studio Session 4', category: 'portrait' },
];

let currentImageIndex = 0;
let filteredImages = [...images];

// Initialize gallery
document.addEventListener('DOMContentLoaded', function() {
    loadGallery('all');
    setupEventListeners();
});

function loadGallery(filter) {
    const galleryGrid = document.getElementById('gallery-grid');
    galleryGrid.innerHTML = '';

    if (filter === 'all') {
        filteredImages = [...images];
    } else {
        filteredImages = images.filter(img => img.category === filter);
    }

    filteredImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
            <div class="gallery-item-overlay">${image.alt}</div>
        `;
        galleryItem.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(galleryItem);
    });
}

function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadGallery(this.getAttribute('data-filter'));
        });
    });

    // Lightbox controls
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', previousImage);
    nextBtn.addEventListener('click', nextImage);

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') previousImage();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'Escape') closeLightbox();
    });
}

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.querySelector('.lightbox-caption');

    lightboxImg.src = filteredImages[index].src;
    caption.textContent = filteredImages[index].alt;
    lightbox.classList.add('active');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.querySelector('.lightbox-caption');
    lightboxImg.src = filteredImages[currentImageIndex].src;
    caption.textContent = filteredImages[currentImageIndex].alt;
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.querySelector('.lightbox-caption');
    lightboxImg.src = filteredImages[currentImageIndex].src;
    caption.textContent = filteredImages[currentImageIndex].alt;
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
