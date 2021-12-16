import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import * as S from "./styled"

const Logo = () => {
  const { logoImage } = useStaticQuery(
    graphql`
    query {
      logoImage: file(relativePath: { eq: "images/GhostK_cor.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
          }
        }
      }
    `
  )
  return <S.AvatarWrapper image={logoImage.childImageSharp.gatsbyImageData} />
}

export default Logo;