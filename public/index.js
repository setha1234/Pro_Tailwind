document.getElementById("menuButton").addEventListener("click", function () {
    document.getElementById("navMenu").classList.toggle("hidden");
});
const slider = document.getElementById("slider");
const slides = slider.children;
const totalSlides = slides.length;
let currentIndex = 0;

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto slide every 5 seconds (optional)
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}, 5000);
