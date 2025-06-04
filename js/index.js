document.addEventListener('DOMContentLoaded', () => {
  // 1. Add Card "approfondimento"
  const approfondimentoContainer = document.getElementById(
    'approfondimento-container'
  );
  const approfondimentoCard = createApprofondimentoCard(
    `<p class="max-w-[387px]">Hai completato il gioco e vuoi avere ulteriori approfondimenti?</p>`
  );
  approfondimentoContainer.appendChild(approfondimentoCard);

  // 2. Generate Dynamic Tab Buttons
  const buttonContainer = document.getElementById('tab-button-container');
  const commonClasses =
    'tab-btn size-11 rounded-full text-[26px]/[16px] text-dark-slate-blue font-semibold flex items-center justify-center gap-0.5 -tracking-wider';
  const svgIcon = `
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.70711 8.70711C10.0976 8.31658 10.0976 7.68342 9.70711 7.29289L3.34315 0.928932C2.95262 0.538408 2.31946 0.538408 1.92893 0.928932C1.53841 1.31946 1.53841 1.95262 1.92893 2.34315L7.58579 8L1.92893 13.6569C1.53841 14.0474 1.53841 14.6805 1.92893 15.0711C2.31946 15.4616 2.95262 15.4616 3.34315 15.0711L9.70711 8.70711ZM0 8L0 9L9 9V8V7L0 7L0 8Z" fill="#3F3D56"/>
    </svg>
  `;

  for (let i = 1; i <= 4; i++) {
    const btn = document.createElement('button');
    btn.className = `${commonClasses} bg-medium-gray`;
    btn.setAttribute('data-tab', i);
    btn.innerHTML = `<span>${i}</span>${svgIcon}`;
    buttonContainer.appendChild(btn);
  }

  // 3. Tab Switch Logic
  const buttons = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      buttons.forEach((b) => {
        b.classList.remove('bg-medium-brand');
        b.classList.add('bg-medium-gray');
      });

      contents.forEach((c) => c.classList.add('hidden'));

      btn.classList.add('bg-medium-brand');
      btn.classList.remove('bg-medium-gray');

      document
        .querySelector(`.tab-content[data-content="${target}"]`)
        .classList.remove('hidden');
    });
  });

  buttons[0]?.click();
});
