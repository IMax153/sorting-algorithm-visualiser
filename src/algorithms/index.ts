import { bubbleSort } from './bubbleSort';
import { insertionSort } from './insertionSort';
import { quickSort } from './quickSort';
import { selectionSort } from './selectionSort';
import { shellSort } from './shellSort';

export type Algorithm =
  | 'Bubble Sort'
  | 'Insertion Sort'
  | 'Quick Sort'
  | 'Selection Sort'
  | 'Shell Sort';

export interface SortHistory {
  value: number;
  selected?: boolean;
  comparator?: boolean;
}

export const ALGORITHM: Record<string, Algorithm> = {
  BUBBLE_SORT: 'Bubble Sort',
  INSERTION_SORT: 'Insertion Sort',
  QUICK_SORT: 'Quick Sort',
  SELECTION_SORT: 'Selection Sort',
  SHELL_SORT: 'Shell Sort'
};

export const getAlgorithm = (
  algorithm: Algorithm
): ((array: number[]) => SortHistory[][]) => {
  const algorithms = {
    [ALGORITHM.BUBBLE_SORT]: bubbleSort,
    [ALGORITHM.INSERTION_SORT]: insertionSort,
    [ALGORITHM.QUICK_SORT]: quickSort,
    [ALGORITHM.SELECTION_SORT]: selectionSort,
    [ALGORITHM.SHELL_SORT]: shellSort
  };

  return algorithms[algorithm];
};
