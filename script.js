function toggleSocial(personId) {
    var socialDiv = document.getElementById(personId);
    if (socialDiv.style.display === "block") {
        socialDiv.style.display = "none";
    } else {
        socialDiv.style.display = "block";
        socialDiv.style.transition = "all 0.3s ease";
        socialDiv.style.transform = "translateY(0%)";
    }
}

window.onclick = function(event) {
    var socials = document.getElementsByClassName('social');
    for (var i = 0; i < socials.length; i++) {
        var openSocial = socials[i];
        if (event.target.tagName !== 'IMG' && openSocial.style.display === 'block') {
            openSocial.style.display = 'none';
        }
    }
}
