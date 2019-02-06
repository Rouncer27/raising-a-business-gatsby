import React, { Component } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import SiteWrapper from './Styles/SiteWrapper';

const PastGuestsSec = styled.section``;

const PastGuestsHeader = styled.div`
  width: 100%;
  margin: 0 auto 4rem;

  h2 {
    text-transform: uppercase;
    font-size: 3.6rem;
    font-weight: 500;
  }
`;
const PastGuestsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const PastGuestsBio = styled.div`
  width: calc(50% - 4rem);
  margin: 2rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(33% - 4rem);
    margin: 2rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: calc(25% - 4rem);
    margin: 2rem;
  }
`;

const PastGuestsBioImg = styled.div`
  width: 100%;
  width: 12.5rem;
  height: 12.5rem;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 20rem;
    height: 20rem;
  }
`;

const PastGuestsBioTitle = styled.div`
  width: 100%;
  margin: 3rem auto 2rem;

  h3 {
    margin: 0 auto;
    font-size: 1.8rem;
    text-transform: uppercase;
  }

  p {
    margin: 0 auto;
    font-size: 1.4rem;
  }
`;

const PastGuestsBioSocial = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  text-align: center;

  p {
    a {
      display: inline-block;
      width: 3rem;
      height: 3rem;
      margin: 0 0.5rem;
      font-family: ${props => props.theme.fontAwesome};

      &::after {
        display: inline-block;
        width: 3rem;
        height: 3rem;
        font-family: ${props => props.theme.fontAwesome};
        font-size: 2.2rem;
        content: '\f230';
      }
    }
  }

  .website {
    a {
      &::after {
        content: '\f0ac';
      }
    }
  }

  .facebook {
    a {
      &::after {
        content: '\f230';
      }
    }
  }

  .instagram {
    a {
      &::after {
        content: '\f16d';
      }
    }
  }

  .twitter {
    a {
      &::after {
        content: '\f099';
      }
    }
  }

  .linkedin {
    a {
      &::after {
        content: '\f08c';
      }
    }
  }
`;

class PastGuests extends Component {
  render() {
    return (
      <PastGuestsSec>
        <SiteWrapper>
          <PastGuestsHeader>
            <h2>Meet our amzing guests</h2>
          </PastGuestsHeader>

          <PastGuestsContainer>
            {this.props.pastguests.map((guest, index) => {
              const title = guest.title_or_name;
              const business = guest.position_or_business_name;
              const bioImage = guest.image.localFile
                ? guest.image.localFile.childImageSharp.fluid
                : guest.image.source_url;
              const linksReq = guest.links_required;
              return (
                <PastGuestsBio key={index}>
                  <PastGuestsBioImg>
                    {guest.image.localFile ? (
                      <Img fluid={bioImage} alt={title} />
                    ) : (
                      <img src={bioImage} alt={title} />
                    )}
                  </PastGuestsBioImg>
                  <PastGuestsBioTitle>
                    <h3>{title}</h3>
                    <p>{business}</p>
                  </PastGuestsBioTitle>

                  {linksReq.length > 0 && (
                    <PastGuestsBioSocial>
                      {linksReq.map(link => {
                        if (link === 'website') {
                          return (
                            <p className="website" key="website">
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={guest.link_to_website}
                              />
                            </p>
                          );
                        } else if (link === 'instagram') {
                          return (
                            <p className="instagram" key="instagram">
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={guest.link_to_instagram}
                              />
                            </p>
                          );
                        } else if (link === 'twitter') {
                          return (
                            <p className="twitter" key="twitter">
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={guest.link_to_twitter}
                              />
                            </p>
                          );
                        } else if (link === 'facebook') {
                          return (
                            <p className="facebook" key="facebook">
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={guest.link_to_facebook}
                              />
                            </p>
                          );
                        } else if (link === 'linkedin') {
                          return (
                            <p className="linkedin" key="linkedin">
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={guest.link_to_linkedin}
                              />
                            </p>
                          );
                        } else {
                          return '';
                        }
                      })}
                    </PastGuestsBioSocial>
                  )}
                </PastGuestsBio>
              );
            })}
          </PastGuestsContainer>
        </SiteWrapper>
      </PastGuestsSec>
    );
  }
}

export default PastGuests;
