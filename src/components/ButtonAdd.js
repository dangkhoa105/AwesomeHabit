import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-eva-icons'

export default function ButtonAdd({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="plus" width={24} height={24} fill="#fff" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3E1B72',
    borderRadius: 30,
    bottom: 10,
    padding: 16,
    position: 'absolute',
    right: 20,
  },
})
