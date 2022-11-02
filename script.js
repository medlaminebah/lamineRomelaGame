'use strict';

// const a = document.querySelector('.message').textContent;

// console.log(a);

// document.querySelector('.message').textContent = 'Correct lamine';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const plus = [
  `⬆️C'est Plus!`,
  `⬆️ Un chwiya plus mon coeur!`,
  `⬆️ Ne sois pas timide, aller un peu plus!`,
  `⬆️ Aller Romela, Plus!`,
  `⬆️ Et nan c'est un peu plus`,
  `⬆️ Faux!`,
  `⬆️ 🙄🙄🙄🙄🙄🙄🙄🙄`,
  `⬆️ Faux!`,
  `⬆️ Attend... Là je suis perdu, c'était quoi le dernier numéro?`,
  `⬆️ Moins x moins = ?`,
  `⬆️ Plus on vit moins on pense, plus on pense moins on vit`,
];

const moins = [
  `⬇️ Doucement, c'est trop! `,
  `⬇️ Mmm.. je pense que c'est beaucoup`,
  `⬇️ Bravo Romela! nan je rigole, c'est moins`,
  `⬇️ Moins`,
  `⬇️ Nop! c'est moins`,
  `⬇️ Au temps pour moi, je pense c'était moi`,
  `⬇️ C'est moins, (d'après le signe astrologique ou chipa koi)`,
  `⬇️ Nop! c'est moins`,
  `⬇️ Plus x moins = ?`,
  `⬇️ Qui peut le plus peut le moins`,
  `⬇️ est-ce que tu as faim?`,
];

const correct = [
  `Correct! Bravo mon coeur!❤️`,
  `Yayyy! trouvé 😁`,
  `C'est correct!😎`,
  `Bravo Romela! Tu as gagné un iPhone! 🍎`,
  `Franchement, Romela c'est comme ça 👍`,
  `C'est plus!... Ah non, c'est bon j'ai rien dit😁`,
  `🫶🫶🫶🫶 SHAZAM 🫶🫶🫶🫶 `,
  `Trop forte mon coeur❤️`,
];

let message = function (message) {
  document.querySelector('.message').textContent = message;
};
let scoreOutput = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let plusArray = plus[Math.trunc(Math.random() * 9) + 1];
  let moinsArray = moins[Math.trunc(Math.random() * 9) + 1];
  let correctArray = correct[Math.trunc(Math.random() * 7) + 1];

  if (!guess) {
    message(`⛔️ Cela n'est pas un chiffre mon coeur`);
  } else if (guess === secretNumber) {
    message(correctArray);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    if (score == 20) {
      message('Woww bravo Romela ! Dès le premier coup!🤯');
    }

    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (score > 1) {
    message(guess > secretNumber ? moinsArray : plusArray);
    score--;
    scoreOutput(score);
  } else if (score == 1) {
    scoreOutput('Game over!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  message('Commensons...');
  scoreOutput(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
