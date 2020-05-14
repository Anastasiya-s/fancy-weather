import styled from 'styled-components';

export const Input = styled.input`
  padding: 0 10px;
  height: 32px;
  border-top: 0 !important;
  border-right: 0 !important;
  border-left: 0 !important;
  border-bottom: 1px solid #7fdcce;
  border-radius: 3px;
  font-family: "RobotoSlabLight";
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: white;
  outline: none;
  transition: all .3s ease;
  box-shadow: none;
  background-color: transparent;

  &:focus {
    border-color: #7fdcce;
}
`;