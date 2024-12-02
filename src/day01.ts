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

  orderedList1.forEach((listItem1) => {
    let similarityMultiplier = 0;

    orderedList2.forEach((listItem2) => {
      if (listItem1 === listItem2) {
        similarityMultiplier++;
      }
    });

    const similarityScore = listItem1 * similarityMultiplier;
    similarityScoreBetweenLocationIdLists += similarityScore;
  });

  return similarityScoreBetweenLocationIdLists;
};

const getDay01Response = (): number[] | undefined => {
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
  const similarityScoreBetweenLocationIdLists =
    getSimilarityScoreBetweenLocationIdLists(list1, list2);

  return [
    totalDistanceBetweenLocationIdLists,
    similarityScoreBetweenLocationIdLists,
  ];
};

const response = getDay01Response();

console.log(
  'day01Response:totalDistanceBetweenLocationIdLists ',
  response ? response[0] : undefined,
);
console.log(
  'day01Response:similarityScoreBetweenLocationIdLists ',
  response ? response[1] : undefined,
);
