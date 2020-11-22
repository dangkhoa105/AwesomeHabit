import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header({ title, type }) {
  return (
    <View style={styles.container}>
      <View style={styles.itemLeft}>
        <Text>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemLeft: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {},
})
