import React from 'react';

import { StyledSidebar } from './styles';

interface Props {
  open: boolean;
}

export const Sidebar: React.FC<Props> = ({ open, children }) => {
  return <StyledSidebar open={open}>{children}</StyledSidebar>;
};
