import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0 50px;
  width: 100%;
  height: 100vh;
  background: url(${props => props.imageUrl}), rgba(0,0,0, 0.5);
  background-blend-mode: color;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 900px) {
    padding: 0 30px;
  }
  @media (max-width: 600px) {
    padding: 0 10px;
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
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;