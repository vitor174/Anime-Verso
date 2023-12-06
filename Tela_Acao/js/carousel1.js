
const carousel = document.getElementById('carousel');
const indicatorContainer = document.getElementById('indicators');
let currentIndex = 0;
let autoplayInterval;

function showSlide(index) {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
    updateIndicators();
}

function changeSlide(direction) {
    currentIndex += direction;
    showSlide(currentIndex);
    resetAutoplay();
}

function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);
}

function updateIndicators() {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    indicatorContainer.innerHTML = '';

    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        indicator.addEventListener('click', () => showSlide(i));
        if (i === currentIndex) {
            indicator.classList.add('active');
        }
        indicatorContainer.appendChild(indicator);
    }
}

// Autoplay
resetAutoplay();