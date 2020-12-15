import React, { useRef } from 'react'
import { Animated, View, StyleSheet, PanResponder, Text } from 'react-native'
import { Icon } from 'react-native-eva-icons'
import { colors } from '../theme/color'

const size = 32

export default function MovingButton({ onPress }) {
  const pan = useRef(new Animated.ValueXY()).current

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        })
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset()
      },
    }),
  ).current

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}
      >
        <Icon
          name="message-circle-outline"
          width={size}
          height={size}
          fill={colors['color-info-500']}
          onPress={onPress}
        />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 24,
    width: 24,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
})
