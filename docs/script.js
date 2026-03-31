const bg = document.querySelector(".water-bg");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  bg.style.transform =
    `translate3d(${scroll * 0.05}px, ${scroll * 0.02}px, 0) scale(1.05)`;
});