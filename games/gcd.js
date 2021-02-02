import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

const gcd = () => {
  console.log('Welcome to the Brain Games!');

  const userName = getUserName();

  console.log(`Hello, ${userName}!`);

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    const randomNumber = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);

    const nod = (randomNumber, randomNumber2) => {
      if (randomNumber2) {
        return nod(randomNumber2, randomNumber % randomNumber2);
      }
      return Math.abs(randomNumber);
    };

    const correctAnswer = nod(randomNumber, randomNumber2);

    const userAnswer = readlineSync.question(
      `Question:  + ${randomNumber} ${randomNumber2} + '\nYour answer:`,
    );

    if (+userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gcd;
