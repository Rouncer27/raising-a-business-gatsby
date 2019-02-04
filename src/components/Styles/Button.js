import { Link } from 'gatsby'
import styled from 'styled-components'

const Button = styled(Link)`
  display: inline-block;
  padding: 1rem 3rem;
  border: 0.2rem solid ${props => props.theme.green};
  color: ${props => props.theme.green};
  text-transform: uppercase;

  &:hover {
    border: 0.2rem solid ${props => props.theme.orange};
    color: ${props => props.theme.orange};
  }
`

export default Button
