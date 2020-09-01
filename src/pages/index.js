import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Hello world, I'm</h2>
    <h1>Jorge Giovannetti</h1>
    <p>I'm a Computer Science student @ Tec de Monterrey with a passion for learning and experimenting.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/projects/">My projects</Link> <br />
  </Layout>
)

export default IndexPage;
