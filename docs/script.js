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
  const stopPoint = window.innerHeight * 0.95;

  if (bg) {
    bg.style.transform = `translate3d(${scroll * 0.03}px, ${scroll * 0.015}px, 0) scale(1.05)`;
  }

  if (heroImage) {
    const limitedScroll = Math.min(scroll, stopPoint);
    heroImage.style.transform = `translateY(${limitedScroll * 0.12}px) scale(1.06)`;
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