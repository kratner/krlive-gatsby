import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
//import { addChar } from "../utils/adapters"

const Nav = () => {
  return (
    <StaticQuery
      query={qryArtwork}
      render={data => {
        if (data.allWpPost.edges) {
          const menuItems = data.allWpPost.edges
          return (
            <React.Fragment>
              <ul>
                {menuItems.map(menuItem => (
                  <li>
                    <Link
                      to={`${menuItem.node.slug}/`}
                      activeStyle={{
                        textDecoration: "salmon double underline",
                      }}
                    >
                      {menuItem.node.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </React.Fragment>
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
