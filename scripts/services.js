document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll('.service');

    services.forEach(function(service) {
        const header = service.querySelector('.header'); // Get the header element within each service

        console.log(header); // Check if the header is correctly selected

        header.addEventListener('click', function() {
            console.log("Clicked!"); // Check if the click event is triggered

            service.classList.toggle('active'); // Toggle the 'active' class for the clicked service
        });
    });
});
