import React from 'react';

import { Button } from '../Button';
import { useSortingContext } from '../SortingProvider';
import {
  StyledSortingToolbar,
  StyledSortingToolbarCenter,
  StyledSortingToolbarLeft,
  StyledSortingToolbarRight,
  StyledSortingToolbarTitle
} from './styles';

interface Props {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const SortingToolbar: React.FC<Props> = ({
  sidebarOpen,
  toggleSidebar
}) => {
  const { algorithm, isSorting, start, pause, shuffle } = useSortingContext();

  const handleStart = () => {
    if (sidebarOpen) toggleSidebar();
    start();
  };

  return (
    <StyledSortingToolbar>
      <StyledSortingToolbarLeft>
        <StyledSortingToolbarTitle>{algorithm}</StyledSortingToolbarTitle>
      </StyledSortingToolbarLeft>

      <StyledSortingToolbarCenter>
        {isSorting ? (
          <Button onClick={pause}>Pause</Button>
        ) : (
          <Button onClick={handleStart}>Start</Button>
        )}
        <Button onClick={shuffle}>Reset</Button>
      </StyledSortingToolbarCenter>

      <StyledSortingToolbarRight>
        <Button onClick={toggleSidebar}>Options</Button>
      </StyledSortingToolbarRight>
    </StyledSortingToolbar>
  );
};
