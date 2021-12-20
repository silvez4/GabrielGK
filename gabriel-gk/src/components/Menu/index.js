import React from "react";
import Logo from '../Logo';
import * as S from "./styled"

const Menu = () => (
  <div className="menu-wrapper">
    <Logo />
    <S.MenuWrapper>
      <S.MenuBtn />
      <S.StyledLink to="/">Home</S.StyledLink>
      <S.StyledLink to="/projetos">Projetos</S.StyledLink>
      <S.StyledLink to="/contato">Contato</S.StyledLink>
    </S.MenuWrapper>
  </div>
)

export default Menu