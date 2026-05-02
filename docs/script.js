const bg = document.querySelector(".water-bg");
const heroImage = document.querySelector(".hero-image-parallax");
const revealItems = document.querySelectorAll(".reveal");
const dots = document.querySelectorAll(".dot");
const artifacts = document.querySelectorAll("#exhibit .artifact");

function handleParallax() {
  const scroll = window.scrollY;
  const stopPoint = window.innerHeight * 0.9;
  const limitedScroll = Math.min(scroll, stopPoint);

  if (bg) {
    bg.style.transform = `translate3d(${scroll * 0.03}px, ${scroll * 0.015}px, 0) scale(1.05)`;
  }

  if (heroImage) {
    const movement = limitedScroll * 0.24;
    heroImage.style.transform = `translateY(${-(movement + 120)}px) scale(1.22)`;

    const fadeStart = stopPoint * 0.35;
    const fadeRange = stopPoint * 0.65;

    const opacity = Math.max(
      0.08,
      0.42 - Math.max(0, (scroll - fadeStart) / fadeRange) * 0.34
    );

    heroImage.style.opacity = opacity;
  }
}

function revealOnScroll() {
  const trigger = window.innerHeight * 0.88;

  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();

    if (rect.top < trigger) {
      item.classList.add("visible");
    }
  });
}

function updateDots() {
  if (!dots.length || !artifacts.length) return;

  let activeIndex = 0;

  artifacts.forEach((artifact, index) => {
    const rect = artifact.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.55) {
      activeIndex = index;
    }
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeIndex);
  });
}

function updateScene() {
  handleParallax();
  revealOnScroll();
  updateDots();
}

window.addEventListener("scroll", updateScene);
window.addEventListener("resize", updateScene);
window.addEventListener("load", updateScene);
document.addEventListener("DOMContentLoaded", updateScene);
