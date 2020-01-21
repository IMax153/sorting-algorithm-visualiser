import styled from 'styled-components';

interface StyledSidebarProps {
  open: boolean;
}

export const StyledSidebar = styled.div<StyledSidebarProps>`
  display: flex;
  width: ${({ open }) => (open ? '275px' : '0px')};
  flex-direction: column;
  height: 100%;
  margin-right: ${({ open }) => open && '10px'};
  box-shadow: 0 -2px 2px #bac7d5;
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: all 0.3s ease-in-out;
  border-right: 1px solid #bac7d5;

  > * {
    transition: all 0.3s ease-in-out;
    opacity: ${({ open }) => (open ? '1' : '0')};
  }
`;

export const StyledSidebarSection = styled.div``;
