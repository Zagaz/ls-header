/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/**
 * This makes the STIKY effect on the <header>
 */
document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener("scroll", function () {
		let scrollObject = document.querySelector(".ud-header");
	if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
		scrollObject.classList.add("sticky");
	} else {
		scrollObject.classList.remove("sticky");
	}
	});
});


