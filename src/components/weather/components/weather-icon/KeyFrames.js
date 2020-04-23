import styled, { keyframes } from 'styled-components';
 
export const BlinkAnimation = keyframes`
  0% {
    font-size: 60px;
    opacity: 1;
    text-shadow: green 1px 0 10px;
  }
  50% {
    font-size: 80px; 
    color: orange;
    opacity: 0.3;
    text-shadow: green 1px 0 10px;
  }
  100% {
    font-size: 60px;
    opacity: 1;
    text-shadow: green 1px 0 10px;
  }
`