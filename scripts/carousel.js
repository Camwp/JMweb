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
    }), 6000) // Change image every 6 seconds
}

// Initial setup
showSlides();

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

document.addEventListener('DOMContentLoaded', typeWriter);