document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            console.log('scroll ok');
        }
    });
});
