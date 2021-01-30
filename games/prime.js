import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

const prime = () => {
  console.log('Welcome to the Brain Games!');

  const userName = getUserName();

  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    const randomNumber = getRandomNumber(1, 100);

    const userAnswer = readlineSync.question(
      `Question: ${randomNumber}\nYour answer: `,
    );

    const correctAnswer = (randomNumber) => {
      for (let i = 2; i < randomNumber; i++) {
        if (randomNumber % i === 0) return 'no';
      }
      return 'yes';
    };

    if (userAnswer === correctAnswer()) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer()}'. \nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default prime;
