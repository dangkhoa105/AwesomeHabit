import React, { useState } from 'react'
import { Box, Text, Button } from '../../components'
import auth from '@react-native-firebase/auth'

export default function AboutScreen({ navigation }) {
  return (
    <Box>
      <Button
        onPress={() => {
          auth().signOut().then(navigation.navigate('WelcomeContainer'))
        }}
      >
        <Text>Log out</Text>
      </Button>
    </Box>
  )
}
