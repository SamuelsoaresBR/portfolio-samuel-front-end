export default function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-anima]');

  if (sections.length) {
    sections[0].classList.add('animar');
    function animarScroll() {
      const sectionTop = sections.forEach((item) => {
        const tela = window.innerHeight * .7;
        const top = item.getBoundingClientRect().top;
        const animarSection = top - tela;
        if (animarSection < 0) {
          item.classList.add('animar')
        }
      });
    };
    window.addEventListener('scroll', animarScroll);
  };
};