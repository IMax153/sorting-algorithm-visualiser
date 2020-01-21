import styled from 'styled-components';

export const StyledInputSlider = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const StyledInputSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
`;

export const StyledInputSliderLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

export const StyledInputSliderValue = styled.p`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const StyledInputSliderInput = styled.input`
  margin: 0;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    background: #fff;
    border: 1px solid #bac7d5;
    border-radius: 4px;
    cursor: pointer;
  }

  &::-moz-range-track {
    width: 100%;
    height: 8.4px;
    background: #bac7d5;
    border: 1px solid #bac7d5;
    border-radius: 4px;
    cursor: pointer;
  }

  &::ms-track {
    width: 100%;
    height: 8.4px;
    background: #bac7d5;
    border: 1px solid #bac7d5;
    border-radius: 4px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    height: 20px;
    width: 12px;
    margin-top: -6px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    border: 1px solid #bac7d5;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
    -webkit-appearance: none;
  }

  &::-moz-range-thumb {
    height: 20px;
    width: 12px;
    background: #ffffff;
    border: 1px solid #bac7d5;
    border-radius: 4px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    cursor: pointer;
  }

  &::-ms-thumb {
    height: 20px;
    width: 12px;
    background: #ffffff;
    border: 1px solid #bac7d5;
    border-radius: 4px;
    cursor: pointer;
  }
`;
