import React from 'react';
import { Provider } from 'react-redux'
import Expo from 'expo'

import store from './src/config/store'
import IndexScreen from './src/screen/'

export default class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
  render() {
    return (
      <Provider store={store}>
        <IndexScreen />
      </Provider>
    );
  }
}
