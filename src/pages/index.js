import React from "react"
import Layout from "../components/layout"

const Home = () => {
  return <Layout />
}

/*

export const query = graphql`
  query indexHome {
    qryArtwork: allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: "artwork" } } } }
      }
    ) {
      totalCount
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
*/

export default Home
