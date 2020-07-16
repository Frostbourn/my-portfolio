import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
   :root {
    --primary: #293347;
    --secondary: #8c43ff;
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    }
    body {
        font-family: 'Montserrat', sans-serif !important;
        font-size: 16px;
        color: var(--primary);
        overflow-x: hidden;
    }
`

const IndexPage = data => (
  <Layout>
    <GlobalStyle />
    <SEO title="Jakub Skowroński" keywords="frontend developer" />
  </Layout>
)

export default IndexPage
