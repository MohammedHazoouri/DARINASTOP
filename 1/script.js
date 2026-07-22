// Function to open modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

// Function to close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Menu Filtering Logic
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            menuItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                    // Add a small fade-in effect
                    item.style.animation = 'fadeIn 0.5s';
                } else if (item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// Add fade-in animation to CSS dynamically via JS for the filtering
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(style);

// Smooth Scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});
