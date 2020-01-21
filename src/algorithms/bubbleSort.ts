import { SortHistory } from './index';
import { swap } from './swap';

export const bubbleSort = (array: number[]): SortHistory[][] => {
  const clone = [...array];
  const sortHistory: SortHistory[][] = [];

  for (let i = 0; i < clone.length - 1; i++) {
    for (let j = 0; j < clone.length - i - 1; j++) {
      sortHistory.push(
        clone.map((value, index) => ({
          value,
          selected: index === j,
          comparator: index === j + 1
        }))
      );

      if (clone[j] > clone[j + 1]) {
        swap(clone, j, j + 1);
      }
    }
  }

  clone.map(value => ({
    value,
    selected: false,
    comparator: false
  }));

  return sortHistory;
};
