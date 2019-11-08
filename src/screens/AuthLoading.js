import React, { Component } from 'react'
import { withFirebaseHOC } from '../utils'

class AuthLoading extends Component {
  componentDidMount = async () => {
    try {
      await this.props.firebase.checkUserAuth(user => {
        if (user) {
          // if the user has previously logged in
          this.props.navigation.navigate('App')
        } else {
          // if the user has previously signed out from the app
          this.props.navigation.navigate('Auth')
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return null
  }
}

export default withFirebaseHOC(AuthLoading)
