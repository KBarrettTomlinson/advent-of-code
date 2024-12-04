import * as fs from 'fs';
import {
  getListOfMulPairs,
  getListOfMultipliedMulPairs,
  getMulList,
  getParsedInput,
  getSumOfMultipliedMulPairs,
} from './day03';

describe('getParsedInput', () => {
  it('should read a text file an return parsed data', () => {
    const input = fs.readFileSync(
      './src/advent-of-code/day03/day03.test.txt',
      'utf-8',
    );

    const actual = getParsedInput(input);
    const expected =
      'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';

    expect(actual).toEqual(expected);
  });
});

describe('getMulList', () => {
  it('should return an array of values that match the mul(x,x) criteria', () => {
    const parsedInput =
      'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';
    const mulListActual = getMulList(parsedInput);
    const mulListExpected = ['mul(2,4)', 'mul(5,5)', 'mul(11,8)', 'mul(8,5)'];

    expect(mulListActual).toEqual(mulListExpected);
  });
});

describe('getListOfMulPairs', () => {
  it('should return an array of number arrays extracted from the mul list strings', () => {
    const mulList = ['mul(2,4)', 'mul(5,5)', 'mul(11,8)', 'mul(8,5)'];
    const listOfMulPairsActual = getListOfMulPairs(mulList);
    const listOfMulPairsExpected = [
      [2, 4],
      [5, 5],
      [11, 8],
      [8, 5],
    ];

    expect(listOfMulPairsActual).toEqual(listOfMulPairsExpected);
  });
});

describe('getListOfMultipliedMulPairs', () => {
  it('should return the array of each pair of numbers multiplied', () => {
    const listOfMulPairs = [
      [2, 4],
      [5, 5],
      [11, 8],
      [8, 5],
    ];
    const listOfMultipliedMulPairsActual =
      getListOfMultipliedMulPairs(listOfMulPairs);
    const listOfMultipliedMulPairsExpected = [8, 25, 88, 40];

    expect(listOfMultipliedMulPairsActual).toEqual(
      listOfMultipliedMulPairsExpected,
    );
  });
});

describe('getSumOfMultipliedMulPairs', () => {
  it('should sum an array of numbers', () => {
    const listOfMultipliedMulPairs = [8, 25, 88, 40];
    const sumOfMultipliedMulPairsActual = getSumOfMultipliedMulPairs(
      listOfMultipliedMulPairs,
    );
    const sumOfMultipliedMulPairsExpected = 161;

    expect(sumOfMultipliedMulPairsActual).toEqual(
      sumOfMultipliedMulPairsExpected,
    );
  });
});
