import styled from "styled-components";
import media from "styled-media-query";

export const SocialLinksWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 2.5rem;

  ${media.lessThan("medium")`
    margin: 1rem;
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
  transition: color 300ms;

  &:hover{
    color: var(--light-pink);
  }
`

export const IconWrapper = styled.div`
  margin: 1rem 0;
  width: 30px;
  height: 30px;
`