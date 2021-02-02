import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

const calc = () => {
  console.log('Welcome to the Brain Games!');

  const userName = getUserName();

  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    const randomNumber = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);

    const operations = '+-*';
    const randomOperation = operations[getRandomNumber(0, 3)];

    const correctAnswer = () => {
      switch (randomOperation) {
        case '+':
          return randomNumber + randomNumber2;
          break;
        case '-':
          return randomNumber - randomNumber2;
          break;
        case '*':
          return randomNumber * randomNumber2;
          break;
      }
    };

    const userAnswer = readlineSync.question(
      'Question: '
        + `${randomNumber} ${randomOperation} ${randomNumber2}`
        + '\nYour answer: ',
    );

    if (+userAnswer === correctAnswer()) {
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

export default calc;
