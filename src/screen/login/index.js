import React from 'react'
import { connect } from 'react-redux'
import {
  View,
  Image,
  Dimensions,
} from 'react-native'
import { getFormValues } from 'redux-form'
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

import LoginForm from './component/LoginForm'

const {height, width} = Dimensions.get('window');
class LoginScreen extends React.Component {
  handleSubmit() {
    console.log(this.props.values)
    this.props.changeIsLogin(!this.props.isLogin)
  }

  render() {
    return (
      <Container style={{padding: 25, paddingTop: height/5, backgroundColor: '#DDD'}}>
        <View style={{alignItems: 'center', justifyContent: 'flex-end'}}>
          <Image
            source={require('../../assets/img/logo.png')}
            resizeMode="contain"
            style={{height: 100}}
            />
        </View>
        <LoginForm
          handleSubmit={() => this.handleSubmit()}
          buttonStyle={{backgroundColor: 'gray'}}
          />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.auth.isLogin,
    values: getFormValues("loginForm")(state) || {},
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeIsLogin: (status) => dispatch({type: 'CHANGE_ISLOGIN', isLogin: status})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
