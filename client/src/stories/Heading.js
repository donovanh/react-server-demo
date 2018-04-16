import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Heading from '../components/Heading'

storiesOf('Heading', module)
  .add(
    'Heading component',
    withInfo({
      inline: true,
      text:
        `A styled h1 for your convenience and demonstration purposes`
    })(() => <Heading>Hello World</Heading>)
  )
