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
  font-size: 30px;
  color: white;
  text-transform: uppercase;
  text-shadow: 1px 1px 5px black;
`;

export const Temperature = styled.div`
  font-family: "Montserrat";
  font-size: 200px;
  line-height: 1.4;
  color: white;
  text-shadow: 1px 1px 5px black;
`;