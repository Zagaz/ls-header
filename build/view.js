/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log('Hello World! (from create-block-ls-header block)');
/* eslint-enable no-console */

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    scrollFunction();
  });
});
function scrollFunction() {
  let scrollObject = document.querySelector('.ud-header');
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    //  add to scrollObject class = "sticky"
    scrollObject.classList.add("sticky");
  } else {
    document.getElementById("header").style.padding = "80px 10px";
    console.log('scrolling -');
    //  remove from scrollObject class = "sticky"
    scrollObject.classList.remove("sticky");
  }
}
/******/ })()
;
//# sourceMappingURL=view.js.map