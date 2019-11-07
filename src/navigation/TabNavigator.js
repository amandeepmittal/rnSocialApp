import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'react-native-ui-kitten'

import { FeedNavigator } from './StackNavigator'

import Search from '../screens/Search'
import AddPost from '../screens/AddPost'
import Activity from '../screens/Activity'
import Profile from '../screens/Profile'

const TabNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: FeedNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name='home-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name='search-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }
    },
    AddPost: {
      screen: AddPost,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name='plus-square-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }
    },
    Activity: {
      screen: Activity,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name='heart-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon
            name='person-outline'
            width={32}
            height={32}
            fill={focused ? '#111' : '#939393'}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
)

export default createAppContainer(TabNavigator)
