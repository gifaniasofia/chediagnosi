function createApprofondimentoCard(text) {
  const wrapper = document.createElement('div');
  wrapper.className =
    'bg-light-brand p-6 sm:p-9.25 rounded-2.5xl space-y-6 sm:space-y-8';
  wrapper.innerHTML = `
    <div class="flex items-center">
      <div class="rounded-full h-11 py-3 px-7.5 text-lg/tight sm:text-xl/none font-medium -tracking-wider border border-black">
        Approfondimento
      </div>
      <div class="size-11 rounded-full shrink-0 flex items-center justify-center border border-black">
        <img src="/assets/icons/download.webp" class="size-4" alt="download" />
      </div>
    </div>
    <h3 class="-tracking-wider text-left text-3xl/none sm:text-4xl/none">
      ${text}
    </h3>
  `;
  return wrapper;
}
