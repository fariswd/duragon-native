import React from 'react'
import {
  Text,
} from 'react-native'

export default function ProfileScreen(props) {
  return (
    <Text>This is Profile Screen {props.navigation.state.params.sendMe}</Text>
  )
}
