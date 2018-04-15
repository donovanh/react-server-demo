import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import { setMessage } from './store/actions'

class App extends Component {
  componentDidMount () {
    if (!this.props.message) {
      this.props.updateMessage("Hi, I'm from client!")
    }
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p>
            Redux: { this.props.message }
        </p>
      </div>
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
