import * as fs from 'fs';

export const getParsedInput = (input: string) => {
  return input;
};

const getDay00Response = () => {
  const input = fs.readFileSync(
    './src/advent-of-code/day00/day00.txt',
    'utf-8',
  );
  const parsedInput = getParsedInput(input);
  return parsedInput;
};

const response = getDay00Response();
console.log('response', JSON.stringify(response));
