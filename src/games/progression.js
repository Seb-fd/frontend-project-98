import runGame from '../index.js';

const getRandomNumber = (min = 1, max = 50) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNumber();
  const step = getRandomNumber(2, 10);
  const length = 10;
  const hiddenIndex = getRandomNumber(0, length - 1);

  const progression = generateProgression(start, step, length);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startProgressionGame = () => {
  const rules = '¿Qué número falta en la progresión?';
  runGame(rules, generateRound);
};

export default startProgressionGame;
