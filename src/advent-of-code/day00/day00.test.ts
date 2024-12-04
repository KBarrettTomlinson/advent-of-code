import * as fs from 'fs';
import { getParsedInput } from './day00';

describe('getParsedInput', () => {
  it('should read a text file an return parsed data', () => {
    const input = fs.readFileSync(
      './src/advent-of-code/day00/day00.test.txt',
      'utf-8',
    );

    const actual = getParsedInput(input);
    const expected = '';

    expect(actual).toEqual(expected);
  });
});
