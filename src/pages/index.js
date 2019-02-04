import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroImg from '../components/HeroImg'
import SmallLink from '../components/SmallLink'
import SideBySide from '../components/SideBySide'
import PastGuests from '../components/PastGuests'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

class IndexPage extends Component {
  render() {
    const acf = this.props.data.wordpressPage.acf

    return (
      <Layout location={this.props.location.pathname}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HeroImg
          heroImgFluid={
            acf._swb_theme_header_image.localFile.childImageSharp.fluid
          }
          heroImageAlt={acf._swb_theme_header_image.alt_text}
          heroTitleTop={acf._swb_theme_header_top_title}
          heroTitleBottom={acf._swb_theme_header_bottom_title}
        />
        <SmallLink
          sltitle={acf._swb_theme_small_link_section_title}
          slsub={acf._swb_theme_small_link_section_sub_title}
          slcontent={acf._swb_theme_small_link_section_content}
          slbtn={acf._swb_theme_small_link_section_link_text}
          slbtnurl={acf._swb_theme_small_link_section_link_url}
        />

        <SideBySide
          sbsimg={acf._swb_theme_big_side_image.localFile.childImageSharp.fluid}
          sbsbios={acf._swb_theme_content_sections}
        />

        <PastGuests
          pasttitle={acf._swb_theme_repeatable_circle_images_title}
          pastguests={acf._swb_theme_epeatable_circle_images_section}
        />
        <PageHero
          heropageimg={
            acf._swb_theme_form_section_image.localFile.childImageSharp.fluid
          }
          heropagetitle={acf._swb_theme_form_section_title}
        />
        <ContactForm conformsdesc={acf._swb_theme_form_section_description} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  {
    wordpressPage(slug: { eq: "home" }) {
      title
      acf {
        _swb_theme_header_image {
          id
          source_url
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _swb_theme_header_top_title
        _swb_theme_header_bottom_title
        _swb_theme_small_link_section_title
        _swb_theme_small_link_section_sub_title
        _swb_theme_small_link_section_content
        _swb_theme_small_link_section_link_text
        _swb_theme_small_link_section_link_url

        _swb_theme_big_side_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _swb_theme_content_sections {
          title
          paragraph
        }
        _swb_theme_repeatable_circle_images_title
        _swb_theme_epeatable_circle_images_section {
          title_or_name
          position_or_business_name
          links_required
          link_to_website
          link_to_facebook
          link_to_twitter
          link_to_linkedin
          link_to_instagram
          link_to_podcast_episode
          image {
            source_url
            localFile {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        _swb_theme_form_section_title
        _swb_theme_form_section_description
        _swb_theme_form_section_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
