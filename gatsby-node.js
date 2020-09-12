const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/components/blog-post.js`)
  const result = await graphql(`
    query {
      qryArtwork: allWpPost(
        filter: {
          title: {}
          categories: { nodes: { elemMatch: { slug: { eq: "artwork" } } } }
        }
      ) {
        edges {
          ...WpPostEdgeFragment
          node {
            id
            categories {
              nodes {
                id
                slug
              }
            }
          }
        }
        totalCount
      }
      qryLinks: allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "links" } } } }
        }
      ) {
        edges {
          ...WpPostEdgeFragment
          node {
            id
            categories {
              nodes {
                id
                slug
              }
            }
          }
        }
        totalCount
      }
      qrySocialLinks: allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "sociallinks" } } } }
        }
      ) {
        edges {
          ...WpPostEdgeFragment
          node {
            id
            categories {
              nodes {
                id
                slug
              }
            }
          }
        }
        totalCount
      }
      qrySplashLinks: allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "splashlinks" } } } }
        }
      ) {
        edges {
          ...WpPostEdgeFragment
          node {
            id
            categories {
              nodes {
                id
                slug
              }
            }
          }
        }
        totalCount
      }
      allWpMenu {
        nodes {
          id
          name
          menuItems {
            nodes {
              title
              label
            }
          }
        }
      }
      allWpCategory {
        edges {
          node {
            id
            name
            slug
          }
        }
        totalCount
      }
    }

    fragment WpPostEdgeFragment on WpPostEdge {
      node {
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
  `)
  result.data.qryArtwork.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug,
        title: edge.node.title,
      },
    })
  })
}
