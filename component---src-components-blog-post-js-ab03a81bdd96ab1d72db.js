(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{Bl7J:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),r=n("Wbzz"),i=function(e){var t=e.siteTitle;return l.a.createElement("header",null,l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",justifyItems:"space-between",alignItems:"center"}},l.a.createElement("h1",null,l.a.createElement(r.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};i.defaultProps={siteTitle:""};var c=i,u=function(){return l.a.createElement(r.StaticQuery,{query:o,render:function(e){if(e.allWpPost.edges){var t=e.allWpPost.edges;return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",null,t.map((function(e){return l.a.createElement("li",null,l.a.createElement(r.Link,{to:Object(r.withPrefix)("/"+e.node.slug),activeStyle:{textDecoration:"salmon double underline"}},e.node.title))}))))}return null}})},o="1334743526";t.a=function(e){var t=e.children;return l.a.createElement(r.StaticQuery,{query:"3649515864",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{className:"page"},l.a.createElement("div",{className:"nav"},l.a.createElement(u,null)),l.a.createElement("div",{className:"content"},t)))}})}},J6wm:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c})),n.d(t,"query",(function(){return u}));var a=n("q1tI"),l=n.n(a),r=n("Bl7J"),i=function(e,t){return e||t};function c(e){var t=e.data.allWpPost.nodes[0];return l.a.createElement(r.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,t.title),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:i(t.content)}}),l.a.createElement("div",null,l.a.createElement("img",{alt:t.featuredImage.node.description,src:"/"+t.featuredImage.node.localFile.relativePath}))))}var u="301665698"}}]);
//# sourceMappingURL=component---src-components-blog-post-js-ab03a81bdd96ab1d72db.js.map