import React, { Component } from 'react'
import { View } from 'react-native'
import { Text, Button, Icon, Input } from 'react-native-ui-kitten'

class Signup extends Component {
  handleLogin = () => {
    this.props.navigation.navigate('Login')
  }
  render() {
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
          <Input style={{ marginTop: 10, fontSize: 16 }} label='Name' />
        </View>
        <View style={{ marginTop: 20 }}>
          <Input
            style={{ marginTop: 10, fontSize: 16 }}
            label='Email'
            autoCapitalize='none'
            autoCompleteType='email'
            keyboardType='email-address'
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Input
            style={{ marginTop: 10, fontSize: 16 }}
            label='Password'
            secureTextEntry={true}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button status='warning' onPress={() => alert('Signup')}>
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

export default Signup
