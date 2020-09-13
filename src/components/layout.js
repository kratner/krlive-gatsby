import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Nav from "./Nav"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Nav />
        <div>{children}</div>
      </React.Fragment>
    )}
  />
)

export default Layout
