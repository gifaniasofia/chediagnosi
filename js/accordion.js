async function loadComponentByClass(className, file) {
  const elements = document.querySelectorAll(`.${className}`);
  const response = await fetch(file);
  const content = await response.text();

  elements.forEach((el) => {
    el.innerHTML = content;
  });
}

document.addEventListener('DOMContentLoaded', async function () {
  await loadComponentByClass(
    'arrow-accordion',
    'components/arrow-accordion.html'
  );

  const accordions = document.querySelectorAll("[id^='faq-']");

  accordions.forEach((content) => {
    const button = document.querySelector(
      `button[aria-controls="${content.id}"]`
    );
    const icons = button.querySelectorAll('svg');

    button.addEventListener('click', function () {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      button.setAttribute('aria-expanded', !isExpanded);
      content.classList.toggle('hidden', isExpanded);

      icons[0].classList.toggle('rotate-180', !isExpanded);
    });

    content.classList.add('hidden');
  });
});
