import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text, Button, withStyles, Avatar, Icon } from 'react-native-ui-kitten'

import { withFirebaseHOC } from '../utils'
import Gallery from '../components/Gallery'

class _Profile extends Component {
  state = {
    images: [],
    userDetails: {}
  }

  componentDidMount() {
    this.fetchUserDetails()
    this.fetchPosts()
  }

  fetchPosts = async () => {
    try {
      const posts = await this.props.firebase.getUserPosts()
      let images = posts.map(item => {
        return item.postPhoto
      })

      this.setState({ images })
      // console.log(this.state.images)
    } catch (error) {
      console.log(error)
    }
  }

  fetchUserDetails = async () => {
    try {
      const userDetails = await this.props.firebase.getUserDetails()
      // console.log('USER DETAILS ===========>>', userDetails)
      this.setState({ userDetails })
    } catch (error) {
      console.log(error)
    }
  }

  handleSignout = async () => {
    try {
      await this.props.firebase.signOut()
      this.props.navigation.navigate('Auth')
    } catch (error) {
      console.log(error)
    }
  }

  handleEditAvatarNavigation = () => {
    this.props.navigation.navigate('EditAvatar')
  }

  render() {
    const { images, userDetails } = this.state
    const { themedStyle } = this.props
    return (
      <View style={themedStyle.root}>
        <View style={[themedStyle.header, themedStyle.bordered]}>
          <View>
            <Avatar
              source={this.state.userDetails.avatar}
              size='giant'
              style={{ width: 100, height: 100 }}
            />
            <View style={themedStyle.add}>
              <TouchableOpacity onPress={this.handleEditAvatarNavigation}>
                <Icon name='edit-outline' width={20} height={20} fill='#111' />
              </TouchableOpacity>
            </View>
          </View>
          <Text category='h6' style={themedStyle.text}>
            {userDetails.name}
          </Text>
        </View>
        <View style={[themedStyle.userInfo, themedStyle.bordered]}>
          <View style={themedStyle.section}>
            <Text category='s1' style={themedStyle.space}>
              {images.length}
            </Text>
            <Text appearance='hint' category='s2'>
              Posts
            </Text>
          </View>
          <View style={themedStyle.section}>
            <Text category='s1' style={themedStyle.space}>
              0
            </Text>
            <Text appearance='hint' category='s2'>
              Followers
            </Text>
          </View>
          <View style={themedStyle.section}>
            <Text category='s1' style={themedStyle.space}>
              0
            </Text>
            <Text appearance='hint' category='s2'>
              Following
            </Text>
          </View>
        </View>
        <View style={themedStyle.buttons}>
          <Button
            style={themedStyle.button}
            appearance='ghost'
            status='danger'
            onPress={this.handleSignout}>
            LOGOUT
          </Button>
          <View style={themedStyle.separator} />
          <Button style={themedStyle.button} appearance='ghost' status='danger'>
            MESSAGE
          </Button>
        </View>
        <Gallery items={images} />
      </View>
    )
  }
}

export default Profile = withFirebaseHOC(
  withStyles(_Profile, theme => ({
    root: {
      backgroundColor: theme['color-basic-100'],
      marginTop: 10
    },
    header: {
      alignItems: 'center',
      paddingTop: 25,
      paddingBottom: 17
    },
    userInfo: {
      flexDirection: 'row',
      paddingVertical: 18
    },
    bordered: {
      borderBottomWidth: 1,
      borderColor: theme['color-basic-400']
    },
    section: {
      flex: 1,
      alignItems: 'center'
    },
    space: {
      marginBottom: 3,
      color: theme['color-basic-1000']
    },
    separator: {
      backgroundColor: theme['color-basic-400'],
      alignSelf: 'center',
      flexDirection: 'row',
      flex: 0,
      width: 1,
      height: 42
    },
    buttons: {
      flexDirection: 'row',
      paddingVertical: 8
    },
    button: {
      flex: 1,
      alignSelf: 'center'
    },
    text: {
      color: theme['color-basic-1000']
    },
    add: {
      backgroundColor: '#939393',
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 30,
      height: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }))
)
