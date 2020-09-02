import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="My projects" />
    <h1>My projects</h1>
    <p>Welcome to my projects</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Projects;
