const headerNav = document.querySelector('header nav');

headerNav.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    // Add your custom behavior here like highlighting clicked menu item
  }
});
