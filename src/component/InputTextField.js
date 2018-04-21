import React from 'react'
import { View, TextInput } from 'react-native'
import { Input } from 'native-base'

export default function InputTextField(props) {
  const { input, ...inputProps } = props;
  return (
    <View style={{flex: 1}}>
      <Input
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value} />
    </View>
  )
}
