import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&display=swap');

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
  --black-bg: hsl(330, 72%, 3%, 1);
  --dark-grey: hsl(0, 0%, 11%, .9);
  --light-grey: hsl(270, 46%, 86%, 1);
  --purple-bg: 	hsl(276, 88%, 36%, 1);
  --light-pink: hsl(328, 83%, 72%, 1);
  --dark-pink: hsl(328, 79%, 48%, 1);
  --white-bg: hsl(273, 53%, 97%, .5);
  --font-primary: hsl(190, 98%, 46%, 1);
  --font-secundary: hsl(190, 63%, 70%, 1);
  font-size: 62.5%;
  font-family: 'Source Code Pro', monospace;
  scroll-behavior: smooth;
  overflow-x:hidden;
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