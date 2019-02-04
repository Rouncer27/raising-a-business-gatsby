import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const StyleNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 3rem auto 0;

  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
  }
`

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
            <StyleNav>
              {data.wordpressWpApiMenusMenusItems.items.map(item => {
                return (
                  <Link key={item.object_slug} to={item.object_slug}>
                    {item.title}
                  </Link>
                )
              })}
            </StyleNav>
          )
        }}
      />
    )
  }
}

export default Navigation
