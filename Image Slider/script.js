let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  document.querySelector(".slides").style.transform = `translateX(-${
    currentSlide * 100
  }%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Automatic Slideshow
setInterval(() => {
  nextSlide();
}, 3000);

// Display the first image when the page loads
showSlide(currentSlide);
