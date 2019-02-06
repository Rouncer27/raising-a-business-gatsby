import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import SiteWrapper from './Styles/SiteWrapper';
import Button from './Styles/Button';

const SmallLinkSec = styled.section`
  padding: 3rem 0;

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 5rem 0;
  }
`;

const SmallLinkHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin: 2rem auto 4rem;
  }

  h2 {
    margin: 0 auto;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1;
  }

  h3 {
    margin: 0 auto;
    font-weight: 800;
  }
`;

const SmallLinkContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 2rem auto;

  p {
    font-family: ${props => props.theme.fontPrim};
    font-size: 1.8rem;
    font-weight: 300;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 1.6rem;
    }
  }
`;

const SmallLinkButton = styled.div`
  width: 100%;
`;

class SmallLink extends Component {
  render() {
    const { slbtn, slbtnurl, slcontent, slsub, sltitle } = this.props;
    return (
      <SmallLinkSec>
        <SiteWrapper>
          <SmallLinkHeader>
            <h2>{sltitle}</h2>
            <h3>{slsub}</h3>
          </SmallLinkHeader>
          <SmallLinkContent>
            <p dangerouslySetInnerHTML={{ __html: slcontent }} />
          </SmallLinkContent>
          <SmallLinkButton>
            <Button to="/podcasts">{slbtn}</Button>
          </SmallLinkButton>
        </SiteWrapper>
      </SmallLinkSec>
    );
  }
}

export default SmallLink;
