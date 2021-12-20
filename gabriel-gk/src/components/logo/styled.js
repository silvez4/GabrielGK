import styled from "styled-components"
import media from "styled-media-query"

export const LogoWrapper = styled.div`
  .gatsby-image-wrapper {
    background-color: black;
    margin: 1rem auto;
    height: 5rem;
    width: 5rem;
    ${media.lessThan("large")`
    height: 3rem;
    width: 3rem;
  `}
  }
`