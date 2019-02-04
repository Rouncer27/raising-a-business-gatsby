import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <h2>Oh no! The template page!</h2>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
    }
  }
`
