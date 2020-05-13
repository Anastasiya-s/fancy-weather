import styled from 'styled-components';

export const NextDay = styled.div`
  display: inline-block;
  width: 30%;
`;

export const Date = styled.div`
  font-family: "RobotoSlabRegular";
  font-size: 18px;
  line-height: 1.4;
  color: white;
  text-shadow: 1px 1px 5px black;
  @media (max-width: 600px) {
    font-size: 1rem;
  }

`;

export const Weather = styled.div`
  font-family: "RobotoSlabRegular";
  font-size: 18px;
  line-height: 1.4;
  color: white;
  text-shadow: 1px 1px 5px black;
  @media (max-width: 600px) {
    padding: 0 10px;
  }
`;