// Event listener
document.getElementById('blog-form').addEventListener('submit', function(event) {
    // Prevent default on refresh
    event.preventDefault();
    
    // Get values from the form inputs
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Makes sure that all entry fields have a value
    if (!username || !title || !content) {
        errorMessage.textContent = "Please complete all fields before submitting.";
        return;
    }

    // Creates a new blog post using the inputted values
    const blogPost = { username, title, content };
    // Retrieve existing blog posts from localStorage, or initialize an empty array if there are none
    let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    // Adds new blog posts to the array
    posts.push(blogPost);
    // Save the updated array to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(posts));

    // Sends user to the posts page after submitting the post
    window.location.href = 'blog.html';
});