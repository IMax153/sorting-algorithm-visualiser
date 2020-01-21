import { SortHistory } from './index';
import { swap } from './swap';

export const insertionSort = (array: number[]): SortHistory[][] => {
  const clone = [...array];
  const sortHistory: SortHistory[][] = [];

  for (let i = 0; i < clone.length; i++) {
    let j = i;

    while (j > 0 && clone[j] < clone[j - 1]) {
      sortHistory.push(
        /* eslint-disable-next-line no-loop-func */
        clone.map((value, index) => ({
          value,
          selected: index === j,
          comparator: index === j - 1
        }))
      );

      swap(clone, j, j - 1);
      j--;
    }
  }

  sortHistory.push(
    clone.map((value, index) => ({
      value,
      selected: false,
      comparator: false
    }))
  );

  return sortHistory;
};
