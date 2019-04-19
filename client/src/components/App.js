import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Profile from './Profile'
import { connect } from 'react-redux'
import * as actions from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(
  null,
  actions
)(App)
