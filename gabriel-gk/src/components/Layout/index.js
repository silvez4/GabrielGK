import React from "react";
import Menu from "../Menu";

import GlobalStyles from "../../styles/global";
import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <S.SkipToContent to="#main">Pula Para Conteúdo</S.SkipToContent>
      <GlobalStyles />
      <navbar>
        <Menu />
      </navbar>
      <S.LayoutMain id="main">{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

export default Layout