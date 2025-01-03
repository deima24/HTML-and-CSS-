const gallery = document.querySelector(".galery_box");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector(".close");
const prevBtn = lightbox.querySelector(".prev");
const nextBtn = lightbox.querySelector(".next");

let currentIndex = 0;
const images = Array.from(gallery.querySelectorAll("img"));

// open lightbox
gallery.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG" && e.target.dataset.index !== undefined) {
        currentIndex = parseInt(e.target.dataset.index, 10);
        updateLightbox();
        lightbox.style.display = "flex";
    }
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
});

function updateLightbox() {
    const imgSrc = images[currentIndex].src;
    lightboxImage.src = imgSrc;
    lightboxImage.alt = images[currentIndex].alt;
}

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

