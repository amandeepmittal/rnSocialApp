import React from 'react'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, IconRegistry, Icon } from 'react-native-ui-kitten'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import Firebase, { FirebaseProvider } from './src/utils'
import AppContainer from './src/navigation'

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <FirebaseProvider value={Firebase}>
        <AppContainer />
      </FirebaseProvider>
    </ApplicationProvider>
  </>
)

export default App
