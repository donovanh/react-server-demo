import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setMessage } from '../store/actions'
import Heading from '../components/Heading'
import globalStyles from '../theme/globalStyles'
import ThemeProvider from '../theme/ThemeProvider'

export class App extends Component {
  componentDidMount () {
    if (!this.props.message) {
      this.props.updateMessage("Hi, I'm from client!")
    }
  }

  render () {
    globalStyles()
    return (
      <ThemeProvider>
        <div className='App'>
          <Heading>Redux: { this.props.message }</Heading>
        </div>
      </ThemeProvider>
    )
  }
}

export default connect(
  ({ app }) => ({
    message: app.message
  }),
  {
    updateMessage: setMessage
  }
)(App)
