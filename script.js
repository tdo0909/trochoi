const QUESTIONS = [
  {
    id: 1,
    question: 'Đảng Cộng sản Việt Nam được thành lập vào thời gian nào?',
    options: ['A. Tháng 2 năm 1920', 'B. Tháng 2 năm 1930', 'C. Tháng 8 năm 1945', 'D. Tháng 12 năm 1946'],
    answer: 'B',
    explanation: 'Đảng Cộng sản Việt Nam được thành lập vào tháng 2 năm 1930, đánh dấu sự ra đời của Đảng cách mạng lãnh đạo nhân dân Việt Nam.'
  },
  {
    id: 2,
    question: 'Thắng lợi nào đã dẫn đến sự thành lập Nhà nước Việt Nam Dân chủ Cộng hòa?',
    options: ['A. Chiến thắng Điện Biên Phủ năm 1954', 'B. Đại thắng mùa Xuân năm 1975', 'C. Cách mạng Tháng Tám năm 1945', 'D. Phong trào cách mạng 1930–1931'],
    answer: 'C',
    explanation: 'Cách mạng Tháng Tám năm 1945 đã dẫn đến sự thành lập Nhà nước Việt Nam Dân chủ Cộng hòa, khi nhân dân giành chính quyền về tay mình.'
  },
  {
    id: 3,
    question: 'Đại hội nào của Đảng đề ra đường lối đổi mới toàn diện đất nước?',
    options: ['A. Đại hội IV (1976)', 'B. Đại hội V (1982)', 'C. Đại hội VI (1986)', 'D. Đại hội VII (1991)'],
    answer: 'C',
    explanation: 'Đại hội VI của Đảng năm 1986 đã đề ra đường lối đổi mới toàn diện đất nước, mở đầu thời kỳ phát triển mới của Việt Nam.'
  },
  {
    id: 4,
    question: 'Chiến thắng Điện Biên Phủ diễn ra vào ngày nào?',
    options: ['A. 3/2/1930', 'B. 7/5/1954', 'C. 21/7/1954', 'D. 30/4/1975'],
    answer: 'B',
    explanation: 'Chiến thắng Điện Biên Phủ diễn ra vào ngày 7/5/1954, mở ra bước ngoặt lịch sử trong cuộc kháng chiến chống thực dân Pháp.'
  },
  {
    id: 5,
    question: 'Trong giai đoạn 1954–1975, Đảng lãnh đạo thực hiện nhiệm vụ cách mạng nào?',
    options: ['A. Chỉ xây dựng chủ nghĩa xã hội ở miền Nam', 'B. Chỉ tiến hành cách mạng dân tộc dân chủ ở miền Bắc', 'C. Đồng thời thực hiện hai chiến lược cách mạng ở hai miền', 'D. Chỉ tập trung phát triển kinh tế cả nước'],
    answer: 'C',
    explanation: 'Trong giai đoạn 1954–1975, Đảng lãnh đạo thực hiện đồng thời hai chiến lược cách mạng ở hai miền, nhằm giải phóng miền Nam và thống nhất đất nước.'
  },
  {
    id: 6,
    question: 'Đâu là một trong ba thắng lợi vĩ đại của cách mạng Việt Nam được nêu trong tài liệu?',
    options: ['A. Cách mạng Tháng Tám năm 1945', 'B. Phong trào Đông Du', 'C. Phong trào Cần Vương', 'D. Khởi nghĩa Yên Bái'],
    answer: 'A',
    explanation: 'Cách mạng Tháng Tám năm 1945 là một trong ba thắng lợi vĩ đại của cách mạng Việt Nam, đánh dấu sự ra đời của nước Việt Nam độc lập.'
  },
  {
    id: 7,
    question: 'Theo nội dung tài liệu, phương châm kháng chiến chống thực dân Pháp là gì?',
    options: ['A. Đánh nhanh, thắng nhanh', 'B. Toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính', 'C. Chỉ sử dụng đấu tranh ngoại giao', 'D. Chỉ dựa vào sự giúp đỡ quốc tế'],
    answer: 'B',
    explanation: 'Phương châm kháng chiến chống thực dân Pháp là “toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính”, phản ánh tinh thần kiên cường của nhân dân.'
  },
  {
    id: 8,
    question: 'Theo nội dung tài liệu, độc lập dân tộc có mối quan hệ như thế nào với chủ nghĩa xã hội?',
    options: ['A. Hai mục tiêu không liên quan đến nhau', 'B. Độc lập dân tộc gắn liền với chủ nghĩa xã hội', 'C. Chỉ cần độc lập dân tộc, không cần xây dựng đất nước', 'D. Chủ nghĩa xã hội phải được thực hiện trước khi giành độc lập'],
    answer: 'B',
    explanation: 'Độc lập dân tộc gắn liền với chủ nghĩa xã hội, vì mục tiêu cách mạng Việt Nam là giải phóng dân tộc và xây dựng xã hội công bằng, tiến bộ.'
  },
  {
    id: 9,
    question: 'Phương châm nào thể hiện việc phát huy quyền làm chủ của nhân dân?',
    options: ['A. Dân biết, dân bàn, dân làm, dân kiểm tra', 'B. Cán bộ quyết định, nhân dân thực hiện', 'C. Nhà nước làm thay mọi công việc', 'D. Chỉ tập trung phát triển kinh tế'],
    answer: 'A',
    explanation: 'Phương châm “Dân biết, dân bàn, dân làm, dân kiểm tra” thể hiện sự phát huy quyền làm chủ và vai trò quyết định của nhân dân trong xây dựng đất nước.'
  },
  {
    id: 10,
    question: 'Theo nội dung tài liệu, có bao nhiêu mối quan hệ lớn cần nhận thức và giải quyết trong quá trình đổi mới?',
    options: ['A. 5 mối quan hệ', 'B. 7 mối quan hệ', 'C. 9 mối quan hệ', 'D. 12 mối quan hệ'],
    answer: 'C',
    explanation: 'Trong quá trình đổi mới, cần nhận thức và giải quyết 9 mối quan hệ lớn, nhằm đảm bảo tiến bộ và sự ổn định của đất nước.'
  }
];

const FINAL_QUESTION = {
  id: 'final',
  question: 'Theo nội dung tổng kết lịch sử Đảng Cộng sản Việt Nam, yếu tố nào có ý nghĩa quan trọng hàng đầu bảo đảm thắng lợi của cách mạng Việt Nam?',
  options: ['A. Sự lãnh đạo đúng đắn của Đảng', 'B. Chỉ dựa vào sự giúp đỡ từ bên ngoài', 'C. Không cần phát huy sức mạnh nhân dân', 'D. Tách rời độc lập dân tộc với chủ nghĩa xã hội'],
  answer: 'A',
  explanation: 'Yếu tố hàng đầu là sự lãnh đạo đúng đắn của Đảng, kết hợp với sức mạnh của toàn dân tộc và đường lối đúng đắn của cách mạng Việt Nam.'
};

const QUESTION_SECONDS = 30;
const ALL_HOLES = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const MOLE_TICK_MS = 100;
const MUSIC_ACTIVE_PHASES = ['playing', 'openingQuestion', 'normalQuestion', 'specialQuestion', 'feedback', 'paused'];
const MUSIC_STEP_SECONDS = 0.24;
const MUSIC_MELODY = [
  659.25, 783.99, 880, 783.99, 659.25, 523.25, 587.33, 659.25,
  783.99, 880, 987.77, 880, 783.99, 659.25, 587.33, 523.25,
  587.33, 659.25, 783.99, 659.25, 587.33, 523.25, 493.88, 523.25,
  587.33, 659.25, 783.99, 880, 783.99, 659.25, 523.25, 587.33
];
const MUSIC_BASS = [261.63, null, 261.63, null, 196, null, 196, null, 220, null, 220, null, 174.61, null, 174.61, null];
const MOLE_COLORS = [
  { base: '#f1b6d0', highlight: '#fff0f5', shadow: 'rgba(190, 105, 148, 0.17)', ear: '#e9a1c0', innerEar: '#ffdae8' },
  { base: '#b5c8f6', highlight: '#f0f3ff', shadow: 'rgba(92, 113, 182, 0.17)', ear: '#9eb3e9', innerEar: '#dce6ff' },
  { base: '#a8dfca', highlight: '#eafff2', shadow: 'rgba(69, 151, 118, 0.17)', ear: '#8acdb2', innerEar: '#d5f7e7' },
  { base: '#f4c27e', highlight: '#fff5dd', shadow: 'rgba(180, 119, 43, 0.17)', ear: '#e9ad64', innerEar: '#ffe6bc' },
  { base: '#c4a8e8', highlight: '#f7eeff', shadow: 'rgba(119, 81, 163, 0.17)', ear: '#b292dc', innerEar: '#e8d8ff' },
  { base: '#9fdde4', highlight: '#e9fcff', shadow: 'rgba(54, 139, 151, 0.17)', ear: '#83cbd4', innerEar: '#d5f6fa' },
  { base: '#f2a9a0', highlight: '#fff0e9', shadow: 'rgba(177, 88, 88, 0.17)', ear: '#e9928a', innerEar: '#ffd9d3' },
  { base: '#b9d995', highlight: '#f5ffe7', shadow: 'rgba(100, 145, 57, 0.17)', ear: '#a3c77d', innerEar: '#e5f5ce' },
  { base: '#e8aeda', highlight: '#fff0fb', shadow: 'rgba(166, 87, 157, 0.17)', ear: '#d693c8', innerEar: '#f8d7f0' },
  { base: '#aeb8d8', highlight: '#f0f3ff', shadow: 'rgba(80, 93, 143, 0.17)', ear: '#969fc5', innerEar: '#dce1f6' }
];

const game = {
  phase: 'start',
  previousPhase: null,
  normalQuestionsResolved: 0,
  resolvedQuestionIds: new Set(),
  currentQuestionId: null,
  activeMoles: [],
  currentQuestion: null,
  currentQuestionNumber: 0,
  currentQuestionType: null,
  answerLocked: false,
  soundEnabled: true,
  musicVolume: 0.6,
  gameStartedAt: 0,
  questionDeadline: 0,
  moleTimer: null,
  questionTimer: null,
  musicTimer: null,
  musicStartedAt: 0,
  musicStep: 0,
  musicGeneration: 0,
  transitionTimer: null,
  toastTimer: null,
  hammerTimer: null,
  burstTimer: null,
  auxiliaryTimers: new Set(),
  pauseStartedAt: 0,
  lastBeepSecond: null,
  audioContext: null,
  musicGainNode: null,
  audioResumePromise: null,
  stats: createStats(),
  moleNextAt: 0,
  waveHideAt: 0
};

const elements = {};
const moleElements = new Map();

function createStats() {
  return {
    score: 0,
    correct: 0,
    wrong: 0,
    timedOut: 0
  };
}

function initialize() {
  cacheElements();
  createBoard();
  bindEvents();
  updateProgress();
  setStatus('Sẵn sàng chưa nào?');
}

function cacheElements() {
  const ids = [
    'board', 'score-value', 'progress-value', 'progress-bar', 'timer-value',
    'game-status', 'start-screen', 'question-screen', 'pause-screen',
    'result-screen', 'start-btn', 'pause-btn', 'resume-btn', 'replay-btn',
    'sound-btn', 'music-volume', 'music-volume-value', 'question-badge', 'question-title', 'answer-list',
    'question-feedback', 'question-timer', 'question-timer-bar',
    'question-timer-track', 'result-title', 'result-eyebrow', 'result-mascot',
    'result-stats', 'toast', 'hammer', 'hit-burst', 'machine'
  ];

  ids.forEach((id) => {
    elements[id] = document.getElementById(id);
  });

  const aliases = {
    startBtn: 'start-btn',
    replayBtn: 'replay-btn',
    pauseBtn: 'pause-btn',
    resumeBtn: 'resume-btn',
    soundBtn: 'sound-btn',
    musicVolume: 'music-volume',
    musicVolumeValue: 'music-volume-value',
    answerList: 'answer-list',
    timerValue: 'timer-value',
    questionTimer: 'question-timer',
    questionTimerBar: 'question-timer-bar',
    questionTimerTrack: 'question-timer-track',
    startScreen: 'start-screen',
    questionScreen: 'question-screen',
    pauseScreen: 'pause-screen',
    resultScreen: 'result-screen',
    hitBurst: 'hit-burst'
  };
  Object.entries(aliases).forEach(([name, id]) => {
    elements[name] = elements[id];
  });
}

function createBoard() {
  elements.board.replaceChildren();
  moleElements.clear();

  for (let holeIndex = 0; holeIndex < 9; holeIndex += 1) {
    const hole = document.createElement('div');
    hole.className = 'hole';
    hole.dataset.hole = String(holeIndex);
    elements.board.append(hole);
  }

  QUESTIONS.forEach((question, questionIndex) => {
    const mole = document.createElement('button');
    mole.type = 'button';
    mole.className = 'mole normal-mole';
    mole.dataset.questionId = String(questionIndex);
    mole.setAttribute('aria-label', `Chuột câu hỏi ${questionIndex + 1}`);
    mole.style.setProperty('--mouse-base', MOLE_COLORS[questionIndex].base);
    mole.style.setProperty('--mouse-highlight', MOLE_COLORS[questionIndex].highlight);
    mole.style.setProperty('--mouse-shadow', MOLE_COLORS[questionIndex].shadow);
    mole.style.setProperty('--mouse-ear', MOLE_COLORS[questionIndex].ear);
    mole.style.setProperty('--mouse-inner-ear', MOLE_COLORS[questionIndex].innerEar);
    mole.innerHTML = `
      <span class="ear ear-left" aria-hidden="true"></span>
      <span class="ear ear-right" aria-hidden="true"></span>
      <span class="mouse-head">
        <span class="eye eye-left" aria-hidden="true"></span>
        <span class="eye eye-right" aria-hidden="true"></span>
        <span class="cheek cheek-left" aria-hidden="true"></span>
        <span class="cheek cheek-right" aria-hidden="true"></span>
        <span class="whiskers whiskers-left" aria-hidden="true"></span>
        <span class="whiskers whiskers-right" aria-hidden="true"></span>
        <span class="nose" aria-hidden="true"></span>
        <span class="mouth" aria-hidden="true"></span>
      </span>`;
    moleElements.set(String(questionIndex), mole);
  });

  const specialMole = document.createElement('button');
  specialMole.type = 'button';
  specialMole.className = 'mole special-mole';
  specialMole.dataset.questionId = 'final';
  specialMole.setAttribute('aria-label', 'Chuột vàng - câu hỏi đặc biệt');
  specialMole.innerHTML = `
    <span class="orbit-star star-a" aria-hidden="true">✦</span>
    <span class="orbit-star star-b" aria-hidden="true">✧</span>
    <span class="crown" aria-hidden="true">♛</span>
    <span class="ear ear-left" aria-hidden="true"></span>
    <span class="ear ear-right" aria-hidden="true"></span>
    <span class="mouse-head">
      <span class="eye eye-left" aria-hidden="true"></span>
      <span class="eye eye-right" aria-hidden="true"></span>
      <span class="cheek cheek-left" aria-hidden="true"></span>
      <span class="cheek cheek-right" aria-hidden="true"></span>
      <span class="whiskers whiskers-left" aria-hidden="true"></span>
      <span class="whiskers whiskers-right" aria-hidden="true"></span>
      <span class="nose" aria-hidden="true"></span>
      <span class="mouth" aria-hidden="true"></span>
    </span>`;
  moleElements.set('final', specialMole);
}

function bindEvents() {
  elements.startBtn.addEventListener('click', startGame);
  elements.replayBtn.addEventListener('click', startGame);
  elements.pauseBtn.addEventListener('click', pauseGame);
  elements.resumeBtn.addEventListener('click', resumeGame);
  elements.soundBtn.addEventListener('click', toggleSound);
  elements.musicVolume.addEventListener('input', updateMusicVolume);

  elements.board.addEventListener('click', (event) => {
    const mole = event.target.closest('.mole');
    if (!mole || !mole.classList.contains('is-up')) return;
    hitMole(mole, event);
  });

  elements.answerList.addEventListener('click', (event) => {
    const button = event.target.closest('.answer-btn');
    if (!button || button.disabled) return;
    handleAnswer(button.dataset.answer);
  });
}

function startGame() {
  clearAllTimers();
  hideAllOverlays();
  resetMoles();
  clearEffects();

  game.phase = 'playing';
  game.previousPhase = null;
  game.normalQuestionsResolved = 0;
  game.resolvedQuestionIds = new Set();
  game.currentQuestionId = null;
  game.activeMoles = [];
  game.currentQuestion = null;
  game.currentQuestionNumber = 0;
  game.currentQuestionType = null;
  game.answerLocked = false;
  game.gameStartedAt = Date.now();
  game.questionDeadline = 0;
  game.pauseStartedAt = 0;
  game.lastBeepSecond = null;
  game.stats = createStats();
  game.moleNextAt = Date.now() + 300;
  game.waveHideAt = 0;

  elements.pauseBtn.disabled = false;
  elements.pauseBtn.innerHTML = '<span aria-hidden="true">Ⅱ</span> Tạm dừng';
  elements.timerValue.textContent = '30';
  elements.questionTimer.textContent = '30';
  elements.questionTimerBar.style.width = '100%';
  elements.questionTimerTrack.classList.remove('warning', 'danger');
  updateScore();
  updateProgress();
  setStatus('Đập chú chuột có màu bạn muốn!');
  initAudio();
  playTone(580, 0.1, 'sine', 0.035);
  startBackgroundMusic();
  startMoleScheduler();
}

function clearAllTimers() {
  stopBackgroundMusic();
  clearTimeout(game.moleTimer);
  clearTimeout(game.transitionTimer);
  clearTimeout(game.toastTimer);
  clearTimeout(game.hammerTimer);
  clearTimeout(game.burstTimer);
  clearInterval(game.questionTimer);
  game.auxiliaryTimers.forEach((timer) => clearTimeout(timer));
  game.auxiliaryTimers.clear();
  game.moleTimer = null;
  game.transitionTimer = null;
  game.toastTimer = null;
  game.hammerTimer = null;
  game.burstTimer = null;
  game.questionTimer = null;
}

function clearEffects() {
  elements.toast.classList.remove('visible');
  elements.hammer.classList.remove('swing');
  elements.hitBurst.classList.remove('burst');
}

function resetMoles() {
  hideAllMoles();
  game.moleNextAt = 0;
  game.waveHideAt = 0;
}

function hideAllOverlays() {
  elements.startScreen.classList.add('hidden');
  elements.questionScreen.classList.add('hidden');
  elements.pauseScreen.classList.add('hidden');
  elements.resultScreen.classList.add('hidden');
}

function setStatus(message) {
  elements['game-status'].textContent = message;
}

function updateScore() {
  elements['score-value'].textContent = String(game.stats.score);
}

function updateProgress() {
  const answered = game.resolvedQuestionIds.size;
  const totalQuestions = QUESTIONS.length + 1;
  elements['progress-value'].textContent = `Câu ${answered}/${totalQuestions}`;
  elements['progress-bar'].style.width = `${(answered / totalQuestions) * 100}%`;
}

function startMoleScheduler() {
  clearTimeout(game.moleTimer);
  if (game.phase !== 'playing') return;

  game.moleTimer = window.setTimeout(runMoleScheduler, MOLE_TICK_MS);
}

function runMoleScheduler() {
  if (game.phase !== 'playing') return;

  const now = Date.now();
  if (game.activeMoles.length > 0) {
    if (now >= game.waveHideAt) {
      hideAllMoles();
      game.moleNextAt = now + randomBetween(250, 400);
    }
    startMoleScheduler();
    return;
  }

  if (game.resolvedQuestionIds.size >= QUESTIONS.length + 1) {
    finishGame();
    return;
  }
  if (now >= game.moleNextAt) showMoleWave(now);
  startMoleScheduler();
}

function showMoleWave(now) {
  const remainingQuestionIds = [
    ...QUESTIONS.map((question, index) => String(index)),
    'final'
  ].filter((questionId) => !game.resolvedQuestionIds.has(questionId));
  const count = Math.min(randomBetween(3, 4), remainingQuestionIds.length);
  const selectedQuestionIds = shuffle(remainingQuestionIds).slice(0, count);
  const availableHoles = shuffle(ALL_HOLES);
  game.activeMoles = [];

  selectedQuestionIds.forEach((questionId, index) => {
    const mole = moleElements.get(questionId);
    const hole = elements.board.querySelector(`.hole[data-hole="${availableHoles[index]}"]`);
    if (!mole || !hole) return;
    mole.classList.remove('is-hit');
    mole.classList.add('is-up');
    hole.append(mole);
    game.activeMoles.push(mole);
  });

  if (game.activeMoles.length === 0) {
    game.moleNextAt = now + 300;
    return;
  }
  game.waveHideAt = now + randomBetween(1800, 2200);
  game.moleNextAt = game.waveHideAt;
  if (selectedQuestionIds.includes('final')) playTone(760, 0.1, 'sine', 0.045);
}

function hideAllMoles(preservedMole = null) {
  moleElements.forEach((mole) => {
    if (mole === preservedMole) return;
    mole.classList.remove('is-up', 'is-hit');
    mole.remove();
  });
  game.activeMoles = preservedMole ? [preservedMole] : [];
  game.waveHideAt = 0;
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function randomBetween(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function hitMole(mole, event) {
  if (game.phase !== 'playing' || !game.activeMoles.includes(mole)) return;
  const questionId = mole.dataset.questionId;
  if (!questionId || game.resolvedQuestionIds.has(questionId)) return;
  const isSpecial = questionId === 'final';
  const questionIndex = isSpecial ? null : Number(questionId);
  const question = isSpecial ? FINAL_QUESTION : QUESTIONS[questionIndex];
  if (!question) return;

  game.phase = 'openingQuestion';
  game.currentQuestionId = questionId;
  game.currentQuestion = question;
  game.currentQuestionNumber = isSpecial ? QUESTIONS.length + 1 : questionIndex + 1;
  game.currentQuestionType = isSpecial ? 'special' : 'normal';
  game.answerLocked = false;
  clearTimeout(game.moleTimer);
  game.moleTimer = null;
  showHitEffects(event.clientX, event.clientY);
  mole.classList.add('is-hit');
  hideAllMoles(mole);
  scheduleAuxiliary(() => {
    mole.remove();
    game.activeMoles = [];
  }, 180);
  updateProgress();
  setStatus(isSpecial
    ? 'Chuột huyền thoại! Trả lời câu hỏi đặc biệt nhé!'
    : `Chuột câu ${game.currentQuestionNumber}! Trả lời nào!`);
  playTone(isSpecial ? 980 : 510, 0.12, isSpecial ? 'triangle' : 'sine', 0.06);
  game.transitionTimer = window.setTimeout(() => {
    openQuestion(question, isSpecial ? 'special' : 'normal', game.currentQuestionNumber);
  }, 220);
}

function showHitEffects(x, y) {
  elements.hammer.style.left = `${x}px`;
  elements.hammer.style.top = `${y}px`;
  elements.hammer.classList.remove('swing');
  elements.hitBurst.style.left = `${x}px`;
  elements.hitBurst.style.top = `${y}px`;
  elements.hitBurst.classList.remove('burst');
  void elements.hammer.offsetWidth;
  elements.hammer.classList.add('swing');
  elements.hitBurst.classList.add('burst');
  clearTimeout(game.hammerTimer);
  clearTimeout(game.burstTimer);
  game.hammerTimer = window.setTimeout(() => elements.hammer.classList.remove('swing'), 380);
  game.burstTimer = window.setTimeout(() => elements.hitBurst.classList.remove('burst'), 480);
  playTone(250, 0.08, 'triangle', 0.055);
}

function openQuestion(question, type, questionNumber) {
  if (game.phase === 'result') return;
  elements.hammer.classList.remove('swing');
  elements.hitBurst.classList.remove('burst');
  game.currentQuestion = question;
  game.currentQuestionType = type;
  game.currentQuestionNumber = questionNumber;
  game.phase = type === 'special' ? 'specialQuestion' : 'normalQuestion';
  game.answerLocked = false;

  elements['question-badge'].textContent = type === 'special'
    ? 'CÂU HỎI CHUỘT VÀNG'
    : `CÂU HỎI THƯỜNG ${questionNumber}/${QUESTIONS.length}`;
  elements['question-title'].textContent = question.question;
  elements['question-feedback'].textContent = '';
  elements['question-feedback'].className = 'question-feedback';
  elements['answer-list'].replaceChildren();

  question.options.forEach((option) => {
    const button = document.createElement('button');
    const answer = option.charAt(0);
    button.type = 'button';
    button.className = 'answer-btn';
    button.dataset.answer = answer;
    button.innerHTML = `<span class="answer-letter">${answer}</span><span>${escapeHTML(option.slice(3))}</span>`;
    elements['answer-list'].append(button);
  });

  elements['question-timer'].textContent = String(QUESTION_SECONDS);
  elements['question-timer-bar'].style.width = '100%';
  elements['question-timer-track'].classList.remove('warning', 'danger');
  elements['question-screen'].classList.remove('hidden');
  game.questionDeadline = Date.now() + QUESTION_SECONDS * 1000;
  game.lastBeepSecond = null;
  startQuestionTimer();
  playTone(430, 0.11, 'sine', 0.04);
}

function startQuestionTimer() {
  clearInterval(game.questionTimer);
  game.questionTimer = window.setInterval(updateQuestionTimer, 100);
  updateQuestionTimer();
}

function updateQuestionTimer() {
  if (game.phase !== 'normalQuestion' && game.phase !== 'specialQuestion') return;
  const remainingMs = Math.max(0, game.questionDeadline - Date.now());
  const remainingSeconds = Math.ceil(remainingMs / 1000);
  elements['question-timer'].textContent = String(remainingSeconds);
  elements['question-timer-bar'].style.width = `${(remainingMs / (QUESTION_SECONDS * 1000)) * 100}%`;
  elements['question-timer-track'].classList.toggle('warning', remainingSeconds <= 10 && remainingSeconds > 5);
  elements['question-timer-track'].classList.toggle('danger', remainingSeconds <= 5);
  elements['timer-value'].textContent = String(remainingSeconds);

  if (remainingSeconds <= 10 && remainingSeconds > 0 && game.lastBeepSecond !== remainingSeconds) {
    game.lastBeepSecond = remainingSeconds;
    playTone(remainingSeconds <= 5 ? 730 : 540, 0.07, 'sine', 0.025);
  }

  if (remainingMs <= 0) {
    clearInterval(game.questionTimer);
    game.questionTimer = null;
    handleTimeout();
  }
}

function handleAnswer(answer) {
  if ((game.phase !== 'normalQuestion' && game.phase !== 'specialQuestion') || game.answerLocked) return;
  game.answerLocked = true;
  clearInterval(game.questionTimer);
  game.questionTimer = null;

  const correct = answer === game.currentQuestion.answer;
  showAnswerFeedback(answer, correct, false);

  if (correct) {
    game.stats.correct += 1;
    game.stats.score += game.currentQuestionType === 'special' ? 500 : 100;
    setStatus('Chính xác! Tuyệt lắm!');
    playTone(660, 0.14, 'triangle', 0.065);
    scheduleAuxiliary(() => playTone(880, 0.17, 'triangle', 0.055), 110);
  } else {
    game.stats.wrong += 1;
    setStatus('Chưa đúng, mình học từ đáp án nhé!');
    playTone(190, 0.2, 'sawtooth', 0.035);
  }

  updateScore();
  game.phase = 'feedback';
  game.transitionTimer = window.setTimeout(() => completeQuestion(correct, false), 1900);
}

function handleTimeout() {
  if ((game.phase !== 'normalQuestion' && game.phase !== 'specialQuestion') || game.answerLocked) return;
  game.answerLocked = true;
  game.stats.wrong += 1;
  game.stats.timedOut += 1;
  showAnswerFeedback(null, false, true);
  setStatus('Hết thời gian! Câu hỏi đã được ghi nhận.');
  playTone(160, 0.24, 'sawtooth', 0.04);
  game.phase = 'feedback';
  game.transitionTimer = window.setTimeout(() => completeQuestion(false, true), 1900);
}

function showAnswerFeedback(selectedAnswer, correct, timedOut) {
  elements['answer-list'].querySelectorAll('.answer-btn').forEach((button) => {
    const answer = button.dataset.answer;
    button.disabled = true;
    if (answer === game.currentQuestion.answer) {
      button.classList.add('correct');
    } else if (answer === selectedAnswer && !correct) {
      button.classList.add('wrong');
    }
  });

  const heading = timedOut ? 'HẾT THỜI GIAN!' : correct ? 'CHÍNH XÁC!' : 'CHƯA ĐÚNG!';
  elements['question-feedback'].textContent = `${heading} ${game.currentQuestion.explanation}`;
  elements['question-feedback'].className = `question-feedback ${correct ? 'feedback-correct' : 'feedback-wrong'}`;
}

function completeQuestion(correct, timedOut) {
  elements['question-screen'].classList.add('hidden');
  if (game.currentQuestionId === null) return;
  game.resolvedQuestionIds.add(game.currentQuestionId);
  if (game.currentQuestionId !== 'final') game.normalQuestionsResolved += 1;
  hideAllMoles();
  updateProgress();
  if (game.resolvedQuestionIds.size >= QUESTIONS.length + 1) {
    finishGame();
    return;
  }

  game.phase = 'playing';
  game.currentQuestionId = null;
  game.currentQuestion = null;
  game.currentQuestionType = null;
  game.answerLocked = false;
  game.moleNextAt = Date.now() + 250;
  game.waveHideAt = 0;
  elements['timer-value'].textContent = String(QUESTION_SECONDS);
  setStatus(timedOut
    ? 'Chuột đã biến mất! Những câu còn lại sắp xuất hiện.'
    : correct
      ? 'Tuyệt! Những chú chuột còn lại đang chờ bạn.'
      : 'Chuột đã biến mất! Tiếp tục tìm các câu còn lại nhé.');
  startMoleScheduler();
}

function finishGame() {
  clearAllTimers();
  hideAllMoles();
  game.phase = 'result';
  game.answerLocked = true;
  elements['question-screen'].classList.add('hidden');
  elements['pause-screen'].classList.add('hidden');
  elements.pauseBtn.disabled = true;
  elements['result-title'].textContent = 'Lượt chơi hoàn tất!';
  elements['result-eyebrow'].textContent = 'BẠN ĐÃ ĐẬP HẾT CHUỘT!';
  elements['result-mascot'].textContent = '🏆';
  elements['result-stats'].innerHTML = `
    <div class="result-stat"><span>TỔNG ĐIỂM</span><strong>${game.stats.score}</strong></div>
    <div class="result-stat"><span>CÂU ĐÚNG</span><strong>${game.stats.correct}</strong></div>
    <div class="result-stat"><span>CÂU SAI</span><strong>${game.stats.wrong}</strong></div>
    <div class="result-stat"><span>HẾT THỜI GIAN</span><strong>${game.stats.timedOut}</strong></div>
    <div class="result-stat"><span>THỜI GIAN CHƠI</span><strong>${formatDuration(Date.now() - game.gameStartedAt)}</strong></div>
    <div class="result-stat"><span>CÂU THƯỜNG ĐÃ DÙNG</span><strong>${game.normalQuestionsResolved}/10</strong></div>`;
  elements['result-screen'].classList.remove('hidden');
  setStatus('Bạn đã đập hết chuột!');
  playTone(820, 0.24, 'triangle', 0.055);
}

function formatDuration(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return minutes ? `${minutes}p ${seconds}s` : `${seconds}s`;
}

function pauseGame() {
  if (!['playing', 'normalQuestion', 'specialQuestion'].includes(game.phase)) return;
  game.previousPhase = game.phase;
  game.pauseStartedAt = Date.now();
  game.phase = 'paused';
  clearTimeout(game.moleTimer);
  clearInterval(game.questionTimer);
  game.moleTimer = null;
  game.questionTimer = null;
  elements.pauseScreen.classList.remove('hidden');
  elements.pauseBtn.innerHTML = '<span aria-hidden="true">▶</span> Tiếp tục';
}

function resumeGame() {
  if (game.phase !== 'paused') return;
  const pauseDuration = Date.now() - game.pauseStartedAt;
  game.questionDeadline += game.previousPhase === 'normalQuestion' || game.previousPhase === 'specialQuestion' ? pauseDuration : 0;
  if (game.waveHideAt) game.waveHideAt += pauseDuration;
  if (game.moleNextAt) game.moleNextAt += pauseDuration;
  game.phase = game.previousPhase;
  game.previousPhase = null;
  elements.pauseScreen.classList.add('hidden');
  elements.pauseBtn.innerHTML = '<span aria-hidden="true">Ⅱ</span> Tạm dừng';

  if (game.phase === 'normalQuestion' || game.phase === 'specialQuestion') {
    startQuestionTimer();
  } else {
    startMoleScheduler();
  }
  startBackgroundMusic();
}

function toggleSound() {
  game.soundEnabled = !game.soundEnabled;
  elements['sound-btn'].setAttribute('aria-pressed', String(game.soundEnabled));
  elements['sound-btn'].setAttribute('aria-label', game.soundEnabled ? 'Tắt nhạc nền và hiệu ứng âm thanh' : 'Bật nhạc nền và hiệu ứng âm thanh');
  elements['sound-btn'].innerHTML = game.soundEnabled
    ? '<span aria-hidden="true">🎵</span> Nhạc'
    : '<span aria-hidden="true">🔇</span> Tắt tiếng';
  if (game.soundEnabled) {
    initAudio();
    playTone(620, 0.08, 'sine', 0.04);
    if (MUSIC_ACTIVE_PHASES.includes(game.phase)) {
      startBackgroundMusic();
    }
  } else {
    stopBackgroundMusic();
  }
}

function updateMusicVolume() {
  const volume = Number(elements.musicVolume.value) / 100;
  game.musicVolume = volume;
  elements.musicVolumeValue.textContent = `${elements.musicVolume.value}%`;
  if (game.musicGainNode && game.audioContext) {
    game.musicGainNode.gain.setTargetAtTime(volume, game.audioContext.currentTime, 0.025);
  }
}

function showToast(message, duration = 1800) {
  clearTimeout(game.toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add('visible');
  game.toastTimer = window.setTimeout(() => elements.toast.classList.remove('visible'), duration);
}

function scheduleAuxiliary(callback, delay) {
  const timer = window.setTimeout(() => {
    game.auxiliaryTimers.delete(timer);
    callback();
  }, delay);
  game.auxiliaryTimers.add(timer);
  return timer;
}

function initAudio() {
  if (!game.soundEnabled) return null;
  if (game.audioContext) return game.audioContext;
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) return null;
  try {
    game.audioContext = new AudioContextConstructor();
    game.musicGainNode = game.audioContext.createGain();
    game.musicGainNode.gain.value = game.musicVolume;
    game.musicGainNode.connect(game.audioContext.destination);
  } catch {
    game.audioContext = null;
    game.musicGainNode = null;
  }
  return game.audioContext;
}

function ensureAudioReady() {
  const context = initAudio();
  if (!context) return Promise.resolve(null);
  if (context.state === 'running') return Promise.resolve(context);
  if (!game.audioResumePromise) {
    game.audioResumePromise = context.resume()
      .then(() => context.state === 'running' ? context : null)
      .catch(() => null)
      .finally(() => {
        game.audioResumePromise = null;
      });
  }
  return game.audioResumePromise;
}

function playTone(frequency, duration, type = 'sine', volume = 0.04) {
  if (!game.soundEnabled) return;
  ensureAudioReady().then((context) => {
    if (!context || !game.soundEnabled) return;
    try {
      const now = context.currentTime;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, now);
      gain.gain.setValueAtTime(volume, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(now);
      oscillator.stop(now + duration);
    } catch {
      return;
    }
  });
}

function startBackgroundMusic() {
  if (game.musicTimer) return;
  stopBackgroundMusic();
  if (!game.soundEnabled || !MUSIC_ACTIVE_PHASES.includes(game.phase)) return;
  const generation = game.musicGeneration;
  ensureAudioReady().then((context) => {
    if (!context || generation !== game.musicGeneration || !game.soundEnabled ||
      !MUSIC_ACTIVE_PHASES.includes(game.phase)) return;
    game.musicStep = 0;
    game.musicStartedAt = context.currentTime;
    playMusicStep(game.musicStep);
    game.musicStep += 1;
    game.musicTimer = window.setInterval(() => {
      if (!game.soundEnabled || !game.audioContext || game.audioContext.state !== 'running' ||
        !MUSIC_ACTIVE_PHASES.includes(game.phase)) {
        stopBackgroundMusic();
        return;
      }

      const elapsed = context.currentTime - game.musicStartedAt;
      const dueStep = Math.floor(elapsed / MUSIC_STEP_SECONDS);
      while (game.musicStep <= dueStep) {
        playMusicStep(game.musicStep);
        game.musicStep += 1;
      }
    }, 80);
  });
}

function stopBackgroundMusic() {
  clearInterval(game.musicTimer);
  game.musicTimer = null;
  game.musicGeneration += 1;
}

function playMusicStep(step) {
  if (!game.audioContext || !game.soundEnabled) return;
  const melodyFrequency = MUSIC_MELODY[step % MUSIC_MELODY.length];
  if (melodyFrequency) {
    playAudioNote(melodyFrequency, 0.22, 'triangle', 0.085, game.audioContext.currentTime);
  }

  const bassFrequency = MUSIC_BASS[step % MUSIC_BASS.length];
  if (bassFrequency) {
    playAudioNote(bassFrequency, 0.4, 'sine', 0.065, game.audioContext.currentTime);
  }
}

function playAudioNote(frequency, duration, type, volume, startAt) {
  try {
    if (!game.musicGainNode) return;
    const oscillator = game.audioContext.createOscillator();
    const gain = game.audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, startAt);
    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
    oscillator.connect(gain);
    gain.connect(game.musicGainNode);
    oscillator.start(startAt);
    oscillator.stop(startAt + duration);
  } catch {
    stopBackgroundMusic();
  }
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

initialize();
