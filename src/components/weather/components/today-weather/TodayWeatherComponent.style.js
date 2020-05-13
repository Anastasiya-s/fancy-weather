import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const Span = styled.span`
  display: block;
  font-family: "RobotoSlabLight";
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
  text-shadow: 1px 1px 5px black;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const Temperature = styled.div`
  font-family: "Montserrat";
  font-size: 15rem;
  line-height: 1.4;
  color: white;
  text-shadow: 1px 1px 5px black;
  @media (max-width: 900px) {
    font-size: 10rem;
  }
  @media (max-width: 600px) {
    font-size: 5rem;
  }  
`;