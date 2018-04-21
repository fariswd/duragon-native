import React from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
} from 'react-native'
import { Button } from 'react-native-elements'

class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>This is Login Screen</Text>
        <Button
          title='submit'
          onPress={() => this.props.changeIsLogin(!this.props.isLogin)}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.auth.isLogin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeIsLogin: (status) => dispatch({type: 'CHANGE_ISLOGIN', isLogin: status})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
