import readlineSync from 'readline-sync';

const hello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  if (name) {
    console.log('Hello, %s!', name);
  }
};

export default hello;