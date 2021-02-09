import gameProcess from '../src/index.js';
import random from '../src/libs/random.js';

const nod = (randomNumber, randomNumber2) => {
  if (randomNumber2) {
    return nod(randomNumber2, randomNumber % randomNumber2);
  }
  return Math.abs(randomNumber);
};

const gcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const questionAndCorrectAnswer = () => {
    const randomNumber = random(1, 100);
    const randomNumber2 = random(1, 100);
    const question = `Question: ${randomNumber} ${randomNumber2}`;
    const correctAnswer = nod(randomNumber, randomNumber2);
    return [question, String(correctAnswer)];
  };

  gameProcess(description, questionAndCorrectAnswer);
};

export default gcd;
