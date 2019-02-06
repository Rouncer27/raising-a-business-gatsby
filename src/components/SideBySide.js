import React, { Component } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import SiteWrapper from './Styles/SiteWrapper';

const SideBySideSec = styled.section`
  padding: 1rem 0;

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 5rem 0;
  }
`;

const SideByImage = styled.div`
  width: 100%;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(50% - 3rem);
    margin-right: 3rem;
  }

  div {
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
  }
`;

const SideByContent = styled.div`
  width: 100%;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(50% - 3rem);
    margin-left: 3rem;
  }
`;

const SideByBio = styled.div`
  margin: 4rem auto;

  &:first-of-type {
    @media (min-width: ${props => props.theme.bpTablet}) {
      margin: 0 auto 4rem;
    }
  }

  &:last-of-type {
    margin: 4rem auto 0;
  }

  h3 {
    margin: 0 auto 1rem;
    font-family: ${props => props.theme.fontPrim};
    font-weight: 500;
    text-transform: uppercase;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.6rem;
    text-align: center;
    line-height: 1.5;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 1.4rem;
      text-align: left;
    }
  }
`;

class SideBySide extends Component {
  render() {
    return (
      <SideBySideSec>
        <SiteWrapper>
          <SideByImage>
            <Img fluid={this.props.sbsimg} alt="to do alt text!" />
          </SideByImage>
          <SideByContent>
            {this.props.sbsbios.map(bio => {
              return (
                <SideByBio key={bio.title}>
                  <h3>{bio.title}</h3>
                  <div>
                    <p>{bio.paragraph}</p>
                  </div>
                </SideByBio>
              );
            })}
          </SideByContent>
        </SiteWrapper>
      </SideBySideSec>
    );
  }
}

export default SideBySide;
