import { SortHistory } from './index';
import { swap } from './swap';

export const selectionSort = (array: number[]): SortHistory[][] => {
  const clone = [...array];
  const sortHistory: SortHistory[][] = [];

  for (let i = 0; i < clone.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < clone.length; j++) {
      sortHistory.push(
        /* eslint-disable-next-line no-loop-func */
        clone.map((value, index) => ({
          value,
          selected: index === min,
          comparator: index === j
        }))
      );

      if (clone[j] < clone[min]) {
        min = j;
      }
    }

    sortHistory.push(
      clone.map((value, index) => ({
        value,
        selected: index === i,
        comparator: index === min
      }))
    );

    swap(clone, i, min);
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
