import React, { createContext, useCallback, useContext, useState } from 'react';

import { ALGORITHM, Algorithm, getAlgorithm, SortHistory } from 'algorithms';
import { delay } from 'utils/delay';
import { getRandomNumbers } from 'utils/getRandomNumbers';

interface Context {
  algorithm: Algorithm;
  arraySize: number;
  sortSpeed: number;
  sortHistory: SortHistory[];
  sorted: boolean;
  isSorting: boolean;
  start: () => void;
  pause: () => void;
  shuffle: () => void;
  setAlgorithm: (algorithm: Algorithm) => void;
  setSize: (size: number) => void;
  setSpeed: (speed: number) => void;
}

const SortingContext = createContext<Context>({} as any);

interface Props {}

export const useSortingContext = () => useContext(SortingContext);

export const SortingProvider: React.FC<Props> = ({ children }) => {
  const [sortingAlgorithm, setSortingAlgorithm] = useState<Algorithm>(
    ALGORITHM.SELECTION_SORT
  );
  const [arraySize, setArraySize] = useState(50);
  const [sortSpeed, setSortSpeed] = useState(100);
  const [sortHistory, setSortHistory] = useState<SortHistory[]>(
    getRandomNumbers(arraySize).map(value => ({ value }))
  );
  const [sortHistoryIndex, setSortHistoryIndex] = useState(0);
  const [sorted, setSorted] = useState(false);
  const [isSorting, setIsSorting] = useState(false);

  const start = useCallback(() => {
    setSorted(false);
    setIsSorting(true);

    const algorithm = getAlgorithm(sortingAlgorithm);
    let history = algorithm(sortHistory.map(({ value }) => value));

    if (sortHistoryIndex > 0) {
      history = history.slice(sortHistoryIndex);
    }

    const runAlgorithm = (histories: SortHistory[], index: number) => {
      setSortHistory(histories);
      setSortHistoryIndex(sortHistoryIndex + index);

      if (index === history.length - 1) {
        // When sorting is complete reset the index of the sort history
        setSortHistoryIndex(0);
        setSorted(true);
        setIsSorting(false);
      }
    };

    history.forEach(delay(runAlgorithm, sortSpeed));
  }, [sortingAlgorithm, sortHistory, sortHistoryIndex, sortSpeed]);

  const pause = useCallback(() => {
    setSorted(false);
    setIsSorting(false);
    // Timeout identifers in the browser are consecutive integers,
    // so we can get a reference to the highest identifier and
    // procedurally clear all timeouts
    let timeoutId = setTimeout(() => {}, 0);

    while (timeoutId--) {
      clearTimeout(timeoutId);
    }
  }, []);

  const shuffle = useCallback(() => {
    pause();
    setSorted(false);
    setIsSorting(false);
    setSortHistory(getRandomNumbers(arraySize).map(value => ({ value })));
    setSortHistoryIndex(0);
  }, [arraySize, pause]);

  const setAlgorithm = useCallback((algorithm: Algorithm) => {
    setSortingAlgorithm(algorithm);
  }, []);

  const setSize = useCallback(
    (size: number) => {
      setArraySize(size);
      shuffle();
    },
    [shuffle]
  );

  const setSpeed = useCallback((speed: number) => {
    setSortSpeed(speed);
  }, []);

  return (
    <SortingContext.Provider
      value={{
        algorithm: sortingAlgorithm,
        arraySize,
        sortSpeed,
        sortHistory,
        sorted,
        isSorting,
        start,
        pause,
        shuffle,
        setAlgorithm,
        setSize,
        setSpeed
      }}
    >
      {children}
    </SortingContext.Provider>
  );
};
