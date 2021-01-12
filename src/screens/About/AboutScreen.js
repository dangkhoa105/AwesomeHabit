import React, { useState } from 'react'
import { Box, Text, Button } from '../../components'
import auth from '@react-native-firebase/auth'
import { Icon } from 'react-native-eva-icons'
import { colors } from '../../theme/color'
import { alert } from '../../components/Function'

const size = 22

export default function AboutScreen({ navigation }) {
  return (
    <Box p={8}>
      <Button
        flexDirection="row"
        alignItems="center"
        onPress={() => navigation.navigate('ProfileContainer')}
      >
        <Icon name="info-outline" width={size} height={size} fill={colors.black} />
        <Text pl={4} variant="h3medium">
          Your profile
        </Text>
      </Button>
      <Button
        flexDirection="row"
        alignItems="center"
        pt={4}
        onPress={() => {
          alert('Are you sure you want to log out the app', () =>
            auth()
              .signOut()
              .then(() => {
                navigation.navigate('WelcomeContainer')
              }),
          )
        }}
      >
        <Icon name="power-outline" width={size} height={size} fill={colors['color-danger-600']} />
        <Text pl={4} variant="h3medium" color="color-danger-600">
          Log out
        </Text>
      </Button>
    </Box>
  )
}
