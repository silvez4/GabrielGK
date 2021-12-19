import React from "react";
import { StaticImage } from 'gatsby-plugin-image'
import * as S from "./styled"

const Logo = () => {
  return (
    <S.NavWrapper>
      <StaticImage
        src="../../images/GhostK_cor.png"
        alt="Logo GhostK"
        placeholder="blurred"
      />
    </S.NavWrapper>
  )
}

export default Logo;