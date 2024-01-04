function toggleNav() {
    console.log('Hamburger icon clicked!');
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Add this to your existing JavaScript code

// Update scripts.js

let currentImageIndex = 0;
const totalImages = document.querySelectorAll('.mainimg').length;
const carousel = document.getElementById('imageCarousel');
const imageWidth = document.querySelector('.mainimg').clientWidth; // Get the width of a single image

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    updateCarousel();
}

function updateCarousel() {
    const translateValue = -currentImageIndex * imageWidth;
    carousel.style.transform = `translateX(${translateValue}px)`;
}

// Rest of your code...


// Add any additional logic as needed


// Change images every 3 seconds (adjust as needed)
setInterval(nextImage, 8000);


// Shrink the NAV on scroll

document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    var header_icon = document.querySelector(".iconlogo");

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header.classList.add('nav-shrink');
            header_icon.style.height = "50px";
        } else {
            header.classList.remove('nav-shrink');
            header_icon.style.height = "100px";
            header_icon.style.transition = "height 0.3s ease-in-out";
        }
    });
});

    // Function to simulate a click on the first category link
    function selectInitialCategory() {
        const firstCategoryLink = document.querySelector('.portfolio-categories ul li a');
        if (firstCategoryLink) {
            firstCategoryLink.click(); // Simulate a click on the first category link
        }
    }

    // Event listener to call the function when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', selectInitialCategory);
