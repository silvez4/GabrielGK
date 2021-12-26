import React from "react";
import { StaticImage } from 'gatsby-plugin-image'
import * as S from "./styled"

const Logo = () => {
  return (
    <S.LogoWrapper>
      <StaticImage
        src="../../images/GhostK_cor.png"
        alt="Logo GhostK"
        placeholder="blurred"
      />
      <div id="tudo">
        <div id="fund">
          <StaticImage
            src="../../images/GhostK_border.png"
            alt="Logo GhostK"
            placeholder="blurred"
          />
        </div>

        <div id="fant">
          <StaticImage
            src="../../images/GhostK_foriginal.png"
            alt="Logo GhostK"
            placeholder="blurred"
          />
        </div>
      </div>
    </S.LogoWrapper>
  )
}

export default Logo;