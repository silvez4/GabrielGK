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

`

export const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;
  flex-wrap: wrap;
  text-decoration: none;
  font-size: clamp(10px, 2rem, 2vw);
  color: var(--font-primary);

  &::after{
    content: '';
    position: absolute;
    background: var(--font-primary);
    height: 2px;
    width: 0%;
    left: 0;
    bottom: -.1em;
    transition: width 300ms;
  }
  &:hover::after{
    width: 95%;
  }
`

export const ImgWrapper = styled.div`
  overflow: hidden;
  width: 300px;
  height: 300px;
  border: 2px solid var(--dark-pink);
  border-radius: 50%;
  filter: grayscale(80%);
  transition: box-shadow, filter 1s ease;

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