/* === script.js (Same JS, Enhanced UX) === */
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links li');
    const sections = document.querySelectorAll('.section');
  
    function switchSection(sectionId) {
      sections.forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(sectionId).classList.add('active');
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === sectionId) {
          link.classList.add('active');
        }
      });
    }
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const sectionId = link.dataset.section;
        switchSection(sectionId);
      });
    });
  
    switchSection('about');
  });
  