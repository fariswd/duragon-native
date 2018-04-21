import React from 'react'
import {
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native'
import { Label, Button, Container } from 'native-base';

const {height, width} = Dimensions.get('window');
export default function SplashScreen(props) {
  return (
    <ImageBackground
      source={require('../../assets/img/logo.png')}
      style={{
        flex: 1,
        height: height,
        backgroundColor: '#DDD',
        alignItems: 'center',
      }}
      resizeMode="center">
      <Container style={{marginTop: height/2 + 150}}>
        <Button
          style={{padding: 10, backgroundColor: 'gray'}}
          onPress={() => props.navigation.navigate('Login')}>
          <Label>Login Screen</Label>
        </Button>
      </Container>
    </ImageBackground>
  )
}
