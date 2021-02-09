import gameProcess from '../src/index.js';
import random from '../src/libs/random.js';

const randomNumberMax = 20;

const calc = () => {
  const description = 'What is the result of the expression?';

  const questionAndCorrectAnswer = () => {
    const randomNumber = random(1, randomNumberMax);
    const randomNumber2 = random(1, randomNumberMax);
    const operations = '+-*';
    const randomOperation = operations[random(0, 3)];
    const question = `Question: ${randomNumber} ${randomOperation} ${randomNumber2}`;

    let correctAnswer;
    switch (randomOperation) {
      case '+':
        correctAnswer = randomNumber + randomNumber2;
        break;
      case '-':
        correctAnswer = randomNumber - randomNumber2;
        break;
      case '*':
        correctAnswer = randomNumber * randomNumber2;
        break;

      default:
        return false;
    }

    return [question, String(correctAnswer)];
  };

  gameProcess(description, questionAndCorrectAnswer);
};

export default calc;
