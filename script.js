// Image data - organized by category
const images = [
    { src: 'images/DSC03036_compressed.jpg', alt: 'Professional Shot 1', category: 'portrait' },
    { src: 'images/DSC03037_compressed.jpg', alt: 'Professional Shot 2', category: 'portrait' },
    { src: 'images/DSC03042_compressed.jpg', alt: 'Professional Shot 3', category: 'portrait' },
    { src: 'images/DSC03043_compressed.jpg', alt: 'Professional Shot 4', category: 'portrait' },
    { src: 'images/DSC03050_compressed.jpg', alt: 'Studio Look 1', category: 'fashion' },
    { src: 'images/DSC03051_compressed.jpg', alt: 'Studio Look 2', category: 'fashion' },
    { src: 'images/DSCF5951 копія_compressed.jpg', alt: 'Fashion Portfolio 1', category: 'fashion' },
    { src: 'images/DSCF5998 копія_compressed.jpg', alt: 'Fashion Portfolio 2', category: 'fashion' },
    { src: 'images/Portrait Collab Shoot 15.11.2025-001.jpg', alt: 'Collaboration 1', category: 'portrait' },
    { src: 'images/Portrait Collab Shoot 15.11.2025-005.jpg', alt: 'Collaboration 2', category: 'portrait' },
    { src: 'images/Portrait Collab Shoot 15.11.2025-015.jpg', alt: 'Collaboration 3', category: 'portrait' },
    { src: 'images/Portrait Collab Shoot 15.11.2025-020.jpg', alt: 'Collaboration 4', category: 'portrait' },
    { src: 'images/METRO_MODELS29484.jpg', alt: 'Lifestyle 1', category: 'metro' },
    { src: 'images/METRO_MODELS29487.jpg', alt: 'Lifestyle 2', category: 'metro' },
    { src: 'images/METRO_MODELS29496.jpg', alt: 'Lifestyle 3', category: 'metro' },
    { src: 'images/Foto 15.11.25, 15 22 26_compressed.jpg', alt: 'Studio Session', category: 'fashion' },
    { src: 'images/IMG-20251007-WA0022.jpg', alt: 'Editorial 1', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0025.jpg', alt: 'Editorial 2', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0031.jpg', alt: 'Editorial 3', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0032.jpg', alt: 'Editorial 4', category: 'portrait' },
    { src: 'images/IMG_20251203_163231_398_compressed.jpg', alt: 'Casual Look 1', category: 'metro' },
    { src: 'images/IMG_20251221_122508_002_compressed.jpg', alt: 'Winter Look 1', category: 'fashion' },
    { src: 'images/IMG_20251221_122514_635_compressed.jpg', alt: 'Winter Look 2', category: 'fashion' },
    { src: 'images/large-1745326282-662209e3abe3055d32fe4ddad8eeb537_compressed.jpg', alt: 'Professional 1', category: 'portrait' },
    { src: 'images/large-1745326283-da650af965ed979b40c5547e70194f5c_compressed.jpg', alt: 'Professional 2', category: 'portrait' },
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
