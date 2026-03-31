const bg = document.querySelector(".water-bg");
const heroImage = document.querySelector(".hero-image-parallax");
const revealItems = document.querySelectorAll(".reveal");

function handleReveal() {
  const trigger = window.innerHeight * 0.88;

  revealItems.forEach((item) => {
    const top = item.getBoundingClientRect().top;

    if (top < trigger) {
      item.classList.add("visible");
    }
  });
}

function handleParallax() {
  const scroll = window.scrollY;

  const stopPoint = window.innerHeight * 0.8;
  const limitedScroll = Math.min(scroll, stopPoint);

  if (bg) {
    bg.style.transform = `translate3d(${scroll * 0.03}px, ${scroll * 0.015}px, 0) scale(1.05)`;
  }

  if (heroImage) {
    const movement = limitedScroll * 0.24;

    heroImage.style.transform = `translateY(-${movement}px) scale(1.06)`;

    const fadeStart = stopPoint * 0.35;
    const fadeRange = stopPoint * 0.65;

    const opacity = Math.max(
      0,
      0.18 - Math.max(0, (scroll - fadeStart) / fadeRange) * 0.18
    );

    heroImage.style.opacity = opacity;
  }
}

window.addEventListener("scroll", () => {
  handleParallax();
  handleReveal();
});

window.addEventListener("load", () => {
  handleParallax();
  handleReveal();
});