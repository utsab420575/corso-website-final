// Function to handle navbar behavior on scroll
function userScroll() {
    // Select the navbar element using its class name
    const navbar = document.querySelector('.navbar');

    // Add a scroll event listener to the window
    window.addEventListener('scroll', () => {
        // Check if the user has scrolled more than 50 pixels down
        if (window.scrollY > 50) {
            // If scrolled more than 50px, add the 'bg-dark' class to the navbar
            navbar.classList.add('bg-dark');
        } else {
            // If scrolled back to the top (less than or equal to 50px), remove the 'bg-dark' class
            navbar.classList.remove('bg-dark');
        }
    });
}

// Add an event listener to execute the `userScroll` function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', userScroll);