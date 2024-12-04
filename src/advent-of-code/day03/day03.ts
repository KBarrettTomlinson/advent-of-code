import * as fs from 'fs';

export const getParsedInput = (input: string): string => {
  return input;
};

export const getMulList = (parsedInput: string): string[] => {
  const regex = /mul\(\d+,\d+\)/g;
  const matches = parsedInput.match(regex);
  return matches ?? [];
};

export const getListOfMulPairs = (mulList: string[]): number[][] => {
  const listOfMulPairs = mulList.map((mul) => {
    const regex = /\d+/g;
    const match = mul.match(regex);
    return match ? match.map(Number) : [];
  });
  return listOfMulPairs;
};

export const getListOfMultipliedMulPairs = (
  listOfMulPairs: number[][],
): number[] => {
  const listOfMultipliedMulPairs = listOfMulPairs.map((mulPair) => {
    return mulPair.reduce((acc, num) => acc * num, 1);
  });
  return listOfMultipliedMulPairs;
};

export const getSumOfMultipliedMulPairs = (
  listOfMultipliedMulPairs: number[],
): number => {
  const sumOfMultipliedMulPairs = listOfMultipliedMulPairs.reduce(
    (acc, num) => acc + num,
    0,
  );
  return sumOfMultipliedMulPairs;
};

const getDay03Response = (): number => {
  const input = fs.readFileSync(
    './src/advent-of-code/day03/day03.txt',
    'utf-8',
  );
  const parsedInput = getParsedInput(input);
  const mulList = getMulList(parsedInput);
  const listOfMulPairs = getListOfMulPairs(mulList);
  const listOfMultipliedMulPairs = getListOfMultipliedMulPairs(listOfMulPairs);
  const sumOfMultipliedMulPairs = getSumOfMultipliedMulPairs(
    listOfMultipliedMulPairs,
  );

  return sumOfMultipliedMulPairs;
};

const response = getDay03Response();
console.log('response', JSON.stringify(response));
