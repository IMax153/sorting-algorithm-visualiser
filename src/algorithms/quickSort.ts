import { SortHistory } from './index';
import { swap } from './swap';

const partition = (
  array: number[],
  sortHistory: SortHistory[][],
  startIndex: number,
  endIndex: number
): number => {
  const mid = Math.floor((startIndex + endIndex) / 2);
  const pivot = array[mid];

  let low = startIndex;
  let high = endIndex;

  while (low <= high) {
    while (array[low] < pivot) {
      low++;
    }

    while (array[high] > pivot) {
      high--;
    }

    sortHistory.push(
      /* eslint-disable-next-line no-loop-func */
      array.map((value, index) => ({
        value,
        selected: index === low,
        comparator: index === high
      }))
    );

    if (low <= high) {
      swap(array, low, high);

      low++;
      high--;
    }
  }

  return low;
};

const quickSortInternal = (
  array: number[],
  sortHistory: SortHistory[][],
  startIndex: number,
  endIndex: number
): void => {
  if (array.length > 1) {
    const index = partition(array, sortHistory, startIndex, endIndex);

    if (startIndex < index - 1) {
      quickSortInternal(array, sortHistory, startIndex, index - 1);
    }

    if (index < endIndex) {
      quickSortInternal(array, sortHistory, index, endIndex);
    }
  }
};

export const quickSort = (array: number[]): SortHistory[][] => {
  const clone = [...array];
  const sortHistory: SortHistory[][] = [];

  quickSortInternal(clone, sortHistory, 0, clone.length - 1);

  sortHistory.push(
    clone.map((value, index) => ({
      value,
      selected: false,
      comparator: false
    }))
  );

  return sortHistory;
};
