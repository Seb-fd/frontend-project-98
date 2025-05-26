import runGame from '../index.js';

const operators = ['+', '-', '*'];

const getRandomNumber = () => Math.floor(Math.random() * 100);

const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${num1} ${operator} ${num2}`;

  let answer;
  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      throw new Error(`Operador desconocido: ${operator}`);
  }

  return [question, answer.toString()];
};

const startCalcGame = () => {
  const rules = '¿Cuál es el resultado de la expresión?';
  runGame(rules, generateRound);
};

export default startCalcGame;
