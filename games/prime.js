import gameProcess from '../src/index.js';
import random from '../src/libs/random.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i + 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const prime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const questionAndCorrectAnswer = () => {
    const randomNumber = random(1, 100);
    const question = `Question: ${randomNumber}\nYour answer: `;
    const correctAnswer = isPrime(randomNumber);
    return [question, correctAnswer];
  };

  gameProcess(description, questionAndCorrectAnswer);
};

export default prime;
