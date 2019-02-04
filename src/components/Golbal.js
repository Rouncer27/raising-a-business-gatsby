import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import theme from './Theme'

import * as fontawesome from '../fonts/font-awesome'
import * as montserrat from '../fonts/montserrat'
import * as merriweather from '../fonts/merriweather'

const GlobalStyle = createGlobalStyle`
${styledNormalize}

/* Font Awesome! */
@font-face {
  font-family: "FontAwesome";
  font-style: normal;
  font-weight: normal;
  src: 
    url('${fontawesome.FontAwesomeWOFF}') format("woff2"),
    url('${fontawesome.FontAwesomeWOFF2}') format("woff");
}

/* Primary Fonts */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  src:
    local("Montserrat Light"),
    local("Montserrat-Light"),
    url('${montserrat.Montserrat300WOFF2}') format("woff2"),
    url('${montserrat.Montserrat300WOFF}') format("woff");
}

@font-face {
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 300;
  src:
    local("Montserrat Light Italic"),
    local("Montserrat-LightItalic"),
    url('${montserrat.Montserrat300WOFF2ITC}') format("woff2"),
    url('${montserrat.Montserrat300WOFFITC}') format("woff");
}

@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  src:
    local("Montserrat Light"),
    local("Montserrat-Light"),
    url('${montserrat.Montserrat400WOFF2}') format("woff2"),
    url('${montserrat.Montserrat400WOFF}') format("woff");
}

@font-face {
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 400;
  src:
    local("Montserrat Light Italic"),
    local("Montserrat-LightItalic"),
    url('${montserrat.Montserrat400WOFF2ITC}') format("woff2"),
    url('${montserrat.Montserrat400WOFFITC}') format("woff");
}

@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  src:
    local("Montserrat Medium"),
    local("Montserrat-Medium"),
    url('${montserrat.Montserrat500WOFF2}') format("woff2"),
    url('${montserrat.Montserrat500WOFF}') format("woff");
}

@font-face {
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 500;
  src:
    local("Montserrat Medium Italic"),
    local("Montserrat-MediumItalic"),
    url('${montserrat.Montserrat500WOFF2ITC}') format("woff2"),
    url('${montserrat.Montserrat500WOFFITC}') format("woff");
}

@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  src:
    local("Montserrat ExtraBold"),
    local("Montserrat-ExtraBold"),
    url('${montserrat.Montserrat800WOFF2}') format("woff2"),
    url('${montserrat.Montserrat800WOFF}') format("woff"); 
}

/* //! Primary Fonts End */

/* //! Secondary Fonts Start */
@font-face {
  font-family: "Merriweather";
  font-style: normal;
  font-weight: 300;
  src:
    local("Merriweather Light"),
    local("Merriweather-Light"),
    url("${merriweather.Merriweather300WOFF2}") format("woff2"),
    url("${merriweather.Merriweather300WOFF}")  format("woff");
}

@font-face {
  font-family: "Merriweather";
  font-style: italic;
  font-weight: 300;
  src: 
    local("Merriweather Light Italic"),
    local("Merriweather-LightItalic"),
    url("${merriweather.Merriweather300WOFF2ITC}") format("woff2"),
    url("${merriweather.Merriweather300WOFFITC}")  format("woff");
}

@font-face {
  font-family: "Merriweather";
  font-style: normal;
  font-weight: 400;
  src:
    local("Merriweather Light"),
    local("Merriweather-Light"),
    url("${merriweather.Merriweather400WOFF2}") format("woff2"),
    url("${merriweather.Merriweather400WOFF}")  format("woff");
}

@font-face {
  font-family: "Merriweather";
  font-style: italic;
  font-weight: 400;
  src: 
    local("Merriweather Light Italic"),
    local("Merriweather-LightItalic"),
    url("${merriweather.Merriweather400WOFF2ITC}") format("woff2"),
    url("${merriweather.Merriweather400WOFFITC}")  format("woff");
}

@font-face {
  font-family: "Merriweather";
  font-style: normal;
  font-weight: 700;
  src:
    local("Merriweather Light"),
    local("Merriweather-Light"),
    url("${merriweather.Merriweather700WOFF2}") format("woff2"),
    url("${merriweather.Merriweather700WOFF}")  format("woff");
}

@font-face {
  font-family: "Merriweather";
  font-style: italic;
  font-weight: 700;
  src: 
    local("Merriweather Light Italic"),
    local("Merriweather-LightItalic"),
    url("${merriweather.Merriweather700WOFF2ITC}") format("woff2"),
    url("${merriweather.Merriweather700WOFFITC}")  format("woff");
}

/* //! Secondary Fonts End */

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    overflow-x: hidden !important;
  }

  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Montserrat';
    font-weight: normal;
    letter-spacing: 0.1rem;
    line-height: 1.5;
    overflow-x: hidden !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-size: 1.8rem;
    font-weight: normal;
    line-height: ${theme.baseLineHeight};
  }
  h1 {
	font-size: 3.2rem;
  @media (min-width: ${theme.bpTablet}) {
    font-size: 4rem;
  }
	@media (min-width: ${theme.bpDesksm}) {
    font-size: 4.8rem;
  }
	@media (min-width: ${theme.bpDeskmd}) {
    font-size: 5.2rem;
  }
	@media (min-width: ${theme.bpDesklg}) {
    font-size: 5.6rem;
  }
}

h2 {
  font-size: 2.6rem;
  @media (min-width: ${theme.bpTablet}) {
    font-size: 3.2rem;
  }
	@media (min-width: ${theme.bpDesksm}) {
    font-size: 3.6rem;
  }
	@media (min-width: ${theme.bpDeskmd}) {
    font-size: 4rem;
  }
	@media (min-width: ${theme.bpDesklg}) {
    font-size: 4.6rem;
  }
}

h3 {
  font-size: 2.2rem;
  @media (min-width: ${theme.bpTablet}) {
    font-size: 2.4rem;
  }
	@media (min-width: ${theme.bpDesksm}) {
    font-size: 2.8rem;
  }
	@media (min-width: ${theme.bpDeskmd}) {
    font-size: 3rem;
  }
	@media (min-width: ${theme.bpDesklg}) {
    font-size: 3.4rem;
  }
}

h4 {
  font-size: 2rem;
  @media (min-width: ${theme.bpTablet}) {
    font-size: 2.2rem;
  }
	@media (min-width: ${theme.bpDesksm}) {
    font-size: 2.4rem;
  }
	@media (min-width: ${theme.bpDeskmd}) {
    font-size: 2.6rem;
  }
	@media (min-width: ${theme.bpDesklg}) {
    font-size: 2.8rem;
  }
}

p {
  margin: 0;
  margin-bottom: 1.5em;
  font-size: 1.6rem;
  line-height: 1.4;
}

a {
  text-decoration: none;
  color: ${props => props.theme.green};
  font-size: 1em;
  font-weight: normal;
  transition: all 0.3s ease;
}

a:hover {
	color: ${props => props.theme.blue}
}

span {
  font-size: 1em;
}

ul,
li {
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
  list-style-type: none;
}

img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
`

export default GlobalStyle
