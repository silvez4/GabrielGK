import React from "react";
import { motion } from "framer-motion";
import GlobalStyles from "../../styles/global";
import * as S from "./styled"

import Menu from "../Menu";

import SocialLinks from "../SocialLinks";

const Layout = ({ children }) => {
  return (
    <>
      <S.SkipToContent to="#main">Pula Para Conteúdo</S.SkipToContent>
      <S.LayoutWrapper>
        <GlobalStyles />
        <S.NavbarWrapper>
          <Menu />
        </S.NavbarWrapper>
        <S.LayoutMain id="main">{children}</S.LayoutMain>
        <motion.main
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 2 + "rem" }}
          exit={{ opacity: 0, x: 200 }}
          transition={{
            type: "spring",
            mass: 0.35,
            stiffness: 75,
            duration: 0.3
          }}
        >
          {children}
        </motion.main>
      </S.LayoutWrapper>
      <SocialLinks />
    </>
  )
}

export default Layout