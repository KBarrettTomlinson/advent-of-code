import { parseInputToLists } from '../utils';
import * as fs from 'fs';

describe('parseInputToLists', () => {
  it('should read a text file and return two arrays based on the input columns', () => {
    const input = fs.readFileSync(
      './src/tests/parseInputToLists.test.txt',
      'utf-8',
    );

    const actual = parseInputToLists(input, ' ');

    const expectedList1 = [3, 4, 2, 1, 3, 3];
    const expectedList2 = [4, 3, 5, 3, 9, 3];

    expect(actual[0]).toEqual(expectedList1);
    expect(actual[1]).toEqual(expectedList2);
  });
});
