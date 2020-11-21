import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text } from '../../components'

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
        <Text variant="h3bold">LoginScreen</Text>
      </TouchableOpacity>
    </View>
  )
}
