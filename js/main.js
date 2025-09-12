// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const navList = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
  navList.classList.toggle("show");
});

  <script>
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      menuToggle.classList.toggle('open');
    });
  </script>