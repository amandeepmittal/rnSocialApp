import React from 'react'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, IconRegistry, Icon } from 'react-native-ui-kitten'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { View, Text } from 'react-native'

const MockComponent = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>React Native Instagram Clone</Text>
    <Icon name='wifi-outline' width={50} height={50} fill='#288989' />
  </View>
)

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <MockComponent />
    </ApplicationProvider>
  </>
)

export default App
