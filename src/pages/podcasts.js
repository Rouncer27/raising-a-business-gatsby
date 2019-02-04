import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import moment from 'moment'

import HeroImg from '../components/HeroImg'

import styled from 'styled-components'

const StyledPodcastsItem = styled.div`
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

const StyledPodcastsItemDate = styled.div`
  p {
    margin: 0;
    transition: all 0.3s ease;
    color: ${props => props.theme.grey};
    font-weight: 100;

    @media (min-width: 1025px) {
      font-size: 1.2rem;
    }
  }
`

const StyledPodcastsItemTitle = styled.div`
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

const StyledPodcastsItemExcerpt = styled.div`
  p {
    transition: all 0.3s ease;
    color: ${props => props.theme.black};
    font-weight: 300;

    @media (min-width: 1025px) {
      font-size: 1.4rem;
    }
  }
`

const StyledPodcastsItemListen = styled.div`
  position: absolute;
  right: 1.5rem;
  bottom: 0;
  left: 1.5rem;
  margin: 0 auto;

  p {
    transition: all 0.3s ease;
    color: ${props => props.theme.blue};
    font-weight: 700;
    text-transform: uppercase;

    @media (min-width: 1025px) {
      font-size: 1.4rem;
    }
  }
`

const StyledPodcastsItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 110rem;
  margin: 3rem auto;
`

class Podcasts extends Component {
  render() {
    const acf = this.props.data.wordpressPage.acf
    const podcasts = this.props.data.allWordpressWpSwbPodcasts.edges
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
        <StyledPodcastsItems>
          {podcasts.length > 0 &&
            podcasts.map(podcast => {
              {
                return (
                  <StyledPodcastsItem key={podcast.node.id}>
                    <Link to={`/podcasts/${podcast.node.slug}`}>
                      <StyledPodcastsItemDate>
                        <p>
                          {moment(podcast.node.date).format('MMMM DD, YYYY')}
                        </p>
                      </StyledPodcastsItemDate>
                      <StyledPodcastsItemTitle>
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: podcast.node.title,
                          }}
                        />
                      </StyledPodcastsItemTitle>
                      <StyledPodcastsItemExcerpt>
                        <p>{podcast.node.acf._swb_theme_excerpt}</p>
                      </StyledPodcastsItemExcerpt>
                      <StyledPodcastsItemListen>
                        <p>Listen Now</p>
                      </StyledPodcastsItemListen>
                    </Link>
                  </StyledPodcastsItem>
                )
              }
            })}
        </StyledPodcastsItems>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  {
    wordpressPage(slug: { eq: "podcasts" }) {
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

    allWordpressWpSwbPodcasts {
      edges {
        node {
          title
          id
          date
          slug
          content
          acf {
            _swb_theme_excerpt
          }
        }
      }
    }
  }
`

export default Podcasts
