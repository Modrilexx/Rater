const bg = document.querySelector(".water-bg");
const heroImage = document.querySelector(".hero-image-parallax");
const revealItems = document.querySelectorAll(".reveal");

function handleParallax() {
  const scroll = window.scrollY;
  const stopPoint = window.innerHeight * 0.82;
  const limitedScroll = Math.min(scroll, stopPoint);

  if (bg) {
    bg.style.transform = `translate3d(${scroll * 0.03}px, ${scroll * 0.015}px, 0) scale(1.05)`;
  }

  if (heroImage) {
    const movement = limitedScroll * 0.22;
    heroImage.style.transform = `translateY(${-(movement + 120)}px) scale(1.22)`;

    const fadeStart = stopPoint * 0.42;
    const fadeRange = stopPoint * 0.58;

    const opacity = Math.max(
      0,
      0.44 - Math.max(0, (scroll - fadeStart) / fadeRange) * 0.44
    );

    heroImage.style.opacity = opacity;
  }
}

function revealOnScroll() {
  const trigger = window.innerHeight * 0.9;

  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();

    if (rect.top < trigger) {
      item.classList.add("visible");
    }
  });
}

function updateScene() {
  handleParallax();
  revealOnScroll();
}

window.addEventListener("scroll", updateScene);
window.addEventListener("resize", updateScene);
window.addEventListener("load", updateScene);
document.addEventListener("DOMContentLoaded", updateScene);