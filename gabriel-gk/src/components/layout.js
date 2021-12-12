import React from "react";
import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <>
      <aside>
        <Menu />
      </aside>
      <main>{children}</main>
    </>
  )
}

export default Layout