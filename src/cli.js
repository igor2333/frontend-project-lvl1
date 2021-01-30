import readlineSync from 'readline-sync';

const getUserName = () => {
  const getUserNameQuestion = readlineSync.question('May I have your name? ');
  return getUserNameQuestion;
};

export default getUserName;
