const cursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links li");

// cursor script------------------
window.addEventListener("mousemove", cursorMove);
function cursorMove(e) {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
}

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("link-grow");
    link.classList.remove("hover-link");
  });
  link.addEventListener("mouseover", () => {
    cursor.classList.add("link-grow");
    link.classList.add("hover-link");
    link.classList.add("font");
  });
});

