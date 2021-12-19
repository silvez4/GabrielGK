import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
//#region Reset
* {
  padding:0;
  margin:0;
  vertical-align:baseline;
  list-style:none;
  border:0;
  box-sizing: border-box;
}

//#endregion

:root{
  --black-bg: #040404;
  --dark-grey: #1c1c1c;
  --light-grey: #dcccec;
  --purple-bg: #6c0bac;
  --light-pink: #f37bbb;
  --dark-pink: #f37bbb;
  --white-bg: #f7f2fb;
  font-size: 62.5%;
}

body{
  background var(--black-bg);
  color: var(--dark-pink);
}

.sr-only{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}


`
export default GlobalStyles;