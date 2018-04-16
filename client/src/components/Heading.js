import styled from 'styled-components'

const Heading = styled.h1`
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.backgroundColor};
  font-size: 1.5em;
  padding: 2em 4em;
`

Heading.displayName = 'Heading'

export default Heading
