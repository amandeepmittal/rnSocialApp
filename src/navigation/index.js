import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AuthNavigator from './AuthNavigator'
import TabNavigator from './TabNavigator'

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: TabNavigator
  },
  {
    initialRouteName: 'Auth'
  }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer
