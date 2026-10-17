// Дата старта (17 октября 2026)
const startDate = new Date("2026-10-17T00:00:00");

// Массив причин (100)
const reasons = [
  "Because you are shy. You don't try to be the centre of attention, and that is exactly what makes you so special to me.",
  "Because you know how to listen. I can talk to you about anything, and I know you will always understand me.",
  "Because you care about me. You worry about me even when I don't ask you to, and that means more than you know.",
  "Because you laugh at my jokes. Even when they are stupid, you still smile, and that makes my whole day better.",
  'Because you called me "ljubavi" first. I still remember that moment, and it still makes me smile.',
  "Because you have beautiful eyes. They are smart and kind, and I could look into them forever.",
  "Because you are smart. You study hard and you know so much, and I admire your mind.",
  "Because you are strong. You go through difficult school days and still find time to talk to me.",
  "Because you are honest. You don't pretend to be someone you are not, and I love that about you.",
  "Because you are beautiful. Not just on the outside, but on the inside too.",
  'Because you send me sweet messages. Even a simple "good morning" from you makes me happy.',
  "Because you trust me. You share your feelings and your problems with me, and I know that is not easy.",
  "Because you are patient. You wait for my messages and my calls, and you never complain.",
  "Because you love your family. I see how much you care about them, and it shows me what kind of person you are.",
  "Because you are close with your sister. The bond you have with Filipa is beautiful, and I love that you have someone like her.",
  'Because you always say "thank you". You appreciate the little things, and it makes me want to do more for you.',
  "Because you are not afraid to be yourself. You don't try to impress anyone, and that is so attractive.",
  "Because you send me your photos. Even if you are shy, you still share your moments with me.",
  "Because you listen to my voice messages. I know you can't always answer, but I know you hear me.",
  'Because you miss me. When you say "I miss you too", my heart melts.',
  "Because you worry about my health. You ask me if I am okay, and it shows me you really care.",
  "Because you are disciplined. You study every day, and I respect that so much.",
  "Because you don't give up. Even when school is hard, you keep going.",
  "Because you are gentle. Your words are always kind, and your heart is soft.",
  "Because you are calm. You don't create drama, and I feel peaceful when I talk to you.",
  "Because you make me feel special. You don't treat me like just any guy.",
  "Because you chose me. Out of everyone, you chose me, and I will never forget that.",
  "Because you are my first love. You will always have a special place in my heart.",
  "Because you are from Serbia. I love learning about your culture and your language because of you.",
  "Because you try to understand me. Even when English is hard for you, you still try, and I appreciate every word you say.",
  "Because you are proud of your country. I love how you talk about Serbia.",
  "Because you are a good student. You care about your future, and I know you will succeed.",
  "Because you are modest. You never brag, and that is so rare.",
  "Because you are loyal. I know you would never betray me.",
  "Because you are fun. I love it when we laugh together on calls.",
  "Because you are curious. You ask me questions about my life, and I love answering them.",
  "Because you are a good friend. I can see how much your friends love you.",
  "Because you respect your parents. I admire the way you treat them.",
  "Because you are serious about us. I can see that you want this to work.",
  'Because you are not afraid to say "I love you". Even if you are shy, you still say it, and it means everything.',
  "Because you look beautiful without makeup. Your natural face is the most beautiful.",
  "Because you have a good heart. You care about people, and it shows.",
  "Because you never judge me. I can tell you anything, and you don't make me feel bad.",
  "Because you support my dreams. You want me to succeed, and I feel it.",
  'Because you are proud of me. When I do something good, you always say "bravo".',
  "Because you are my safe place. With you, I can be completely honest and not be afraid of anything.",
  "Because you send me cute stickers. They always make me smile.",
  "Because you always respond. Even if it takes time, you always answer me.",
  "Because you make time for me. Even when you are busy, you find a moment to text me.",
  "Because you are my peace. After a long day, talking to you calms me down.",
  "Because you are my joy. You make the ordinary days feel special.",
  "Because you are my motivation. I want to be a better man for you.",
  "Because you are my future. I see you in my plans, and I hope you see me in yours.",
  "Because you are real. You are not a fantasy; you are a real, wonderful girl.",
  "Because you are worth waiting for. I would wait a lifetime to see you.",
  "Because you make me want to be better. Every day with you makes me want to grow and become a better man.",
  "Because you are worth all the distance. I would cross oceans for you.",
  "Because you are my favourite notification. My heart jumps every time I see your name on my phone.",
  "Because you are my first thought in the morning. I wake up and check if you wrote to me.",
  "Because you are my last thought at night. I fall asleep thinking about you.",
  "Because you are on my mind all day. You are always there, in the back of my head.",
  "Because you make me smile. Even when I am sad, you can cheer me up.",
  "Because you make me laugh. Your jokes are silly and perfect.",
  "Because you make me feel loved. You always show me that I matter to you.",
  "Because you make me feel strong. With you, I feel like I can do anything.",
  "Because you make me feel calm. I don't have to pretend with you.",
  "Because you make me feel safe. I can tell you my secrets.",
  "Because you make me feel like myself. I don't have to be someone else around you.",
  "Because you make me feel like a better person. I want to be the best version of myself for you.",
  "Because you make me feel like I belong. I feel at home when I talk to you.",
  "Because you are my best friend. I can tell you everything.",
  "Because you are my girlfriend. I am so proud to call you mine.",
  "Because you are my love. You are the one my heart beats for.",
  "Because you are my destiny. We met in Turkey for a reason.",
  "Because you are my miracle. I never thought I could feel this way about someone.",
  "Because you are my dream come true. I wished for someone like you, and I found you.",
  "Because you are my light. You brighten even the darkest days.",
  "Because you are my sunshine. You make everything feel warm.",
  "Because you are my moon. You guide me when I am lost.",
  "Because you are my star. I look at the sky and think of you.",
  "Because you are my world. Nothing matters to me more than you.",
  "Because you are my universe. You are everything to me.",
  "Because you are my everything. My heart, my soul, my life.",
  "Because you are mine. And I am yours forever.",
  "Because you are you. And that is the best reason of all.",
  "Because your presence feels like home. Even through messages, I feel close to you.",
  "Because you have beautiful hair. I love it when you let it down.",
  "Because you dress nice. You always look elegant and simple.",
  "Because you are not loud. You are the calmest person I know.",
  "Because you have a quiet confidence. You don't need to prove anything to anyone.",
  "Because you are classy. You carry yourself with dignity.",
  "Because you are mature. You handle things better than many adults.",
  "Because you are wise. You know when to speak and when to listen.",
  "Because you are forgiving. You don't hold grudges.",
  "Because you are patient with me. I know I can be difficult sometimes.",
  "Because you are patient with us. You wait for our meeting without giving up.",
  "Because you are my peace and my adventure. Life with you is calm, but never boring.",
  "Because you are my comfort. In your words, I find my home.",
  "Because I want to build beautiful memories with you. I want to experience many more summers, sunsets, and happy moments by your side.",
  "Because you are my forever. And I will love you until the end of time.",
];

// Находим элементы
const dayCounterEl = document.querySelector("#day-counter");
const reasonEl = document.querySelector("#reason");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const hintEl = document.querySelector("#hint");
const cardEl = document.querySelector("#card");

// Текущая причина
let currentIndex = 0;

// Сколько дней прошло с даты старта
function getDaysPassed() {
  const now = new Date();
  // Сбрасываем время до 00:00:00, чтобы считались полные дни
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = today - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return days;
}

// Сколько причин доступно
function getAvailableCount() {
  const dayPassed = getDaysPassed() + 1;
  return Math.min(dayPassed, reasons.length);
}

// Отображает текущую причину и обновляет кнопки
function renderReason() {
  const available = getAvailableCount();

  if (currentIndex >= available) {
    currentIndex = available - 1;
  }
  if (currentIndex < 0) {
    currentIndex = 0;
  }

  dayCounterEl.textContent = `Day ${currentIndex + 1}`;
  reasonEl.textContent = reasons[currentIndex];

  // Отключаем кнопки на краях
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === available - 1;

  // Управляем подсказкой внизу
  if (currentIndex === available - 1 && available < reasons.length) {
    hintEl.textContent =
      "You've seen all reasons for today. Come back tomorrow 💕";
  } else if (available >= reasons.length) {
    hintEl.textContent = "You've reached the end. I love you forever 💕";
  } else {
    hintEl.textContent = "";
  }
}

// Переключение на предыдущую причину
prevBtn.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    renderReason();
  }
});

// Переключение на следующую причину
nextBtn.addEventListener("click", function () {
  const available = getAvailableCount();
  if (currentIndex < available - 1) {
    currentIndex++;
    renderReason();
  }
});

// Запуск при загрузке страницы
renderReason();
