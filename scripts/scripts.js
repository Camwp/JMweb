function toggleNav() {
    console.log('Hamburger icon clicked!');
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Add this to your existing JavaScript code

let currentImageIndex = 0;
const totalImages = document.querySelectorAll('.mainimg').length;
const carousel = document.getElementById('imageCarousel');

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    updateCarousel();
}

function updateCarousel() {
    const translateValue = -currentImageIndex * 100;
    carousel.style.transform = `translateX(${translateValue}%)`;
}

// Change images every 3 seconds (adjust as needed)
setInterval(nextImage, 8000);


// Add this to your existing JavaScript code

document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header.classList.add('nav-shrink');
        } else {
            header.classList.remove('nav-shrink');
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
