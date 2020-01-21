import React from 'react';

import {
  StyledInputSlider,
  StyledInputSliderContainer,
  StyledInputSliderInput,
  StyledInputSliderLabel,
  StyledInputSliderValue
} from './styles';

interface Props {
  id?: string;
  label?: string;
  min: number;
  max: number;
  value: number;
  onChange?: (value: number) => void;
}

export const InputSlider: React.FC<Props> = ({
  id,
  label,
  min,
  max,
  value,
  onChange = () => {}
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const parsedValue = parseInt(value, 10);

    onChange(parsedValue);
  };

  return (
    <StyledInputSliderContainer>
      <StyledInputSliderLabel htmlFor={id}>{label}</StyledInputSliderLabel>
      <StyledInputSlider>
        <StyledInputSliderInput
          id={id}
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
        />
        <StyledInputSliderValue>{value}</StyledInputSliderValue>
      </StyledInputSlider>
    </StyledInputSliderContainer>
  );
};
