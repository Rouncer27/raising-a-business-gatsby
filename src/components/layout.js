import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './Golbal'
import theme from './Theme'
import Header from './header'
import Footer from './footer'

class Layout extends Component {
  render() {
    return (
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
          <>
            <ThemeProvider theme={theme}>
              <React.Fragment>
                <GlobalStyle />
                <Header
                  siteTitle={data.site.siteMetadata.title}
                  location={this.props.location}
                />
                <div>{this.props.children}</div>
                <Footer />
              </React.Fragment>
            </ThemeProvider>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
