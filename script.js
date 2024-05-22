function showDetails(name, title, socialInfo) {
    const modal = document.getElementById('infoModal');
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalSocial').textContent = socialInfo;

    modal.style.display = 'block'; // Show the modal
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none'; // Hide the modal
}

window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target == modal) {
        modal.style.display = 'none'; // Hide the modal when clicking outside
    }
}
