import React from "react";
import { Link } from 'gatsby';
import Logo from '../logo';

const Menu = () => (
  <div className="menu-wrapper">
    <Logo />
    <Link to="/">Home</Link>
    <Link to="/projetos">Projetos</Link>
    <Link to="/contato">Contato</Link>
  </div>
)

export default Menu