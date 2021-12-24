import styled from "styled-components";
import { Link } from 'gatsby';

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const SkipToContent = styled(Link)`
  color: var(--dark-pink);
  position: absolute;
  border: var(--dark-pink) 2px solid;
  padding: .5rem 1rem;
  transform: translate(-100vw, -100%);
  transition: transform 350ms ease;

  &:focus{
    transform: translate(-30vw, -100%);
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