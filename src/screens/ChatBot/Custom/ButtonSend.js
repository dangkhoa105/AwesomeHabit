import React from 'react'
import { Keyboard, StyleSheet } from 'react-native'
import { Box, Text, Button } from '../../../components'
import { fonts } from '../../../theme/theme'
import { colors } from '../../../theme/color'

export default function ButtonSend({ onPress }) {
  return (
    <Button onPress={onPress} style={styles.btnSend}>
      <Text fontSize={14} fontFamily={fonts.medium} color="white" paddingHorizontal={8}>
        Send
      </Text>
    </Button>
  )
}

const styles = StyleSheet.create({
  btnSend: {
    backgroundColor: colors['color-primary-500'],
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 32,
    borderBottomRightRadius: 32,
    paddingVertical: 8,
  },
})
