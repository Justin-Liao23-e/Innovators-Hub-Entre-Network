// Toggle dropdown function for menus
document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function() {
        const dropdownContent = this.nextElementSibling;
        const currentlyOpen = dropdownContent.style.display === 'block';
        
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
            content.style.maxHeight = '0';
        });

        if (!currentlyOpen) {
            dropdownContent.style.display = 'block';
            dropdownContent.style.maxHeight = '500px';
        } else {
            dropdownContent.style.display = 'none';
            dropdownContent.style.maxHeight = '0';
        }
    });
});

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
            content.style.maxHeight = '0';
        });
    }
};

// Popup for social links
document.getElementById('social-links-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('social-links-popup').style.display = 'flex';
});

document.querySelector('.popup .close').addEventListener('click', function() {
    document.getElementById('social-links-popup').style.display = 'none';
});

// Close popup if clicked outside
window.onclick = function(event) {
    if (event.target === document.getElementById('social-links-popup')) {
        document.getElementById('social-links-popup').style.display = 'none';
    }
};
