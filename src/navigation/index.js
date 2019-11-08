import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AuthLoading from '../screens/AuthLoading'
import AuthNavigator from './AuthNavigator'
import TabNavigator from './TabNavigator'

const SwitchNavigator = createSwitchNavigator(
  {
    Loading: AuthLoading,
    Auth: AuthNavigator,
    App: TabNavigator
  },
  {
    initialRouteName: 'Loading'
  }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer
