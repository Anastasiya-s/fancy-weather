import { keyframes } from 'styled-components';
 
export const BlinkAnimation = keyframes`
  0% {
    color: #033E6B;
    font-size: 60px;
    opacity: 0.8;
    text-shadow: black 1px 0 5px;
  }
  50% {
    font-size: 80px; 
    color: #25567B;
    opacity: 0.6;
    text-shadow: black 1px 0 10px;
  }
  100% {
    color: #033E6B;
    font-size: 60px;
    opacity: 0.9;
    text-shadow: black 1px 0 5px;
  }
`