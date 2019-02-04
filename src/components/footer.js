import React, { Component } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  padding: 4rem;
  background: ${props => props.theme.green};
`

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  text-align: center;

  p {
    margin: 0;
    color: ${props => props.theme.white};
    font-size: 1.4rem;
    text-transform: uppercase;

    a {
      margin: 0;
      color: ${props => props.theme.white};

      &:hover {
        color: ${props => props.theme.blue};
      }
    }
  }
`

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <FooterWrapper>
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.gatsbyjs.org"
            >
              Gatsby
            </a>
            {` `}
            by{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://switchbackcreative.ca/"
            >
              Switchback Creative Inc.
            </a>
          </p>
        </FooterWrapper>
      </StyledFooter>
    )
  }
}

export default Footer
