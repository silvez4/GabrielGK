import React, { useState } from "react";
import * as S from "./styled";
import { StaticImage } from 'gatsby-plugin-image';
import result from "./textoRotatorio";

const Hero = () => {
  //#region Conteudo
  // const um = <p>Olá meu nome é </p>;
  // const dois = <h1>Gabriel Silva.</h1>;
  // const tres = <h2>E crio coisas para a internet :)</h2>;
  // const quatro = (
  //   <>
  //     <p>
  //       Atualmente estudande de ciência da computação, desenvolvedo soluções web, e em busca de novos projetos, quem sabe o seu projeto não é o{' '}
  //       <S.StyledLink to="/contato">proximo?</S.StyledLink>
  //     </p>
  //   </>);
  // const cinco = (
  //   <S.ImgWrapper>
  //     <StaticImage
  //       src="../../images/Gabriel_Silva.jpeg"
  //       alt="Logo GhostK"
  //       placeholder="blurred"
  //     />
  //   </S.ImgWrapper>
  // );
  // const items = [um, dois, tres, quatro];
  //#endregion 
  return (
    <S.HeroWrapper>
      <S.Content>
        <p>Olá meu nome é </p>
        <h1>Gabriel Silva.</h1>
        <h2>E crio coisas para a internet :)</h2>
        <p>
          Atualmente estudande de ciência da computação, desenvolvedo soluções web, e em busca de novos projetos, quem sabe o seu projeto não é o proximo?
        </p>
        <div className="circuloWrapper">
          <div className="circulo">
            <div className="texto">
              <S.StyledLink to="/contato">Vamos Conversar</S.StyledLink>
            </div>
          </div>
        </div>
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