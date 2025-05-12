// Sample blog posts (simulating database data)
const blogPosts = [
    { id: 1, isbn: '9780747532699', title: 'Book Review: Harry Potter', content: 'A magical journey...', author: 'J.K. Rowling', date: '2025-05-01' },
    { id: 2, isbn: '9780140449136', title: 'Library Event: Book Club', content: 'Join our discussion...', author: 'Jane Austen', date: '2025-05-10' }
];

// Load blog posts
function loadBlogPosts() {
    const postsContainer = document.getElementById('featured-posts');
    if (postsContainer) {
        postsContainer.innerHTML = blogPosts.map(post => `
            <div class="blog-card bg-white p-4 rounded-lg shadow-md">
                <h3 class="text-xl font-semibold">${post.title}</h3>
                <p class="text-gray-600">By ${post.author} on ${post.date}</p>
                <p>${post.content.substring(0, 100)}...</p>
                <a href="blogs.html" class="text-blue-600 hover:underline">Read More</a>
            </div>
        `).join('');
    }
}

// Toggle mobile menu
document.getElementById('menu-toggle')?.addEventListener('click', () => {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
});

// Handle blog form submission
document.getElementById('blog-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('blog-title').value;
    const content = document.getElementById('blog-content').value;
    const author = document.getElementById('blog-author').value;
    const newPost = {
        id: blogPosts.length + 1,
        isbn: '9780000000000', // Placeholder
        title,
        content,
        author,
        date: new Date().toISOString().split('T')[0]
    };
    blogPosts.push(newPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    alert('Blog post added!');
    e.target.reset();
});

// Initialize
loadBlogPosts();