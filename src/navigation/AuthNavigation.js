import React from 'react'
import { TabNavigator } from 'react-navigation'

import LoginScreen from '../screen/login'
import SplashScreen from '../screen/splash'

export default TabNavigator({
  Splash: {
    screen: SplashScreen
  },
  Login: {
    screen: LoginScreen
  },
}, {
  initialRouteName: 'Splash',
  navigationOptions: { tabBarVisible: false, },
})
