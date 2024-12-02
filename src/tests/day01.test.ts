import {
  getSimilarityScoreBetweenLocationIdLists,
  getTotalDistanceBetweenLocationIdLists,
} from '../day01';
import * as fs from 'fs';
import { parseInputToLists } from '../utils';
const input = fs.readFileSync(
  './src/tests/parseInputToLists.test.txt',
  'utf-8',
);

const inputLists = parseInputToLists(input, ' ');

describe('totalDistanceBetweenLocationIdLists', () => {
  it('should return the sum of the distances between two lists', () => {
    expect(
      getTotalDistanceBetweenLocationIdLists(inputLists[0], inputLists[1]),
    ).toBe(11);
  });
});

describe('getSimilarityScoreBetweenLocationIdLists', () => {
  it('should return the sum of the similarity scores between two lists', () => {
    expect(
      getSimilarityScoreBetweenLocationIdLists(inputLists[0], inputLists[1]),
    ).toBe(31);
  });
});
