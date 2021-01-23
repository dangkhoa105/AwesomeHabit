import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import IconButton from './Custom/IconButton'
import { Box } from '../../components'
import { colors } from '../../theme/color'
import { alert } from '../../components/Function'

const size = 22

export default function AboutScreen({ navigation }) {
  return (
    <Box p={8}>
      <IconButton
        icon={{ name: 'info-outline', size: size, fill: colors['color-gray-700'] }}
        text="Thông tin cá nhân"
        onPress={() => navigation.navigate('ProfileContainer')}
      />

      <IconButton
        icon={{ name: 'clipboard-outline', size: size, fill: colors['color-gray-700'] }}
        text="Hướng dẫn"
        pt={4}
        onPress={() => navigation.navigate('InstructionsScreen')}
      />

      <IconButton
        icon={{ name: 'power-outline', size: size, fill: colors['color-danger-600'] }}
        text="Đăng xuất"
        textColor="color-danger-600"
        pt={4}
        onPress={() => {
          alert('Bạn có chắc muốn thoát khỏi app', () =>
            auth()
              .signOut()
              .then(() => {
                navigation.navigate('WelcomeContainer')
              }),
          )
        }}
      />
    </Box>
  )
}
