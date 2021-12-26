import React from "react";
import Menu from "../Menu";

import GlobalStyles from "../../styles/global";
import * as S from "./styled"

import SocialLinks from "../SocialLinks";

const Layout = ({ children }) => {
  return (
    <>
      <S.SkipToContent to="#main">Pula Para Conteúdo</S.SkipToContent>
      <S.LayoutWrapper>
        <GlobalStyles />
        <navbar>
          <Menu />
        </navbar>
        <S.LayoutMain id="main">{children}</S.LayoutMain>
      </S.LayoutWrapper>
      <SocialLinks />
    </>
  )
}

export default Layout