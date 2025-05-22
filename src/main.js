import "./scss/main.scss";
// Бургииир )
const burger = document.getElementById("burger");
const overlay = document.getElementById("overlay");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

// Закрытие меню
document.addEventListener("click", (e) => {
  if (!burger.contains(e.target) && !overlay.contains(e.target)) {
    closeMenu();
  }
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function closeMenu() {
  burger.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
}


// Слайдиир))
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.directions__content');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = 'grab';
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'grab';
  });

  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Умножаем для более быстрого скролла
    slider.scrollLeft = scrollLeft - walk;
  });
});








