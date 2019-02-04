import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

import HeroImg from '../components/HeroImg'

const BlogWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  max-width: 95rem;
  margin: 2rem auto;
  padding: 2rem;
`

const BlogArticle = styled.div`
  position: relative;
  width: 100%;
  padding: 1.5rem;
  padding-bottom: 5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);

  @media (min-width: 1025px) {
    width: calc(33% - 4rem);
    margin: 2rem;
  }

  a {
    display: block;
  }

  a:hover {
    h3 {
      color: ${props => props.theme.green};
    }

    p {
      color: ${props => props.theme.green};
    }
  }
`

const BlogArticleTitle = styled.div`
  h3 {
    transition: all 0.3s ease;
    color: ${props => props.theme.black};
    font-weight: 500;

    @media (min-width: 1025px) {
      margin-bottom: 2rem;
      font-size: 2rem;
    }
  }
`

const BlogArticleExcerpt = styled.div`
  p {
    transition: all 0.3s ease;
    color: ${props => props.theme.black};
    font-weight: 300;

    @media (min-width: 1025px) {
      font-size: 1.4rem;
    }
  }
`

class Blog extends Component {
  render() {
    const acf = this.props.data.wordpressPage.acf
    const posts = this.props.data.allWordpressPost.edges
    return (
      <Layout location={this.props.location.pathname}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HeroImg
          heroImgFluid={
            acf._swb_theme_header_image.localFile.childImageSharp.fluid
          }
          heroImageAlt={acf._swb_theme_header_image.alt_text}
          heroTitleTop={acf._swb_theme_header_top_title}
          heroTitleBottom={acf._swb_theme_header_bottom_title}
        />

        <BlogWrapper>
          {posts.map((post, index) => {
            return (
              <BlogArticle key={index}>
                <Link to={`posts/${post.node.slug}`}>
                  <BlogArticleTitle>
                    <h3>{post.node.title}</h3>
                  </BlogArticleTitle>
                  <BlogArticleExcerpt>
                    <p
                      dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                    />
                  </BlogArticleExcerpt>
                </Link>
              </BlogArticle>
            )
          })}
        </BlogWrapper>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  {
    wordpressPage(slug: { eq: "blog" }) {
      title
      acf {
        _swb_theme_header_image {
          id
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
        _swb_theme_header_top_title
        _swb_theme_header_bottom_title
      }
    }

    allWordpressPost {
      edges {
        node {
          title
          id
          date
          slug
          content
          excerpt
          featured_media {
            id
            source_url
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
    }
  }
`

export default Blog
