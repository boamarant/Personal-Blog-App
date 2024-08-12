// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');
}

// Function to check localStorage for dark mode preference
function applyStoredModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Function to handle the back button
function handleBackButton() {
    // Redirect to the index.html page
    window.location.href = 'index.html';
}

// Event listeners for the toggle dark mode and back buttons
document.addEventListener('DOMContentLoaded', () => {
    const modeToggleBtn = document.getElementById('mode-toggle');
    const backButton = document.getElementById('back-button');

    // Apply the stored lighting preference on page load
    applyStoredModePreference();

    if (modeToggleBtn) {
        modeToggleBtn.addEventListener('click', () => {
            toggleDarkMode();
            // Save the user preference in localStorage
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
    }

    if (backButton) {
        backButton.addEventListener('click', handleBackButton);
    }
});