import React, { useCallback, useState } from 'react';

import { InputSlider } from '../InputSlider';
import { Sidebar } from '../Sidebar';
import { Select } from '../Select';
import { useSortingContext } from '../SortingProvider';
import { SortingToolbar } from '../SortingToolbar';
import {
  StyledBar,
  StyledSortingContainer,
  StyledSortingVisualiser
} from './styles';
import { ALGORITHM, Algorithm } from 'algorithms';

interface Props {}

export const SortingVisualiser: React.FC<Props> = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {
    algorithm,
    arraySize,
    isSorting,
    sortHistory,
    sorted,
    sortSpeed,
    setAlgorithm,
    setSize,
    setSpeed
  } = useSortingContext();

  const handleToggleSidebar = useCallback(() => {
    setSidebarOpen(open => !open);
  }, []);

  return (
    <StyledSortingVisualiser>
      <SortingToolbar
        sidebarOpen={sidebarOpen}
        toggleSidebar={handleToggleSidebar}
      />

      <StyledSortingContainer sidebarOpen={sidebarOpen}>
        <Sidebar open={sidebarOpen}>
          <Select
            id="Algorithm Select"
            label="Algorithm"
            value={algorithm}
            onChange={value => setAlgorithm(value as Algorithm)}
          >
            {Object.values(ALGORITHM).map(value => (
              <option value={value}>{value}</option>
            ))}
          </Select>

          {!isSorting && (
            <InputSlider
              id="Array Size Slider"
              label="Array Size"
              min={10}
              max={100}
              value={arraySize}
              onChange={value => setSize(value)}
            />
          )}

          {!isSorting && (
            <InputSlider
              id="Sort Delay Slider"
              label="Sort Delay"
              min={50}
              max={1000}
              value={sortSpeed}
              onChange={setSpeed}
            />
          )}
        </Sidebar>

        {sortHistory.map(({ value, comparator, selected }, index) => (
          <StyledBar
            key={index}
            height={(value / sortHistory.length) * 90}
            comparator={comparator}
            selected={selected}
            sorted={sorted}
          />
        ))}
      </StyledSortingContainer>
    </StyledSortingVisualiser>
  );
};
