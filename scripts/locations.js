function showMapModal(location) {
    // Open modal
    document.getElementById('mapModal').style.display = 'flex';

    // Set the source URL for the iframe with the Google Maps link based on the location
    var mapUrl;
    
    switch (location) {
        case 'Dallas, TX':
            mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.411388731449!2d-121.26276555833677!3d38.77720245390297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b1f3cc4517217%3A0xddbc8a308dce0041!2sPM%20Design%20Group%2C%20Inc.!5e0!3m2!1sen!2sus!4v1706829210429!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"';
            break;
        case 'Denver, CO':
            mapUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6686.215025710133!2d-96.683299!3d33.079956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c175f8838cdfd%3A0x9f31ac7e05de047e!2s1101%20Central%20Expy%20S%20%23215%2C%20Allen%2C%20TX%2075013!5e0!3m2!1sen!2sus!4v1706829431372!5m2!1sen!2sus';
            break;
        // Add similar cases for other locations

        default:
            mapUrl = 'https://www.google.com/maps/embed';
            break;
    }

    document.getElementById('mapContainer').src = mapUrl;
}

function closeMapModal() {
    // Close modal
    document.getElementById('mapModal').style.display = 'none';

    // Reset the iframe source when the modal is closed
    document.getElementById('mapContainer').src = '';
}
