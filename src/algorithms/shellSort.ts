import { SortHistory } from './index';
import { swap } from './swap';

export const insertionSortInterleaved = (
  array: number[],
  sortHistory: SortHistory[][],
  startIndex: number,
  gap: number
): void => {
  for (let i = startIndex + gap; i < array.length; i += gap) {
    let j = i;

    while (j - gap >= startIndex && array[j] < array[j - gap]) {
      sortHistory.push(
        /* eslint-disable-next-line no-loop-func */
        array.map((value, index) => ({
          value,
          selected: index === j,
          comparator: index === j - gap
        }))
      );

      swap(array, j, j - gap);

      j = j - gap;
    }
  }
};

export const shellSort = (array: number[]): SortHistory[][] => {
  const clone = [...array];
  const sortHistory: SortHistory[][] = [];

  for (let gap = clone.length; gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = 0; i < gap; i++) {
      insertionSortInterleaved(clone, sortHistory, i, gap);
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
