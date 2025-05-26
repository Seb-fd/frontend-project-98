import runGame from '../index.js';

const getRandomNumber = (min = 2, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber();
  const question = number.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrimeGame = () => {
  const rules = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".';
  runGame(rules, generateRound);
};

export default startPrimeGame;
