import styled from "styled-components";
import media from "styled-media-query"
import { Link } from 'gatsby';

export const MenuWrapper = styled.div`
  z-index: 999;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  height: 100vh;
  min-width: 30%;
  
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
  transition: all 1s;

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
  top: 0;
  right: 0;
  background-color: red;
  margin: 1rem 2rem 1rem 0;
  height: 5rem;
  width: 5rem;
  &::before{
    content: '';
    background: blue;
    display: block;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    height: 10px;
    width: 100%;
  }
  ${media.lessThan("medium")`
    height: 3rem;
    width: 3rem;
  `}
`;