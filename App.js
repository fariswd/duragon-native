import React from 'react';
import { Provider } from 'react-redux'

import store from './src/config/store'
import IndexScreen from './src/screen/'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <IndexScreen />
      </Provider>
    );
  }
}
