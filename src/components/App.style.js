import styled from 'styled-components';

export const Background = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  background: url(${props => props.imageUrl}), rgba(0,0,0, 0.5);
  background-blend-mode: color;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 1000px) {
    background-attachment: fixed;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  @media (max-width: 1000px) {
    padding: 0 30px;
    max-width: 800px;
  }
  @media (max-width: 600px) {
    padding: 0 10px;
    max-width: 300px;
  }
  `;
  
  export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;