// Function to toggle the display of social media links
function toggleSocial(personId) {
    var socialDiv = document.getElementById(personId);
    if (socialDiv.style.display === "block") {
        socialDiv.style.display = "none";  // Hide the icons if visible
    } else {
        socialDiv.style.display = "block"; // Show the icons if hidden
    }
}

// Function to close social media links if the user clicks outside of them
window.onclick = function(event) {
    // Retrieve all elements with class 'social'
    var socials = document.getElementsByClassName('social');
    for (var i = 0; i < socials.length; i++) {
        var openSocial = socials[i];
        // Check if the click is outside of a social div and it is open
        if (event.target.tagName !== 'IMG' && openSocial.style.display === 'block') {
            openSocial.style.display = 'none'; // Hide the currently displayed icons
        }
    }
}
