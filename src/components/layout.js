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
        <div className="el-fluid d-3-col m-12-col t-3-col" id="navLeft">
          <Nav />
        </div>
        <div className="el-fluid d-9-col m-12-col t-9-col" id="postContent">
          {children}
        </div>
      </React.Fragment>
    )}
  />
)

export default Layout
