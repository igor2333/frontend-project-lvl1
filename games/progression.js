import gameProcess from '../src/index.js';
import random from '../src/libs/random.js';

const progression = () => {
  const description = 'What number is missing in the progression?';

  const questionAndCorrectAnswer = () => {
    const startNum = random(1, 100);
    const progrStep = random(1, 10);
    const progrCount = 10;
    const str = [];
    for (let i = startNum; i < startNum + progrCount * progrStep; i += progrStep) {
      str.push(i);
    }
    const index = random(0, 9);
    const value = str[index];
    str[index] = '..';
    const question = `Question: ${str.join(' ')}\nYour answer: `;
    const correctAnswer = value;
    return [question, String(correctAnswer)];
  };

  gameProcess(description, questionAndCorrectAnswer);
};

export default progression;
