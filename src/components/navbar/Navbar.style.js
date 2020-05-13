import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: auto;
  margin: 0 auto;
  padding: 30px 0;
  @media (max-width: 600px) {
    width: auto;
    min-width: 300px;
    flex-flow: column nowrap;
  }

`;

export const ButtonGroup = styled.div`
  display: inline-flex;
  width: auto;
`;