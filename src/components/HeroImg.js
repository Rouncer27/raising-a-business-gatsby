import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const HeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 75vh;
  overflow: hidden;
  background: ${props => props.theme.black};
`;

const HeroImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .rab-background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4 !important;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  z-index: 500;

  h1 {
    width: 50rem;
    margin: 2rem auto;
    padding: 2.5rem;
    font-size: 3rem;
    border-top: 0.5rem solid ${props => props.theme.green};
    border-bottom: 0.5rem solid ${props => props.theme.green};

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 4rem;
    }
  }

  span {
    display: block;
    font-family: ${props => props.theme.fontPrim};
    font-size: 1em;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1;
  }

  .gatsby-image-wrapper {
    width: 500px !important;
  }
`;

class HeroImg extends Component {
  render() {
    return (
      <HeroImage>
        <HeroImageWrapper>
          <Img
            className="rab-background-image"
            fluid={this.props.heroImgFluid}
            alt={this.props.heroImageAlt}
          />
          <HeroContent>
            <h1>
              <span>{this.props.heroTitleTop}</span>
              <span>{this.props.heroTitleBottom}</span>
            </h1>
          </HeroContent>
        </HeroImageWrapper>
      </HeroImage>
    );
  }
}

export default HeroImg;
