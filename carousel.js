document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.carousel-slide');
  const indicators = document.querySelectorAll('.carousel-indicators .indicator');
  const leftArrow = document.querySelector('.carousel-arrow.left');
  const rightArrow = document.querySelector('.carousel-arrow.right');
  let current = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
    indicators.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
    current = idx;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  rightArrow.addEventListener('click', nextSlide);
  leftArrow.addEventListener('click', prevSlide);

  indicators.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
  });

  // Touch events for swipe
  const track = document.querySelector('.carousel-track');
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  });

  function handleGesture() {
    if (touchEndX < touchStartX - 30) nextSlide();
    if (touchEndX > touchStartX + 30) prevSlide();
  }

  // Optional: auto-slide every 6 seconds
  let autoSlide = setInterval(nextSlide, 6000);
  [leftArrow, rightArrow, ...indicators].forEach(el => {
    el.addEventListener('mouseenter', () => clearInterval(autoSlide));
    el.addEventListener('mouseleave', () => autoSlide = setInterval(nextSlide, 6000));
  });

  showSlide(0);
}); 