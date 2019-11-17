import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Button, Text } from 'react-native-ui-kitten'
import ImagePicker from 'react-native-image-picker'
import { withFirebaseHOC } from '../utils'

class EditAvatar extends Component {
  state = {
    avatarImage: null
  }

  selectImage = () => {
    const options = {
      noData: true
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        const source = { uri: response.uri }
        // console.log(source)
        this.setState({
          avatarImage: source
        })
      }
    })
  }

  onSubmit = async () => {
    try {
      const avatarImage = this.state.avatarImage
      this.props.firebase.uploadAvatar(avatarImage)

      this.setState({
        avatarImage: null
      })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text category='h2'>Edit Avatar</Text>
        <View>
          {this.state.avatarImage ? (
            <Image
              source={this.state.avatarImage}
              style={{ width: 300, height: 300 }}
            />
          ) : (
            <Button
              onPress={this.selectImage}
              style={{
                alignItems: 'center',
                padding: 10,
                margin: 30
              }}>
              Add an image
            </Button>
          )}
        </View>
        <Button
          status='success'
          onPress={this.onSubmit}
          style={{ marginTop: 30 }}>
          Add post
        </Button>
      </View>
    )
  }
}

export default withFirebaseHOC(EditAvatar)
