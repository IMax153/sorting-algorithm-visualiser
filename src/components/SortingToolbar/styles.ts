import styled from 'styled-components';

export const StyledSortingToolbar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: 'toolbar-left toolbar-center toolbar-right';
  justify-items: center;
  align-items: center;
  min-height: 54px;
  background: #f5f5f5;
  border-bottom: 1px solid #bac7d5;
  box-shadow: 0 2px 1px -1px #bac7d5;
  z-index: 1;
`;

export const StyledSortingToolbarCenter = styled.div`
  grid-area: toolbar-center;
`;

export const StyledSortingToolbarLeft = styled.div`
  grid-area: toolbar-left;
  justify-self: flex-start;
  margin-left: 10px;
`;

export const StyledSortingToolbarRight = styled.div`
  grid-area: toolbar-right;
  justify-self: flex-end;
  margin-right: 10px;
`;

export const StyledSortingToolbarTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-right: 20px;
`;
