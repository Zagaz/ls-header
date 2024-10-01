/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/**
 * This makes the STIKY effect on the <header>
 */
window.onscroll = function () {
  const ud_header = document.querySelector(".ud-header");
  const sticky = ud_header.offsetTop;
  const logo = document.querySelector(".navbar-brand img");
  if (window.scrollY > sticky) {
    ud_header.classList.add("sticky");
    logo.src = "http://localhost:8888/wp-content/uploads/2024/10/logo-2.svg";
  } else {
    ud_header.classList.remove("sticky");
    logo.src = "http://localhost:8888/wp-content/uploads/2024/10/logo.svg";
  }

  // === logo change
  if (ud_header.classList.contains("sticky")) {} else {}

  // show or hide the back-top-top button
  const backToTop = document.querySelector(".back-to-top");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
};

//===== close navbar-collapse when a  clicked
let navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");
document.querySelectorAll(".ud-menu-scroll").forEach(e => e.addEventListener("click", () => {
  navbarToggler.classList.remove("active");
  navbarCollapse.classList.remove("show");
}));
navbarToggler.addEventListener("click", function () {
  navbarToggler.classList.toggle("active");
  navbarCollapse.classList.toggle("show");
});

// ===== submenu
const submenuButton = document.querySelectorAll(".nav-item-has-children");
submenuButton.forEach(elem => {
  elem.querySelector("a").addEventListener("click", () => {
    elem.querySelector(".ud-submenu").classList.toggle("show");
  });
});

// ====== scroll top js
function scrollTo(element, to = 0, duration = 500) {
  const start = element.scrollTop;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;
  const animateScroll = () => {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};
document.querySelector(".back-to-top").onclick = () => {
  scrollTo(document.documentElement);
};
/******/ })()
;
//# sourceMappingURL=view.js.map