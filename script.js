// JavaScript code for any additional functionality

// Function to handle social icon popups smoothly
document.addEventListener("DOMContentLoaded", function() {
    const socialIcons = document.querySelectorAll(".social-icons a");

    socialIcons.forEach(icon => {
        icon.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.2)";
            this.style.transition = "transform 0.2s ease-in-out";
        });

        icon.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
            this.style.transition = "transform 0.2s ease-in-out";
        });
    });
});

// Function to handle dropdown menu
document.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.querySelector(".dropdown button");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdownButton.addEventListener("click", function() {
        dropdownContent.classList.toggle("show");
    });

    window.addEventListener("click", function(event) {
        if (!event.target.matches('.dropdown button')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});
