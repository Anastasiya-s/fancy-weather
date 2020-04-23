import styled from 'styled-components';

import { BlinkAnimation } from './KeyFrames';

export const Icon = styled.i`
  color: green;
  font-size: 60px;
  line-height: 90px;
  animation: ${BlinkAnimation} 2s ease-in-out 0s infinite;
`;