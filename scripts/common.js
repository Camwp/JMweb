function toggleNav() {
    console.log('Hamburger icon clicked!');
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Shrink the NAV on scroll
document.addEventListener("DOMContentLoaded", (function() {
    var e = document.querySelector("header"),
        t = document.querySelector(".iconlogo");
    window.addEventListener("scroll", (function() {
        window.scrollY > 0 ? (e.classList.add("nav-shrink"), t.style.height = "50px", t.style.width = "auto") : (e.classList.remove("nav-shrink"), t.style.height = "100px", t.style.transition = "height 0.3s ease-in-out")
    }))
}));
