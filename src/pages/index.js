import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { createGlobalStyle } from "styled-components"
import Header from "../components/header"

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
  }
`

const IndexPage = () => (
  <React.Fragment>
    <GlobalStyle />
    <Header />
  </React.Fragment>
)

export default IndexPage
