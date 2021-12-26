import styled, { keyframes } from "styled-components"
import media from "styled-media-query"

const rodar = keyframes`
  0%{
      transform: translateX(-200%) rotate(0deg);
    }
    50%{
      transform: translateX(200%) rotate(360deg);
    }
    100%{
      transform: translateX(-200%) rotate(0deg);
    }
`
export const LogoWrapper = styled.div`
  .gatsby-image-wrapper {
    /* background-color: black; */
    margin: 1rem auto;
    height: 5rem;
    width: 5rem;
    ${media.lessThan("medium")`
    height: 3rem;
    width: 3rem;
  `}
  }
  #tudo{
    position: relative;
    width: 100%;
  }
  #fund{
    /* position: relative; */
    animation: ${rodar} 5s linear infinite;

  }
  #fant{
    position: absolute;
    background-color: none;
    /* display: none; */
    top: 0;
    left: 0;
    transform-origin: center;
    animation: andar 5s linear infinite;
  }
  @keyframes andar{
    0%{
      transform: translate(-200%, -5%) rotate(0deg);
    }
    50%{
      transform: translate(200%, 5%) rotate(0deg);
    }
    100%{
      transform: translate(-200%, -5%) rotate(0deg);
    }
  }
`