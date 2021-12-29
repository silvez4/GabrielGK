import styled from "styled-components";
import media from "styled-media-query"
import { Link } from 'gatsby';

const animMenu = '300ms';

export const MenuWrapper = styled.div`
  z-index: 999;
  position: absolute;
  display: flex;
  visibility: ${({ nav }) => nav ? "visible" : "hidden"};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  height: 100vh;
  min-width: 30%;
  transition: visibility ${animMenu} ease, transform ${animMenu} ease-in;
  transform: ${({ nav }) => nav ? "translateX(0)" : "translateX(100%)"};
  background: var(--dark-grey);
  font-size: clamp(10px, 2.5rem, 3vw);
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  color: var(--dark-pink);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 2rem 0;
  width: 100%;
  transition: all ${animMenu};

  &::before{
    content: '';
    background: var(--black-bg);
    position: absolute;
    height: 5px;
    width: 0px;
    left: 0;
    bottom: -4px;
    transition: width 1s;
    transform-origin: right 2px;
  }

  &:hover::before{
    width:100%;
  }

  &:hover{
    color: var(--light-pink);
    text-shadow: 1px 1px 1px var(--dark-pink), 1px 2px 1px var(--dark-pink), 1px -1px 1px var(--dark-pink); 
  }
`;

export const MenuBtn = styled.div`
  z-index: 9999;
  position: absolute;
  cursor: pointer;
  display:flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  margin: 1rem 2rem 1rem 0;
  height: 5rem;
  width: 5rem;

  &:hover span{
    background: var(--font-primary);
  }

  span{
    display:block;
    position: relative;
    width:60%;
    height: .5rem;
    border-radius: 2rem;
    background: var(--dark-pink);
    transition: all ${animMenu} cubic-bezier(.17,-0.18,.37,1.28);
    transform: ${({ nav }) => nav ? "rotateZ(-45deg)" : "rotateZ(0deg)"};
  }
  
  span::before,
  span::after{
    content: '';
    position: absolute;
    height: .5rem;
    width:100%;
    border-radius: 2rem;
    margin: .3rem 0;
    background: inherit;
    transition: transform ${animMenu} cubic-bezier(.17,-0.18,.37,1.28);
  }
  span::before{
    bottom: -1.2em;
    transform: ${({ nav }) => nav ? "rotateZ(90deg) translateX(-30%)" : "rotateZ(0deg)"};
  }
  span::after{
    top: -1.2em;
    transform: ${({ nav }) => nav ? "translateX(100%)" : "translateX(0)"};
    background: ${({ nav }) => nav ? "transparent" : "inherit"};
  }
  ${media.lessThan("medium")`
    height: 3rem;
    width: 3rem;

    span{
      width: 100%;
    }
  `}
`;