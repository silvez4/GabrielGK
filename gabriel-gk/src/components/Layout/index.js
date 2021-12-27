import React from "react";

import GlobalStyles from "../../styles/global";
import * as S from "./styled"

import Menu from "../Menu";

import SocialLinks from "../SocialLinks";

const Layout = ({ children }) => {
  return (
    <>
      <S.SkipToContent to="#main">Pula Para Conteúdo</S.SkipToContent>
      <S.LayoutWrapper>
        <GlobalStyles />
        <S.NavbarWrapper>
          <Menu />
        </S.NavbarWrapper>
        <S.LayoutMain id="main">{children}</S.LayoutMain>
      </S.LayoutWrapper>
      <SocialLinks />
    </>
  )
}

export default Layout