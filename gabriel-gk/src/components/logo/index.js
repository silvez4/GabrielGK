import React from "react";
import { StaticImage } from 'gatsby-plugin-image'
import * as S from "./styled"

const Logo = () => {
  return (
    <S.AvatarWrapper>
      <StaticImage
        src="../../images/GhostK_cor.png"
        alt="Logo GhostK"
        placeholder="blurred"
      />
    </S.AvatarWrapper>
  )
}

export default Logo;