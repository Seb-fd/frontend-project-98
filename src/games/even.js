import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const startEvenGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  console.log(
    'Responde "yes" si el número es par, de lo contrario responde "no".',
  );

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Pregunta: ${number}`);
    const answer = readlineSync.question('Tu respuesta: ').toLowerCase();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(
        `'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`,
      );
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }

    console.log('¡Correcto!');
    correctAnswers += 1;
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default startEvenGame;
