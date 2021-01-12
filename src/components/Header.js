import React from 'react'
import { View, StyleSheet } from 'react-native'
import { colors } from '../theme/color'

export default function Header({ children }) {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors['color-primary-500'],
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: '30%',
  },
})
