import React, { Component } from 'react'
import Img from 'gatsby-image'

import styled from 'styled-components'

const StyledPageHero = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 50rem;
  overflow: hidden;
`

const PageHeroWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;

  h2 {
    margin: 0;
    padding: 2rem;
    border-top: 0.5rem solid ${props => props.theme.green};
    border-bottom: 0.5rem solid ${props => props.theme.green};
    color: ${props => props.theme.white};
    text-transform: uppercase;
  }
`

const PageHeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

const PageHeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.grey};
  opacity: 0.4;
  z-index: 5;
`

class PageHero extends Component {
  render() {
    return (
      <StyledPageHero>
        <PageHeroWrapper>
          <h2>{this.props.heropagetitle}</h2>
        </PageHeroWrapper>
        <PageHeroImage>
          <Img fluid={this.props.heropageimg} alt="The skys the limit!" />
        </PageHeroImage>
        <PageHeroOverlay />
      </StyledPageHero>
    )
  }
}

export default PageHero
