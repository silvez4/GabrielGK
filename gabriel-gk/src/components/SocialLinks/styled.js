import styled from "styled-components";
import media from "styled-media-query";

export const SocialLinksWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 2.5rem;

  ${media.lessThan("medium")`
    margin: .5rem;
  `}
`

export const SocialLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  list-style: none;
`

export const SocialLinksItem = styled.li`

`

export const SocialLinksLink = styled.a`
  color: var(--dark-pink);
  text-decoration: none;
`

export const IconWrapper = styled.div`
  margin: 1rem 0;
  width: 30px;
  height: 30px;
  transition: all 300ms;

  &:hover{
    transform: translateY(-.3rem) scale(1.2);
    color: var(--light-pink);
  }

  ${media.lessThan('medium')`
    width: 25px;
    height: 25px;
  `}
`