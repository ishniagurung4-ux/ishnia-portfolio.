document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  function showSection(sectionId) {
    sections.forEach(section => section.classList.add('hidden'));
    const target = document.getElementById(sectionId);

    if (target) {
      target.classList.remove('hidden');
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', (event) => {
      const sectionId = link.getAttribute('href')?.replace('#', '');

      if (!sectionId || sectionId === 'home') {
        if (sectionId === 'home') {
          event.preventDefault();
          document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      event.preventDefault();
      showSection(sectionId);
    });
  });
});

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.add('hidden'));
  const target = document.getElementById(sectionId);

  if (target) {
    target.classList.remove('hidden');
    target.scrollIntoView({ behavior: 'smooth' });
  }
}