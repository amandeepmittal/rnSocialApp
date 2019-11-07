import React from 'react'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, IconRegistry, Icon } from 'react-native-ui-kitten'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

import TabNavigator from './src/navigation/TabNavigator'

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <TabNavigator />
    </ApplicationProvider>
  </>
)

export default App
