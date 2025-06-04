const questions = [
  {
    question:
      "Durante l'anamnesi le linee guida raccomandano di raccogliere informazioni riguardo le attività lavorative svolte dal paziente, focalizzandosi solo sulle mansioni che comportano un contatto frequente con l'acqua.",
    correctAnswer: false,
    description: {
      true: 'Peccato, hai risposto in modo sbagliato! La risposta giusta è: Attività che comportano contatto frequente con l’acqua, all’esposizione attuale e pregressa, in ambito lavorativo, domestico e ricreativo, ad allergeni da contatto e sostanze irritanti conosciuti',
      false:
        'Benissimo, hai risposto in modo corretto! La risposta giusta è: Attività che comportano contatto frequente con l’acqua, all’esposizione attuale e pregressa, in ambito lavorativo, domestico e ricreativo, ad allergeni da contatto e sostanze irritanti conosciuti',
    },
  },
  {
    question:
      'È importante conoscere tutte le malattie cutanee o sistemiche precedenti o concomitanti alle lesioni cutanee alle mani?',
    correctAnswer: true,
    description: {
      true: 'Benissimo, hai risposto in modo corretto!',
      false: 'Peccato, hai risposto in modo sbagliato',
    },
  },
];

let current = 0;
let answered = false;

const app = document.getElementById('game-vero-o-falso');

function renderQuestion() {
  const q = questions[current];
  answered = false;

  app.innerHTML = `
    <div class="text-left mb-6">
      <h2 class="text-xl/5 font-medium -tracking-wider">
        <span class="font-bold">CHE</span>DIAGNOSI - ${current + 1}
      </h2>
    </div>

    <div class="flex flex-col flex-1">
      <div class="w-[76%] sm:w-[80%] max-w-[382px] min-h-39 flex relative">
        <p class="pr-2">${q.question}</p>
        <div class="absolute -top-11 -right-24 sm:-right-28">
          <img src="/assets/images/mascot-question.webp" alt="" class="w-auto h-28 sm:h-32" />
        </div>
      </div>

      <div class="mt-7.5 flex items-center gap-5">
        <button id="btn-vero" onclick="answer(true)" class="border border-black rounded-full w-full sm:w-31 h-10.75 font-medium enabled:hover:bg-dark-slate-blue-3/5 text-black">VERO</button>
        <button id="btn-falso" onclick="answer(false)" class="border border-black rounded-full w-full sm:w-31 h-10.75 font-medium enabled:hover:bg-dark-slate-blue-3/5 text-black">FALSO</button>
      </div>

      <div id="game-vero-o-falso-explanation" class="mt-18 opacity-0">
        <div class="mb-5.25">
          <p>
            Risposta corretta: <br class="sm:hidden" /><span class="font-bold">${
              q.correctAnswer ? 'VERO' : 'FALSO'
            }</span>
          </p>
        </div>

        <div class="p-2.5 lg:px-5.5 lg:py-4.5 min-h-[150px] relative flex items-center justify-center font-bold text-white text-base/5 lg:text-lg/5.75 text-center bg-dark-slate-blue-2/50 rounded-2.5xl">
          <div class="absolute -top-26 sm:-top-29 -right-0.5">
            <img id="mascot-game-answer" src="/assets/images/mascot-correct.webp" alt="answer" class="w-auto h-28 sm:h-32" />
          </div>
          <p id="game-vero-o-falso-description"></p>
        </div>
      </div>
    </div>

    <div class="flex justify-end mt-11.75">
      <button id="game-vero-o-falso-btn-next" disabled="true" onclick="nextQuestion()" class="transition-all duration-300 flex items-center disabled:opacity-20">
        <span class="px-6 py-3 font-medium rounded-full border border-black text-lg/none sm:text-xl/5 -tracking-wider flex items-center justify-center">PROSSIMA DOMANDA</span>
        <span class="rounded-full border border-black flex items-center justify-center size-11">
          <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9091 1.35718C18.9091 0.915347 18.551 0.557175 18.1091 0.557175L10.9091 0.557176C10.4673 0.557175 10.1091 0.915348 10.1091 1.35718C10.1091 1.799 10.4673 2.15718 10.9091 2.15718L17.3091 2.15718L17.3091 8.55718C17.3091 8.999 17.6673 9.35718 18.1091 9.35718C18.551 9.35718 18.9091 8.999 18.9091 8.55718L18.9091 1.35718ZM1.43397 19.1637L18.6748 1.92286L17.5434 0.79149L0.302601 18.0323L1.43397 19.1637Z" fill="black"/>
          </svg>
        </span>
      </button>
    </div>
  `;
}

function answer(isTrue) {
  if (answered) return;
  answered = true;

  const q = questions[current];
  const isCorrect = isTrue === q.correctAnswer;
  const btnTrue = document.getElementById('btn-vero');
  const btnFalse = document.getElementById('btn-falso');
  const btnNext = document.getElementById('game-vero-o-falso-btn-next');

  if (isTrue) {
    btnTrue.classList.remove('text-black');
    btnTrue.classList.add('bg-dark-slate-blue-3', 'text-white');
  } else {
    btnFalse.classList.remove('text-black');
    btnFalse.classList.add('bg-dark-slate-blue-3', 'text-white');
  }

  btnTrue.disabled = true;
  btnFalse.disabled = true;

  btnNext.disabled = false;

  const explanation = document.getElementById('game-vero-o-falso-explanation');
  explanation.classList.remove('opacity-0');

  const mascotImage = document.getElementById('mascot-game-answer');
  mascotImage.src = `/assets/images/mascot-${
    isCorrect ? 'correct' : 'wrong'
  }.webp`;

  const description = document.getElementById('game-vero-o-falso-description');
  description.textContent = q.description[isTrue];
}

function nextQuestion() {
  current++;
  if (current >= questions.length) {
    window.location.href = '/final.html';
  } else {
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

// Start
renderQuestion();
