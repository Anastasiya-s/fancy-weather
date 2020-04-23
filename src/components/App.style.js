import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  `;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
`;