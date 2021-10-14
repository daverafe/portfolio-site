import * as React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby' 

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Here's a link to a site I built</p>
      <Link to="https://epic-allen-47afe0.netlify.app/">Art Market</Link>
    </Layout>
  )
}
export default IndexPage