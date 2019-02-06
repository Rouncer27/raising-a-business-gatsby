import React, { Component } from 'react';
import styled from 'styled-components';

const StyledForms = styled.section``;

const StyledFormsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 95rem;
  margin: 0 auto;
  padding: 7.5rem 2rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 15rem 2rem;
  }

  h3 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.25;

    @media (min-width: ${props => props.theme.bpTablet}) {
      font-size: 2.2rem;
    }
  }
`;

class ContactForm extends Component {
  render() {
    return (
      <StyledForms>
        <StyledFormsWrapper>
          <h3>{this.props.conformsdesc}</h3>
        </StyledFormsWrapper>
      </StyledForms>
    );
  }
}

export default ContactForm;
