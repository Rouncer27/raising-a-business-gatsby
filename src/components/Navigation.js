import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { bubble as Menu } from 'react-burger-menu';

const StyleNav = styled(Menu)`
  position: relative;
  z-index: 9999999;
  ${'' /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 3rem auto 0;

  a {
    width: 100%;
    margin: 0.5rem auto;
    color: ${props => props.theme.white};
    font-size: 2rem;
    text-decoration: none;
    text-transform: uppercase;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: auto;
      margin: 0;
      padding: 0 4rem;
      font-size: 1.6rem;
    }

    &:hover {
      color: ${props => props.theme.green};
    }
  } */}
`;

const NavWrapper = styled.div`
  position: relative;
  z-index: 9999999;

  .bm-burger-button {
    position: fixed;
    width: 5rem;
    height: 5rem;
    left: 1rem;
    top: 1rem;
    background: ${props => props.theme.white};
    border-radius: 0.25rem;
    box-shadow: 0.5rem 0.5rem 1rem ${props => props.theme.black};

    button {
      &:focus,
      &:active {
        outline: none;
      }
    }
  }

  .bm-burger-bars {
    display: block;
    height: 0.3rem !important;
    right: 0.75rem !important;
    left: 0.75rem !important;
    transition: all 0.3s ease;
    background: ${props => props.theme.blue};

    &:nth-of-type(1) {
      top: 1.25rem !important;
    }

    &:nth-of-type(2) {
      top: 50% !important;
      transform: translateY(-50%);
    }

    &:nth-of-type(3) {
      top: auto !important;
      bottom: 1.25rem !important;
    }
  }

  .bm-burger-bars-hover {
    background: ${props => props.theme.orange};
  }

  .bm-cross-button {
    height: 5rem !important;
    width: 5rem !important;

    button {
      &:focus,
      &:active {
        outline: none;
      }
    }
  }

  .bm-cross {
    height: 2.5rem !important;
    top: 1rem;
    right: 1rem;
    background: ${props => props.theme.orange};
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  .bm-menu {
    background: ${props => props.theme.black};
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-morph-shape {
    fill: ${props => props.theme.black};
  }

  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;

    a {
      margin: 1rem auto;
      padding: 1rem 0;
      display: block;
      color: ${props => props.theme.white};
      text-align: left;
      text-transform: uppercase;

      &:hover {
        color: ${props => props.theme.orange};
      }

      &:focus {
        outline: none;
      }
    }
  }

  .bm-item {
    display: inline-block;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 9999999;
  }
`;

class Navigation extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query MainMenu {
            wordpressWpApiMenusMenusItems(name: { eq: "Main Menu" }) {
              items {
                object_slug
                title
              }
            }
          }
        `}
        render={data => {
          return (
            <NavWrapper>
              <StyleNav width={280} noOverlay>
                <Link className="menu-item" to="/">
                  Home
                </Link>
                {data.wordpressWpApiMenusMenusItems.items.map(item => {
                  return (
                    <Link
                      className="menu-item"
                      key={item.object_slug}
                      to={item.object_slug}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </StyleNav>
            </NavWrapper>
          );
        }}
      />
    );
  }
}

export default Navigation;
