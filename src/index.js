import readlineSync from 'readline-sync';

import getUserName from './cli.js';

const ROUNDS_COUNT = 3;

const gameProcess = (description, questionAndCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = getUserName();

  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, correctAnswer] = questionAndCorrectAnswer();
    const userAnswer = readlineSync.question(question);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameProcess;
