import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Site content : {data.site.siteMetadata.title}</p>
    <p>Site content : {data.site.siteMetadata.description}</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <h2>Liste de toutes les pages en MarkDown :</h2>
    <ul>
      {data.allMarkdownRemark.edges.map(elem => {
        return (
          <li key={elem.node.id}>Page title : {elem.node.frontmatter.title}</li>
        )
      })}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        description
      }
    }

    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`
