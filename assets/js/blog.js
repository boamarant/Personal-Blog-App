// Runs when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the container where blog posts will be displayed
    const postsContainer = document.getElementById('posts-container');
    // Retrieve the blog posts from localStorage or initialize an empty array
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Display a message if there are no blog posts
    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No blog posts yet. Go back and add one!</p>';
    } else {
        // Loops through the posts to display each one
        posts.forEach(post => {
            // Creates a new div for each post
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            // Display the post details
            postDiv.innerHTML = `
                <h2>${post.title}</h2>
                <p><strong>By:</strong> ${post.username}</p>
                <p>${post.content}</p>
            `;
            // Append the post div to the posts container
            postsContainer.appendChild(postDiv);
        });
    }

    // Event listener for light/dark mode
    document.getElementById('mode-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Event listener for the back button
    document.getElementById('back-button').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});