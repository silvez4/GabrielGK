import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "gatsby"

export const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  width: 100%;
  max-height: 80vh;
  margin: 1rem auto;
  justify-items:center;
  align-items: center;

  ${media.lessThan('medium')`
    text-align:center;
    grid-template-columns: 1fr;
  `}
`

export const Content = styled.section`
  p{
    font-size: clamp(10px, 2rem, 2vw);
    color: var(--font-secundary);
    margin-bottom: 1rem;
  }
  h1{
    font-size: clamp(20px, 4rem, 4vw);
  }
  h2{
    font-size: clamp(18px, 3.5rem, 3.5vw);
    color: var(--font-primary);
    margin-bottom: 2rem;
  }

  .circuloWrapper{
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .circulo{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;;
    height: 5rem;
    border-radius: 0% 100% 100% 0% / 100% 50% 50% 0%;
    border: 2px solid var(--dark-pink);
    transform: rotateZ(-20deg);
    transition: transform 300ms ease;
  }
  .circulo:hover{
    transform: rotateZ(0deg);
    border: 0;
  }
  .texto{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
  }
`

export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  display: block;
  color: var(--font-primary);
  font-size: clamp(12px, 2rem, 2vw);
  transition: color 300ms;

  &:hover{
    color: var(--dark-pink);
    text-shadow: 0px 0px 2px var(--dark-pink);
  }
`

export const ImgWrapper = styled.div`
  overflow: hidden;
  width: 300px;
  height: 300px;
  border: 2px solid var(--dark-pink);
  border-radius: 50%;
  filter: grayscale(80%);
  transition: box-shadow 1s ease, filter 1s ease;

  &:hover{
    box-shadow: 0px 2px 2px var(--dark-pink),
    0px -2px 2px var(--dark-pink),
    2px 0px 2px var(--dark-pink),
    -2px 0px 2px var(--dark-pink);
    filter: grayscale(0);
  }

  ${media.lessThan('large')`

    width: 230px;
    height: 230px;
  `}
  ${media.lessThan('medium')`
    width: 150px;
    height: 150px;
  `}
`