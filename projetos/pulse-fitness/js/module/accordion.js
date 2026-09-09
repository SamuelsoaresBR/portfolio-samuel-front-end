export default function initAccordion() {
  const faqDt = document.querySelectorAll('[data-accordion] dt');

  if (faqDt.length) {
    faqDt[0].nextElementSibling.classList.add('ativo');
    faqDt[0].classList.add('ativo');
    function handleClick(event) {
      const ddFaq = this.nextElementSibling;
      event.currentTarget.classList.toggle('ativo')
      ddFaq.classList.toggle('ativo');
    };

    faqDt.forEach((item) => {
      item.addEventListener('click', handleClick)
    });
  }
};