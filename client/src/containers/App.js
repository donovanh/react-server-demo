import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setMessage } from '../store/appReducer'
import Heading from '../components/Heading'
import globalStyles from '../theme/globalStyles'

globalStyles()

class App extends Component {
  componentDidMount () {
    if (!this.props.message) {
      this.props.updateMessage("Hi, I'm from client!")
    }
  }

  render () {
    return (
      <div className='App'>
        <Heading>Redux: { this.props.message }</Heading>
      </div>
    )
  }
}

export default connect(
  ({ app }) => ({
    message: app.message
  }),
  dispatch => ({
    updateMessage: (txt) => dispatch(setMessage(txt))
  })
)(App)
