const bg = document.querySelector(".water-bg");
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

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  if (bg) {
    bg.style.transform = `translate3d(${scroll * 0.03}px, ${scroll * 0.015}px, 0) scale(1.05)`;
  }

  handleReveal();
});

window.addEventListener("load", () => {
  handleReveal();
});