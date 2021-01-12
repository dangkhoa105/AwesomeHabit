import React, { useRef } from 'react'
import { Animated, View, StyleSheet, PanResponder, Text } from 'react-native'
import { Icon } from 'react-native-eva-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../theme/color'

const size = 40

const MovingButton = ({ onPress }) => {
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
        Animated.spring(
          pan, // Auto-multiplexed
          { toValue: { x: 0, y: 0 }, useNativeDriver: false }, // Back to zero
        ).start()
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
        <TouchableOpacity onPress={onPress}>
          <Icon
            name="message-circle-outline"
            width={size}
            height={size}
            fill={colors['color-info-500']}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
  },
})

export default MovingButton
