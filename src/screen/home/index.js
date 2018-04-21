import React from 'react'
import {
  Text,
  View,
  Button,
} from 'react-native'

export default function HomeScreen(props) {
  return (
    <View>
      <Text>Hi this is Home Screen</Text>
      <Button
        onPress={() => props.navigation.navigate('Profile', { sendMe: 'capung was here'})}
        title="To profile and send capung was here"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}
