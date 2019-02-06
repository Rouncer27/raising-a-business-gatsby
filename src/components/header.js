import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import { StaticQuery, graphql } from 'gatsby'

import styled from 'styled-components';

import Navigation from './Navigation';
import Logo from './Logo';

const StyledHeader = styled.div`
  position: ${props => (props.location ? 'absolute' : 'relative')};
  top: 0;
  left: 0;
  width: 100%;
  background: ${props => (props.location ? 'transparent' : props.theme.green)};
  text-align: center;
  z-index: 5000;

  @media (min-width: ${props => props.theme.bpTablet}) {
    position: ${props => (props.location ? 'absolute' : 'relative')};
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
`;

const HeaderLogo = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 35rem;
  margin: 1rem auto 0;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin: 0 auto;
    transform: translateY(-5rem);
  }

  h1 {
    margin: 0;
    span {
      display: block;
      position: absolute;
      transform: translateX(-9999999px);
    }

    .gatsby-image-wrapper {
      width: 100%;
      max-width: 35rem;
      margin: 0 auto;
    }
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const splitLocation = this.props.location
      ? this.props.location.split('/')
      : [];
    const splitSlug = splitLocation.filter(loc => {
      if (loc !== '') return loc;
    });
    const slug = splitSlug.length === 0 ? '/' : splitSlug[0];
    return (
      <StyledHeader
        location={
          slug === '/' || slug === 'podcasts' || slug === 'blog' ? true : false
        }
      >
        <HeaderWrapper>
          <Navigation />
          <HeaderLogo
            ref={logowrap => (this.logowrap = ReactDOM.findDOMNode(logowrap))}
          >
            <h1>
              <Link to="/">
                <span>{this.props.siteTitle}</span>
                <Logo />
              </Link>
            </h1>
          </HeaderLogo>
        </HeaderWrapper>
      </StyledHeader>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
