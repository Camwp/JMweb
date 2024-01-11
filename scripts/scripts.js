function toggleNav() {
    console.log('Hamburger icon clicked!');
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Add this to your existing JavaScript code
let currentImageIndex = 0;
const totalImages = document.querySelectorAll(".mainimg").length,
    images = document.querySelectorAll(".mainimg");

function showSlides() {
    images[currentImageIndex].classList.remove("fadeOut"), images[currentImageIndex].classList.add("fadeIn"), images[currentImageIndex].style.display = "block", setTimeout((() => {
        images[currentImageIndex].classList.remove("fadeIn"), images[currentImageIndex].classList.add("fadeOut"), setTimeout((() => {
            images[currentImageIndex].style.display = "none", currentImageIndex++, currentImageIndex >= totalImages && (currentImageIndex = 0), images[currentImageIndex].style.display = "block", setTimeout((() => {
                showSlides();
            }), 200) // Wait for the transition to complete before changing image
        }), 800) // Transition duration
    }), 6000) // Change image every 2 seconds
}

// Initial setup
showSlides();

// Shrink the NAV on scroll
document.addEventListener("DOMContentLoaded", (function() {
    var e = document.querySelector("header"),
        t = document.querySelector(".iconlogo");
    window.addEventListener("scroll", (function() {
        window.scrollY > 0 ? (e.classList.add("nav-shrink"), t.style.height = "50px") : (e.classList.remove("nav-shrink"), t.style.height = "100px", t.style.transition = "height 0.3s ease-in-out")
    }))
}));

// Function to simulate a click on the first category link
function selectInitialCategory() {
    const firstCategoryLink = document.querySelector('.portfolio-categories ul li a');
    if (firstCategoryLink) {
        firstCategoryLink.click(); // Simulate a click on the first category link
    }
}

var i = 0;
var txt = 'Experience You Can Trust'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener('DOMContentLoaded', selectInitialCategory), document.addEventListener('DOMContentLoaded', typeWriter);