import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

class Logo extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query MainLogo {
            allWordpressAcfOptions {
              edges {
                node {
                  options {
                    swb_theme_options_company_home_page_logo {
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <div>
              <Img
                fluid={
                  data.allWordpressAcfOptions.edges[0].node.options
                    .swb_theme_options_company_home_page_logo.localFile
                    .childImageSharp.fluid
                }
                alt="Raising a business"
              />
            </div>
          )
        }}
      />
    )
  }
}

export default Logo
