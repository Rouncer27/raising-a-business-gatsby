import styled from 'styled-components';

const SiteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 45rem;
  margin: 0rem auto;
  padding: 2rem;
  text-align: center;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin: 2rem auto;
    max-width: 95rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    max-width: 115rem;
  }

  @media (min-width: ${props => props.theme.bpDeskmd}) {
    max-width: 140rem;
  }

  @media (min-width: ${props => props.theme.bpDesklg}) {
    max-width: 180rem;
  }
`;

export default SiteWrapper;
