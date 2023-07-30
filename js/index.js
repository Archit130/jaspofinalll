// Custom JavaScript for scroll up behavior
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    navbar.classList.remove("scrolled-up");
  } else {
    // Scrolling down
    navbar.classList.add("scrolled-up");
  }
  prevScrollPos = currentScrollPos;
});

console.log("hello world");
