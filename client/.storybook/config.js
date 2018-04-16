import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import ThemeProvider from '../src/theme/ThemeProvider'
import globalStyles from '../src/theme/globalStyles'

globalStyles()

addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
