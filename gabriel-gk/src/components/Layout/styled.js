import styled from "styled-components";
import { Link } from 'gatsby';


export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`

export const SkipToContent = styled(Link)`
  color: var(--dark-pink);
  position: absolute;
  border: var(--dark-pink) 2px solid;
  padding: .5rem 1rem;
  margin: .5rem;
  transform: translateX(-150%);
  transition: transform 350ms ease;

  &:focus{
    /* transform: translate(-30vw, -100%); */
    transform: translateX(0);
  }
`

export const LayoutMain = styled.main`
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 2em 0;
`
