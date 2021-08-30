import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const ResetStyles = createGlobalStyle`
  ${reset}
`
const GlobalStyles = createGlobalStyle`
  *{
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
    font-family: 'Noto Sans KR', sans-serif!important;
    line-height: 2em!important;
  }
`
export {ResetStyles,GlobalStyles} 