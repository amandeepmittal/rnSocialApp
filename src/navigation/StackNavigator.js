import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Feed from '../screens/Feed'

export const FeedNavigator = createAppContainer(
  createStackNavigator({
    Feed: {
      screen: Feed,
      navigationOptions: {
        headerTitle: 'Social App'
      }
    }
  })
)
