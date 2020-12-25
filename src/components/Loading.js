import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { colors } from '../theme/color'

const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <ActivityIndicator size="large" color={colors['color-primary-500']} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  wrap: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default Loading
