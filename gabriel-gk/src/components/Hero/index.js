import React from "react";
import * as S from "./styled";

import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {
  return (
    <S.HeroWrapper>
      <S.Content>
        <p>Olá meu nome é </p>
        <h1>Gabriel Silva.</h1>
        <h2>E crio coisas para a internet :)</h2>
        <p>
          Atualmente estudande de ciência da computação, desenvolvedo soluções web, e em busca de novos projetos, quem sabe o seu projeto não é o{' '}
          <S.StyledLink to="/contato">proximo?</S.StyledLink>
        </p>
        <a href="/contato" target="_blank" rel="noopener noreferrer"></a>
      </S.Content>
      <S.ImgWrapper>
        <StaticImage
          src="../../images/Gabriel_Silva.jpeg"
          alt="Logo GhostK"
          placeholder="blurred"
        />
      </S.ImgWrapper>
    </S.HeroWrapper>
  )
}

export default Hero;