document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('mobile-menu').addEventListener('click', toggleMobileNav);
    document.getElementById('mobile-menu-close').addEventListener('click', toggleMobileNav);

    // Sticky Header
    window.onscroll = function () {
        addStickyHeader();
    };

    window.onload = function () {
        addStickyHeader();
    };
    var header = document.querySelector("header");
    // Get the offset position of the navbar
    var sticky = 0;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function addStickyHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky")
        } else {
            header.classList.remove("sticky");
        }
    }

    function toggleMobileNav() {
        document.querySelector('nav').classList.toggle('open');
    }
});