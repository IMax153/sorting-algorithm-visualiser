import styled from 'styled-components';

export const StyledSortingVisualiser = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

interface StyledSortingContainerProps {
  sidebarOpen: boolean;
}

export const StyledSortingContainer = styled.div<StyledSortingContainerProps>`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  align-items: flex-end;
  padding: ${({ sidebarOpen }) => (sidebarOpen ? '0 10px 0 0' : '0 10px')};
  background: #f5f5f5;
`;

interface StyledBarProps {
  height: number;
  comparator?: boolean;
  selected?: boolean;
  sorted?: boolean;
}

export const StyledBar = styled.div<StyledBarProps>`
  flex: 1;
  height: ${({ height }) => height}%;
  margin-right: 2px;
  background: ${({ comparator, selected, sorted }) =>
    sorted
      ? '#28a138'
      : selected
      ? '#b91919'
      : comparator
      ? '#0172cb'
      : '#b19cd9'};

  &:last-child {
    margin: 0;
  }
`;
