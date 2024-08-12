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

    renderPosts();

    // Event listener for light/dark mode
    document.getElementById('mode-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Event listener for the back button
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
});