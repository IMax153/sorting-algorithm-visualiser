import styled from 'styled-components';

export const Button = styled.button`
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 16px;
  background: transparent;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  transition: all 0.15s ease-in-out;
  appearance: none;

  &:hover {
    background: #e5eaef;
    color: #333;
    cursor: pointer;
  }
`;
