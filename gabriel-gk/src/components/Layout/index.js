import React from "react";
import Menu from "../Menu";

import GlobalStyles from "../../styles/global";
import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <navbar>
        <Menu />
      </navbar>
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

export default Layout