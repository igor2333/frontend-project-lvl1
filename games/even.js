import gameProcess from '../src/index.js';
import random from '../src/libs/random.js';

const even = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  const questionAndCorrectAnswer = () => {
    const randomNumber = random(1, 100);
    const question = `Question: ${randomNumber}\nYour answer: `;
    const correctAnswer = randomNumber % 2 ? 'no' : 'yes';
    return [question, correctAnswer];
  };

  gameProcess(description, questionAndCorrectAnswer);
};

export default even;
