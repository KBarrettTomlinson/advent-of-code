import * as fs from 'fs';

export const MAX_THRESHOLD = 3;
export const MIN_THRESHOLD = 1;

export const getParsedInput = (input: string): number[][] => {
  const lines: string[] = input.trim().split('\n');
  return lines.map((line: string) => {
    return line.split(' ').map(Number);
  });
};

export const getIsAllIncreasing = (report: number[]): boolean => {
  if (report.length < 1) {
    console.warn('invalid report');
    return false;
  }

  let previousValue = report[0];
  let currentIndex = 1;
  let isAllIncreasing = true;
  while (isAllIncreasing && currentIndex < report.length) {
    const currentValue = report[currentIndex];
    if (previousValue >= currentValue) {
      isAllIncreasing = false;
    }
    previousValue = currentValue;
    currentIndex++;
  }
  return isAllIncreasing;
};

export const getIsAllDecreasing = (report: number[]): boolean => {
  if (report.length < 1) {
    console.warn('invalid report');
    return false;
  }

  let previousValue = report[0];
  let currentIndex = 1;
  let isAllDecreasing = true;
  while (isAllDecreasing && currentIndex < report.length) {
    const currentValue = report[currentIndex];
    if (previousValue <= currentValue) {
      isAllDecreasing = false;
    }
    previousValue = currentValue;
    currentIndex++;
  }
  return isAllDecreasing;
};

export const getIsWithinThreshold = (
  min: number,
  max: number,
  report: number[],
): boolean => {
  if (report.length < 1) {
    console.warn('invalid report');
    return false;
  }

  let previousValue = report[0];
  let currentIndex = 1;
  let isWithingThreshold = true;
  while (isWithingThreshold && currentIndex < report.length) {
    const currentValue = report[currentIndex];
    const difference = Math.abs(previousValue - currentValue);
    if (!(min <= difference && difference <= max)) {
      isWithingThreshold = false;
    }
    previousValue = currentValue;
    currentIndex++;
  }
  return isWithingThreshold;
};

export const getIsReportSafe = (report: number[]): boolean => {
  const isAllIncreasing = getIsAllIncreasing(report);
  const isAllDecreasing = getIsAllDecreasing(report);

  if (!(isAllDecreasing || isAllIncreasing)) {
    return false;
  }

  const isWithingThreshold = getIsWithinThreshold(
    MIN_THRESHOLD,
    MAX_THRESHOLD,
    report,
  );

  return isWithingThreshold;
};

export const getNumberOfSafeReports = (safeReportList: boolean[]): number => {
  if (safeReportList.length === 0) {
    console.warn('invalid report');
    return 0;
  }

  return safeReportList.filter((safeReport) => !!safeReport).length;
};

export const getIsDampenedReportSafe = (report: number[]): boolean => {
  let isDampenedReportSafe = false;

  report.forEach((_, index) => {
    if (isDampenedReportSafe) {
      return;
    }
    const dampenedReport = [...report];
    dampenedReport.splice(index, 1);
    isDampenedReportSafe = getIsReportSafe(dampenedReport);
  });

  return isDampenedReportSafe;
};

const getDay02Response = () => {
  const input = fs.readFileSync(
    './src/advent-of-code/day02/day02.txt',
    'utf-8',
  );
  const reports = getParsedInput(input);
  const safeReportList = reports.map((report) => {
    let isReportSafe = getIsReportSafe(report);
    if (!isReportSafe) {
      isReportSafe = getIsDampenedReportSafe(report);
    }
    return isReportSafe;
  });

  const numberOfSafeReports = getNumberOfSafeReports(safeReportList);
  return numberOfSafeReports;
};

const response = getDay02Response();
console.log('response', JSON.stringify(response));
