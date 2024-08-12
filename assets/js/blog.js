// Runs when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the container where blog posts will be displayed
    const postsContainer = document.getElementById('posts-container');
    // Retrieve the blog posts from localStorage or initialize an empty array
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    function renderPosts(){
        // Clears the posts container to avoid duplication
        postsContainer.innerHTML = '';
        // Display a message if there are no blog posts
        if (posts.length === 0) {
            postsContainer.innerHTML = '<p>No blog posts yet. Go back and add one!</p>';
        } else {
            // Loops through the posts to display each one
            posts.forEach((post, index) => {
                // Creates a new div for each post
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');
                // Display the post details
                postDiv.innerHTML = `
                    <h2>${post.title}</h2>
                    <p><strong>By:</strong> ${post.username}</p>
                    <p>${post.content}</p>
                    <button class="delete-button" data-index="${index}">Delete</button>
                `;
                // Append the post div to the posts container
                postsContainer.appendChild(postDiv);
            });
            // Delete button
            const deleteButtons = document.querySelectorAll('.delete-button');
            deleteButtons.forEach(button => {
                button.addEventListener('click', handleDelete);
            });
        }
    };

    // Function to toggle light/dark mode
    function toggleMode() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        modeIcon.classList.toggle('fa-sun', !isDarkMode);
        modeIcon.classList.toggle('fa-moon', isDarkMode);
    }

    // Get the mode toggle button and icon
    const modeToggle = document.getElementById('mode-toggle');
    const modeIcon = document.getElementById('mode-icon');

    // Set mode based on localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        modeIcon.classList.add('fa-moon');
        modeIcon.classList.remove('fa-sun');
    } else {
        modeIcon.classList.add('fa-sun');
        modeIcon.classList.remove('fa-moon');
    }

    // Event listeners for mode toggle and back button
    modeToggle.addEventListener('click', toggleMode);
    document.getElementById('back-button').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    

    // For deleting posts
    function handleDelete(event) {
        const postIndex = event.target.getAttribute('data-index');    
        // Remove the post from the array
        posts.splice(postIndex, 1);
        // Save the updated posts array to localStorage
        localStorage.setItem('blogPosts', JSON.stringify(posts));
    
        // Reload the page to update the list of posts
        renderPosts();
    }

    // Render posts on page load
    renderPosts();
});