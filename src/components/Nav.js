import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Nav = () => {
  return (
    <StaticQuery
      query={qryArtwork}
      render={data => {
        if (data.allWpPost.edges) {
          const menuItems = data.allWpPost.edges
          return (
            <ul>
              {menuItems.map(menuItem => (
                <li>
                  <a href={menuItem.node.slug}>{menuItem.node.title}</a>
                </li>
              ))}
            </ul>
          )
        }
        return null
      }}
    />
  )
}

export default Nav

export const qryArtwork = graphql`
  query qryArtwork {
    allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: "artwork" } } } }
      }
    ) {
      edges {
        node {
          id
          slug
          title
        }
      }
      totalCount
    }
  }
`
