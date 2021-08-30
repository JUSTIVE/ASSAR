import styled from 'styled-components';
import { Palette } from './palette';

const AppContainer = styled.div<{ palette: Palette }>`
  background: ${({ palette }) => palette.background};
  color: ${({ palette }) => palette.color};
  
  width: 100vw;
  height: 100vh;
  /* padding: 14px; */
  font-size:16px;
  p{margin:0px;}
`;

export { AppContainer };
