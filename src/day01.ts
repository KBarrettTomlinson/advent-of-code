import * as fs from 'fs';
import { parseInputToLists } from './utils';

export const getTotalDistanceBetweenLocationIdLists = (
  list1: number[],
  list2: number[],
): number => {
  let totalDistanceBetweenLocationIdLists = 0;
  const orderedList1 = list1.sort();
  const orderedList2 = list2.sort();

  orderedList1.forEach((listItem, index) => {
    const comparableListItem = orderedList2[index] ?? 0;
    const distanceBetweenItems = Math.abs(listItem - comparableListItem);
    totalDistanceBetweenLocationIdLists += distanceBetweenItems;
  });

  return totalDistanceBetweenLocationIdLists;
};

export const getSimilarityScoreBetweenLocationIdLists = (
  list1: number[],
  list2: number[],
): number => {
  let similarityScoreBetweenLocationIdLists = 0;

  const orderedList1 = list1.sort();
  const orderedList2 = list2.sort();

  let list1Index = 0;
  const list2Index = 0;

  let currentList1Value = orderedList1[list1Index];
  const currentList2Value = orderedList2[list2Index];

  let previousSimilarityScore = 0;

  orderedList1.forEach((listItem1, index) => {
    if (currentList1Value)

    list1Index = index;
    currentList1Value = listItem1;

    if (currentList1Value > currentList2Value) {
      return;
    }

    while (currentList1Value <= )

    // let n = 0;

    // while (n < 3) {
    //   n++;
    // }

    // console.log(n);
    // // Expected output: 3
  });

  return similarityScoreBetweenLocationIdLists;
};

const getDay01Response = (): number | undefined => {
  const input = fs.readFileSync('./src/day01.txt', 'utf-8');
  const inputLists = parseInputToLists(input, '   ');

  const list1 = inputLists.at(0);
  const list2 = inputLists.at(1);

  if (!list1 || !list2) {
    console.warn('one of the lists is undefined');
    return;
  }

  const totalDistanceBetweenLocationIdLists =
    getTotalDistanceBetweenLocationIdLists(list1, list2);

  return totalDistanceBetweenLocationIdLists;
};

console.log('day01Response', getDay01Response());
