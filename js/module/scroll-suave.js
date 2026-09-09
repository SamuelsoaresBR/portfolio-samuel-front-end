export default function initScrollSuave() {
  const linksInterno = document.querySelectorAll('.header-conteudo a[href^="#"]');

  if (linksInterno.length) {
    function handleClick(event) {
      event.preventDefault();
      const href = this.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };


    linksInterno.forEach((item) => {
      item.addEventListener('click', handleClick)
    });
  }
};