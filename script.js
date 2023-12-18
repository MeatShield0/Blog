// script.js


// Assume you have an array of blogs. Each blog should have a 'title' and a 'link'.
const blogs = [
  { title: 'Blog 1', link: '#blog1' },
  { title: 'Blog 2', link: '#blog2' },
  { title: 'Blog 3', link: '#blog3' },
  // Add more blogs as needed
];

// Dynamically populate the blog list in the navigation bar
const blogListDropdown = document.getElementById('blogListDropdown');
blogs.forEach(blog => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<a class="dropdown-item" href="${blog.link}">${blog.title}</a>`;
  blogListDropdown.appendChild(listItem);
});


document.addEventListener('DOMContentLoaded', function() {
  // ... (your existing code)

  // Select the form and add a submit event listener
  const blogForm = document.getElementById('blog-form');
  blogForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevents the default form submission

      // Get values from the form
      const blogTitle = document.getElementById('blog-title').value;
      const blogContent = document.getElementById('blog-content').value;

      // Call a function to add the new blog post to the page (you need to implement this function)
      addNewBlogPost(blogTitle, blogContent);

      // Clear the form fields
      blogForm.reset();
  });

  // Function to add a new blog post dynamically
  function addNewBlogPost(title, content) {
      // Create a new blog post element
      const newPost = document.createElement('div');
      newPost.className = 'hero';
      newPost.innerHTML = `
          <div class="content1">
              <h2>${title}</h2>
              <p class="meta">Posted on ${new Date().toLocaleDateString()}</p>
              <p>${content}</p>
              <a href="#">Back to the top</a>
          </div>
      `;

      // Insert the new blog post at the beginning of the posts section
      const postsSection = document.getElementById('posts');
      postsSection.insertBefore(newPost, postsSection.firstChild);
  }
});
