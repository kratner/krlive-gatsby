import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const z = (data, msg) => {
  return data ? data : msg
}

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        {/* <div id="#post-content">{z(post.content)}</div> */}
        <div dangerouslySetInnerHTML={{ __html: z(post.content) }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        id
        title
        content
        categories {
          nodes {
            link
            id
            name
            uri
          }
        }
        link
        uri
        acfLinks {
          class
          description
          fieldGroupName
          href
          icon
          target
          text
          title
          type
          weight
        }
        acfSocialLinks {
          fieldGroupName
          socialLinkWeight
        }
        acfSplashLinks {
          fieldGroupName
          splashLinkWeight
          splashlinkhref
          splashlinklinktext
          splashlinktitle
        }
        slug
      }
    }
  }
`
