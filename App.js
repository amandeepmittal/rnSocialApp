import React from 'react'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider } from 'react-native-ui-kitten'
import { View, Text } from 'react-native'

const MockComponent = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>React Native Instagram Clone</Text>
  </View>
)

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <MockComponent />
  </ApplicationProvider>
)

export default App
