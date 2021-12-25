import React, { useState } from "react";
import Logo from '../Logo';
import * as S from "./styled"

const Menu = () => {
  const [nav, showNav] = useState(false)
  return (
    <div className="menu-wrapper">
      <Logo />
      <S.MenuBtn onClick={() => showNav(!nav)} nav={nav}>
        <span></span>
      </S.MenuBtn>
      <S.MenuWrapper nav={nav}>
        <S.StyledLink to="/">Home</S.StyledLink>
        <S.StyledLink to="/projetos">Projetos</S.StyledLink>
        <S.StyledLink to="/contato">Contato</S.StyledLink>
      </S.MenuWrapper>
    </div>
  )
}

export default Menu