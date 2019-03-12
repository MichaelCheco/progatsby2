import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
const Div = styled.div`
  grid-column: 2 / -1;
`
const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <Div>
        <aside>
          <h3>Archive</h3>
          <ul>
            {allMarkdownRemark.edges.map(edge => (
              <li key={edge.node.frontmatter.slug}>
                <Link to={`/posts${edge.node.frontmatter.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </Div>
    )}
  />
)

export default Archive
