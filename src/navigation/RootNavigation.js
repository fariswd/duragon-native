import React from 'react'
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screen/home/'
import ProfileScreen from '../screen/profile'
import LoginScreen from '../screen/login'

export default StackNavigator({
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  }, {
    initialRouteName: 'Home',
    navigationOptions: { header: null },
  }
);
