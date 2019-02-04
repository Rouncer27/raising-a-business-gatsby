import React, { Component } from 'react'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import Layout from '../components/layout'

import styled from 'styled-components'

const StyledHero = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 50rem;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const PodcastContent = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 1rem auto 5rem;
  padding: 2rem;

  p {
    font-size: 1.8rem;
  }

  ul {
    li {
      margin: 1rem auto;
      font-size: 1.8rem;
    }
  }

  .wp-audio-shortcode {
    margin: 5rem auto 2rem;
  }
`

const PodcastHeader = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 3rem auto 1rem;
  padding: 0 2rem;

  h1 {
    margin: 0;
    text-transform: uppercase;
    font-size: 2rem;
  }
`

class Post extends Component {
  render() {
    const { title, content } = this.props.data.wordpressPost
    const heroImg = this.props.data.wordpressPost.featured_media.localFile
      .childImageSharp.fluid
    const altText = this.props.data.wordpressPost.featured_media.alt_text
    return (
      <Layout location="single-podcast">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <StyledHero>
          <div>
            <Img fluid={heroImg} alt={altText} />
          </div>
        </StyledHero>
        <PodcastHeader>
          <h1>{title}</h1>
        </PodcastHeader>

        <PodcastContent>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </PodcastContent>
      </Layout>
    )
  }
}

export const postQuery = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      content
      featured_media {
        source_url
        alt_text
        localFile {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Post
