import * as React from "react"
import SEO from "../components/seo";
import { Link } from "gatsby"
import Logo from '../components/Logo';
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Erro 404" />
    <Logo />
    <h1>Opss.. A Página Que Está Procurando Não Existe</h1>
    <Link to="/">Voltar Para Home</Link>
  </Layout>
)
export default NotFoundPage
