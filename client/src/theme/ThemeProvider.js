import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from './theme'

const ThemeProvider = props => {
  return (
    <StyledThemeProvider theme={theme}>{props.children}</StyledThemeProvider>
  )
}

export default ThemeProvider
