import React from 'react'
import {
  Text,
  View,
} from 'react-native'

export default function ProfileScreen(props) {
  return (
    <View>
      <Text>This is Profile Screen {props.navigation.state.params.sendMe}</Text>
    </View>
  )
}
