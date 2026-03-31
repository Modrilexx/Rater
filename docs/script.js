const bg = document.querySelector(".water-bg");
const heroImage = document.querySelector(".hero-image-parallax");

function handleParallax() {
  const scroll = window.scrollY;
  const stopPoint = window.innerHeight * 0.8;
  const limitedScroll = Math.min(scroll, stopPoint);

  if (bg) {
    bg.style.transform = `translate3d(${scroll * 0.03}px, ${scroll * 0.015}px, 0) scale(1.05)`;
  }

  if (heroImage) {
    const movement = limitedScroll * 0.24;
    heroImage.style.transform = `translateY(${-(movement + 60)}px) scale(1.12)`;

    const fadeStart = stopPoint * 0.45;
    const fadeRange = stopPoint * 0.55;

    const opacity = Math.max(
      0,
      0.38 - Math.max(0, (scroll - fadeStart) / fadeRange) * 0.38
    );

    heroImage.style.opacity = opacity;
  }
}

window.addEventListener("scroll", handleParallax);
window.addEventListener("load", handleParallax);