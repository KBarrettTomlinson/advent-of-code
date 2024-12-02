export const parseInputToLists = (
  input: string,
  delimiter: string,
): [number[], number[]] => {
  const list1: number[] = [];
  const list2: number[] = [];

  const lines = input.trim().split('\n');

  for (const line of lines) {
    const [num1, num2] = line.split(`${delimiter}`).map(Number);
    list1.push(num1);
    list2.push(num2);
  }

  return [list1, list2];
};
