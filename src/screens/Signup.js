import React, { Component } from 'react'
import { View } from 'react-native'
import { Text, Button, Icon, Input } from 'react-native-ui-kitten'
import { withFirebaseHOC } from '../utils'

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  onChangeName = name => {
    this.setState({ name })
  }
  onChangeEmail = email => {
    this.setState({ email })
  }
  onChangePassword = password => {
    this.setState({ password })
  }

  handleOnSignup = async () => {
    const { name, email, password } = this.state

    try {
      const response = await this.props.firebase.signupWithEmail(
        email,
        password
      )

      if (response.user.uid) {
        const { uid } = response.user
        const userData = { email, name, uid }
        await this.props.firebase.createNewUser(userData)
        this.props.navigation.navigate('App')
      }
    } catch (error) {
      console.log(error)
      alert('Could not signup.')
    }
  }

  handleLogin = () => {
    this.props.navigation.navigate('Login')
  }
  render() {
    const { name, email, password } = this.state
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 30 }}>
        <View style={{ alignItems: 'center', marginTop: 60 }}>
          <Icon
            name='person-add-outline'
            width={200}
            height={200}
            fill='#333'
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Input
            style={{ marginTop: 10, fontSize: 16 }}
            label='Name'
            value={name}
            onChangeText={this.onChangeName}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Input
            style={{ marginTop: 10, fontSize: 16 }}
            label='Email'
            autoCapitalize='none'
            autoCompleteType='email'
            keyboardType='email-address'
            value={email}
            onChangeText={this.onChangeEmail}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Input
            style={{ marginTop: 10, fontSize: 16 }}
            label='Password'
            secureTextEntry={true}
            value={password}
            onChangeText={this.onChangePassword}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button status='warning' onPress={this.handleOnSignup}>
            Signup
          </Button>
        </View>
        <View
          style={{
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
          }}>
          <Text style={{ textAlign: 'center', fontSize: 14, color: '#abb4bd' }}>
            Already have an account?{' '}
          </Text>
          <Button
            onPress={this.handleLogin}
            status='info'
            appearance='ghost'
            style={{
              paddingHorizontal: 1
            }}>
            Login
          </Button>
        </View>
      </View>
    )
  }
}

export default withFirebaseHOC(Signup)
