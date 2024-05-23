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
