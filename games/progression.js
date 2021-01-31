import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

const progression = () => {
  console.log('Welcome to the Brain Games!');

  const userName = getUserName();

  console.log(`Hello, ${userName}!`);

  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    const startNum = getRandomNumber(1, 100);
    const progrStep = getRandomNumber(1, 10);
    const progrCount = 10;

    const str = [];

    for (
      let i = startNum;
      i < startNum + progrCount * progrStep;
      i += progrStep
    ) {
      str.push(i);
    }
    const index = getRandomNumber(0, 9);
    const value = str[index];
    str[index] = '..';

    const correctAnswer = value;

    const userAnswer = readlineSync.question(
      `Question: ${str.join(' ')}\nYour answer: `,
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

export default progression;
