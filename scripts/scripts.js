function toggleNav() {
    console.log('Hamburger icon clicked!');
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Add this to your existing JavaScript code
let currentImageIndex = 0;
const totalImages = document.querySelectorAll('.mainimg').length;
const images = document.querySelectorAll('.mainimg');

function showSlides() {
    images[currentImageIndex].classList.remove('fadeOut');
    images[currentImageIndex].classList.add('fadeIn');
    images[currentImageIndex].style.display = "block";

    setTimeout(() => {
        images[currentImageIndex].classList.remove('fadeIn');
        images[currentImageIndex].classList.add('fadeOut');

        setTimeout(() => {
            images[currentImageIndex].style.display = "none";

            currentImageIndex++;
            if (currentImageIndex >= totalImages) {
                currentImageIndex = 0;
            }

            images[currentImageIndex].style.display = "block";

            setTimeout(() => {
                showSlides();
            }, 200); // Wait for the transition to complete before changing image
        }, 800); // Transition duration
    }, 6000); // Change image every 2 seconds
}

// Initial setup
showSlides();

// Shrink the NAV on scroll
document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    var header_icon = document.querySelector(".iconlogo");

    window.addEventListener('scroll', function() {
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