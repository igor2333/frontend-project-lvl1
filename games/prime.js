import gameProcess from '../src/index.js';
import random from '../src/libs/random.js';

const isPrime = (num) => {
  if (num < 2) return 'no';
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return true;
  }
  return false;
};

const prime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const questionAndCorrectAnswer = () => {
    const randomNumber = random(1, 100);
    const question = `Question: ${randomNumber}`;
    const correctAnswer = isPrime(randomNumber) ? 'no' : 'yes';
    return [question, correctAnswer];
  };

  gameProcess(description, questionAndCorrectAnswer);
};

export default prime;
