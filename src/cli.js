import readlinesync from "readline-sync";

export const userGreeting = () => {
  console.log("¡Bienvenido a Brain Games!");
  const name = readlinesync.question("¿Cuál es tu nombre?");
  console.log(`¡Hola, ${name}!`);
};
