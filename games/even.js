import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

const even = () => {
  console.log('Welcome to the Brain Games!')

  const userName = getUserName();

  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    const randomNumber = getRandomNumber(1, 100);

    const userAnswer = readlineSync.question(
      `Question: ${randomNumber}\nYour answer: `,
    );

    const correctAnswer = () => {
      if (randomNumber % 2 === 0) {
        return 'yes';
      }
      return 'no';
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

export default even;
