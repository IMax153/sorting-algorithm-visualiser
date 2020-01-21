import React from 'react';

import {
  StyledSelect,
  StyledSelectContainer,
  StyledSelectLabel
} from './styles';

interface Props {
  id?: string;
  label?: string;
  value: string;
  onChange?: (value: string) => void;
}

export const Select: React.FC<Props> = ({
  id,
  label,
  value,
  onChange = () => {},
  children
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <StyledSelectContainer>
      {label && <StyledSelectLabel htmlFor={id}>{label}</StyledSelectLabel>}
      <StyledSelect id={id} value={value} onChange={handleChange}>
        {children}
      </StyledSelect>
    </StyledSelectContainer>
  );
};
