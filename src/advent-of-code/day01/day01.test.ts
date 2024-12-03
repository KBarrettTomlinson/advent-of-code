import * as fs from 'fs';
import {
  getSimilarityScoreBetweenLocationIdLists,
  getTotalDistanceBetweenLocationIdLists,
  parseInputToLists,
} from '../../advent-of-code/day01/day01';

describe('parseInputToLists', () => {
  it('should read a text file and return two arrays based on the input columns', () => {
    const input = fs.readFileSync(
      './src/advent-of-code/day01/day01.test.txt',
      'utf-8',
    );

    const actual = parseInputToLists(input, ' ');

    const expectedList1 = [3, 4, 2, 1, 3, 3];
    const expectedList2 = [4, 3, 5, 3, 9, 3];

    expect(actual[0]).toEqual(expectedList1);
    expect(actual[1]).toEqual(expectedList2);
  });
});

describe('totalDistanceBetweenLocationIdLists', () => {
  it('should return the sum of the distances between two lists', () => {
    const input = fs.readFileSync(
      './src/advent-of-code/day01/day01.test.txt',
      'utf-8',
    );
    const inputLists = parseInputToLists(input, ' ');
    expect(
      getTotalDistanceBetweenLocationIdLists(inputLists[0], inputLists[1]),
    ).toBe(11);
  });
});

describe('getSimilarityScoreBetweenLocationIdLists', () => {
  it('should return the sum of the similarity scores between two lists', () => {
    const input = fs.readFileSync(
      './src/advent-of-code/day01/day01.test.txt',
      'utf-8',
    );
    const inputLists = parseInputToLists(input, ' ');
    expect(
      getSimilarityScoreBetweenLocationIdLists(inputLists[0], inputLists[1]),
    ).toBe(31);
  });
});
