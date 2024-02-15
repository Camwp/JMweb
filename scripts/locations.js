function showMapModal(location) {
    // Open modal
    document.getElementById('mapModal').style.display = 'flex';

    // Set the source URL for the iframe with the Google Maps link based on the location
    var mapUrl;
    
    switch (location) {
        case 'Los Angeles, CA':
            mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.411388731449!2d-121.26276555833677!3d38.77720245390297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b1f3cc4517217%3A0xddbc8a308dce0041!2sPM%20Design%20Group%2C%20Inc.!5e0!3m2!1sen!2sus!4v1706829210429!5m2!1sen!2sus';
            break;
        case 'Dallas, TX':
            mapUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6686.215025710133!2d-96.683299!3d33.079956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c175f8838cdfd%3A0x9f31ac7e05de047e!2s1101%20Central%20Expy%20S%20%23215%2C%20Allen%2C%20TX%2075013!5e0!3m2!1sen!2sus!4v1706829431372!5m2!1sen!2sus';
            break;
        case 'Denver, CO':
            mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.8734153837286!2d-104.86304490495733!3d39.53990953530189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c856f7175eca7%3A0x89251df623d4e6a!2s9540%20Maroon%20Cir%2C%20Englewood%2C%20CO%2080112!5e0!3m2!1sen!2sus!4v1708013621910!5m2!1sen!2sus';
            break;
        case 'San Francisco, CA':
            mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.3188033852794!2d-122.69376532276947!3d38.43410457390539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8084486c352e5dc5%3A0xf35790feb07075d3!2s2455%20Bennett%20Valley%20Rd%20a%20102%2C%20Santa%20Rosa%2C%20CA%2095404!5e0!3m2!1sen!2sus!4v1708013492127!5m2!1sen!2sus';
            break;
        case 'Phoenix, AZ':
            mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.4737201010366!2d-112.0730803228799!3d33.489050147256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b128ac51667d1%3A0xd0722a9d4a2ffd1f!2s76%20E%20Mitchell%20Dr%2C%20Phoenix%2C%20AZ%2085012!5e0!3m2!1sen!2sus!4v1708013937676!5m2!1sen!2sus';
            break;
        case 'Portland, OR':
            mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.6810011961966!2d-122.48145242258146!3d45.59695712456944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a4ac63001d9b%3A0x733c54d818a2e316!2s19120%20SE%2034th%20St%2C%20Vancouver%2C%20WA%2098683!5e0!3m2!1sen!2sus!4v1708014025490!5m2!1sen!2sus';
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
