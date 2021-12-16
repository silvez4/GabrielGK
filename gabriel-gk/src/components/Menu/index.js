import React from "react";
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import logoImage from '../logo'

const Menu = () => (
  <div className="menu-wrapper">
    <logoImage />
    <Link to="/">Home</Link>
    <Link to="/projetos">Projetos</Link>
    <Link to="/contato">Contato</Link>
  </div>
)

export default Menu