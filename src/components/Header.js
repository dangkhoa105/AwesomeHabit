import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8F64E3',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: '30%',
  },
})
