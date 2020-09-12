import React from "react"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <h2>Data:</h2>
      <pre>{JSON.stringify(data)}</pre>
    </Layout>
  )
}
