import React from "react";
import Menu from "../Menu";

import styled from "styled-components";
import GlobalStyles from "../../styles/global";

const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
`
const LayoutMain = styled.main`
  background: red;
  width: 100%;
  padding: 2em 0;
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <navbar>
        <Menu />
      </navbar>
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

export default Layout