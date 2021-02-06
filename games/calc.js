import gameProcess from '../src/index.js';
import random from '../src/libs/random.js';

const RANDOM_NUMBER_MAX = 20;

const calc = () => {
  const description = 'What is the result of the expression?';

  const questionAndCorrectAnswer = () => {
    const randomNumber = random(1, RANDOM_NUMBER_MAX);
    const randomNumber2 = random(1, RANDOM_NUMBER_MAX);
    const operations = '+-*';
    const randomOperation = operations[random(0, 3)];
    const question = `Question: ${randomNumber} ${randomOperation} ${randomNumber2}\nYour answer: `;

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
    }

    return [question, String(correctAnswer)];
  };

  gameProcess(description, questionAndCorrectAnswer);
};

export default calc;
