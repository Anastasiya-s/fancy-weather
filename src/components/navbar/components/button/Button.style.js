import styled from 'styled-components';

export const Btn = styled.button`
  padding: 13px;
  color: white;
  background-color: rgba(174, 181, 185, 0.5);
  border: 0;
  border-radius: 4px;
  :hover {
    background-color:  rgba(174, 181, 185, 0.1);
    box-shadow:  0 0 5px 5px rgba(174, 181, 185, 0.5);
    outline: none;
  }
  :active {
    background-color:  rgba(174, 181, 185, 0.1);
    box-shadow:  
      inset 0 0 5px 5px rgba(174, 181, 185, 0.5),
      0 0 5px 5px rgba(174, 181, 185, 0.5);
    outline: none;
    border: 1px solid black;
  }
`;