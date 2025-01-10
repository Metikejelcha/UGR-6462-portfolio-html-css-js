document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menubar a');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
  
    // When the menu icon is clicked, toggle the sidebar
    menuIcon.addEventListener('click', function () {
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
    });
  
    // When the overlay (outside of sidebar) is clicked, hide the sidebar
    overlay.addEventListener('click', function () {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    });
  
    // When the close button inside the sidebar is clicked, hide the sidebar
    const closeBtn = document.querySelector('.sidebar .closebtn a');
    closeBtn.addEventListener('click', function () {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
  