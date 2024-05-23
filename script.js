// Toggle dropdown function
document.querySelector('.dropbtn').addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
        dropdownContent.style.maxHeight = '0';
    } else {
        dropdownContent.style.display = 'block';
        dropdownContent.style.maxHeight = '500px';
    }
});

// Popup window for social links
document.getElementById('social-links-button').addEventListener('click', function() {
    document.getElementById('social-links-popup').style.display = 'block';
});

document.querySelector('.popup .close').addEventListener('click', function() {
    document.getElementById('social-links-popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    const popup = document.getElementById('social-links-popup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});
