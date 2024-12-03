import * as fs from 'fs';
import {
  getParsedInput,
  getIsReportSafe,
  getIsAllIncreasing,
  getIsAllDecreasing,
  getIsWithinThreshold,
  MIN_THRESHOLD,
  MAX_THRESHOLD,
  getNumberOfSafeReports,
} from './day02';

describe('getParsedInput', () => {
  it('should read a text file an return an array of arrays', () => {
    const input = fs.readFileSync(
      './src/advent-of-code/day02/day02.test.txt',
      'utf-8',
    );

    const actual = getParsedInput(input);

    const expectedArray1 = [7, 6, 4, 2, 1];
    const expectedArray2 = [1, 2, 7, 8, 9];
    const expectedArray3 = [9, 7, 6, 2, 1];
    const expectedArray4 = [1, 3, 2, 4, 5];
    const expectedArray5 = [8, 6, 4, 4, 1];
    const expectedArray6 = [1, 3, 6, 7, 9];

    const expected = [
      expectedArray1,
      expectedArray2,
      expectedArray3,
      expectedArray4,
      expectedArray5,
      expectedArray6,
    ];

    expect(actual).toEqual(expected);
  });
});

describe('getIsAllIncreasing', () => {
  it(`should determine if an array of data is increasing over time`, () => {
    const testReport1 = [7, 6, 4, 2, 1];
    const expected1 = false;
    const actual1 = getIsAllIncreasing(testReport1);
    expect(actual1).toEqual(expected1);

    const testReport2 = [1, 2, 7, 8, 9];
    const expected2 = true;
    const actual2 = getIsAllIncreasing(testReport2);
    expect(actual2).toEqual(expected2);

    const testReport3 = [9, 7, 6, 2, 1];
    const expected3 = false;
    const actual3 = getIsAllIncreasing(testReport3);
    expect(actual3).toEqual(expected3);

    const testReport4 = [1, 3, 2, 4, 5];
    const expected4 = false;
    const actual4 = getIsAllIncreasing(testReport4);
    expect(actual4).toEqual(expected4);

    const testReport5 = [8, 6, 4, 4, 1];
    const expected5 = false;
    const actual5 = getIsAllIncreasing(testReport5);
    expect(actual5).toEqual(expected5);

    const testReport6 = [1, 3, 6, 7, 9];
    const expected6 = true;
    const actual6 = getIsAllIncreasing(testReport6);
    expect(actual6).toEqual(expected6);
  });
});

describe('getIsAllDecreasing', () => {
  it(`should determine if an array of data is decreasing over time`, () => {
    const testReport1 = [7, 6, 4, 2, 1];
    const expected1 = true;
    const actual1 = getIsAllDecreasing(testReport1);
    expect(actual1).toEqual(expected1);

    const testReport2 = [1, 2, 7, 8, 9];
    const expected2 = false;
    const actual2 = getIsAllDecreasing(testReport2);
    expect(actual2).toEqual(expected2);

    const testReport3 = [9, 7, 6, 2, 1];
    const expected3 = true;
    const actual3 = getIsAllDecreasing(testReport3);
    expect(actual3).toEqual(expected3);

    const testReport4 = [1, 3, 2, 4, 5];
    const expected4 = false;
    const actual4 = getIsAllDecreasing(testReport4);
    expect(actual4).toEqual(expected4);

    const testReport5 = [8, 6, 4, 4, 1];
    const expected5 = false;
    const actual5 = getIsAllDecreasing(testReport5);
    expect(actual5).toEqual(expected5);

    const testReport6 = [1, 3, 6, 7, 9];
    const expected6 = false;
    const actual6 = getIsAllDecreasing(testReport6);
    expect(actual6).toEqual(expected6);
  });
});

describe('getIsWithinThreshold', () => {
  it(`should determine if an array of data is has discrepancies inclusively between 1 and 3`, () => {
    const testReport1 = [7, 6, 4, 2, 1];
    const expected1 = true;
    const actual1 = getIsWithinThreshold(
      MIN_THRESHOLD,
      MAX_THRESHOLD,
      testReport1,
    );
    expect(actual1).toEqual(expected1);

    const testReport2 = [1, 2, 7, 8, 9];
    const expected2 = false;
    const actual2 = getIsWithinThreshold(
      MIN_THRESHOLD,
      MAX_THRESHOLD,
      testReport2,
    );
    expect(actual2).toEqual(expected2);

    const testReport3 = [9, 7, 6, 2, 1];
    const expected3 = false;
    const actual3 = getIsWithinThreshold(
      MIN_THRESHOLD,
      MAX_THRESHOLD,
      testReport3,
    );
    expect(actual3).toEqual(expected3);

    const testReport4 = [1, 3, 2, 4, 5];
    const expected4 = true;
    const actual4 = getIsWithinThreshold(
      MIN_THRESHOLD,
      MAX_THRESHOLD,
      testReport4,
    );
    expect(actual4).toEqual(expected4);

    const testReport5 = [8, 6, 4, 4, 1];
    const expected5 = false;
    const actual5 = getIsWithinThreshold(
      MIN_THRESHOLD,
      MAX_THRESHOLD,
      testReport5,
    );
    expect(actual5).toEqual(expected5);

    const testReport6 = [1, 3, 6, 7, 9];
    const expected6 = true;
    const actual6 = getIsWithinThreshold(
      MIN_THRESHOLD,
      MAX_THRESHOLD,
      testReport6,
    );
    expect(actual6).toEqual(expected6);
  });
});

describe('getIsReportSafe', () => {
  it(`should determine if a rule is safe 
    if either all levels are increasing or all levels are decreasing, 
    and any two adjacent levels differ by at least 1 and at most 3`, () => {
    const testReport1 = [7, 6, 4, 2, 1];
    const expected1 = true;
    const actual1 = getIsReportSafe(testReport1);
    expect(actual1).toEqual(expected1);

    const testReport2 = [1, 2, 7, 8, 9];
    const expected2 = false;
    const actual2 = getIsReportSafe(testReport2);
    expect(actual2).toEqual(expected2);

    const testReport3 = [9, 7, 6, 2, 1];
    const expected3 = false;
    const actual3 = getIsReportSafe(testReport3);
    expect(actual3).toEqual(expected3);

    const testReport4 = [1, 3, 2, 4, 5];
    const expected4 = false;
    const actual4 = getIsReportSafe(testReport4);
    expect(actual4).toEqual(expected4);

    const testReport5 = [8, 6, 4, 4, 1];
    const expected5 = false;
    const actual5 = getIsReportSafe(testReport5);
    expect(actual5).toEqual(expected5);

    const testReport6 = [1, 3, 6, 7, 9];
    const expected6 = true;
    const actual6 = getIsReportSafe(testReport6);
    expect(actual6).toEqual(expected6);
  });
});

describe('getNumberOfSafeReports', () => {
  it(`should count the number of true values in an array`, () => {
    const safeReportList = [true, false, false, false, true];
    const expected = 2;
    const actual = getNumberOfSafeReports(safeReportList);
    expect(actual).toEqual(expected);
  });
});
