import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Icon, Text } from 'react-native-ui-kitten'
import { withFirebaseHOC } from '../utils'

class Profile extends Component {
  handleSignout = async () => {
    try {
      await this.props.firebase.signOut()
      this.props.navigation.navigate('Auth')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Text>Profile</Text>
        <Button
          onPress={this.handleSignout}
          titleStyle={{
            color: '#F57C00'
          }}
          type='clear'>
          Signout
        </Button>
      </View>
    )
  }
}

export default withFirebaseHOC(Profile)
