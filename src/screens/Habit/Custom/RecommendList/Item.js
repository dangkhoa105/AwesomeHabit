import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { Icon } from 'react-native-eva-icons'
import { Box, Text, Button } from '../../../../components'
import { colors } from '../../../../theme/color'

const { width } = Dimensions.get('window')
const size = 18

export default function Item({ item, index, idCategory, createHabitAction }) {
  return (
    <Box flex={1} flexDirection="row" alignItems="center">
      <Box width={width} flexDirection="row" alignItems="center" paddingTop={index === 0 ? 0 : 5}>
        <Icon name={item.iconName} width={size} height={size} fill={colors[item.iconFill]} />
        <Box pl={5}>
          <Text variant="p">{item.title}</Text>
          <Text variant="s1" color="text-gray-1">
            loại thói quen: {item !== null && item.habitType}
          </Text>
        </Box>
      </Box>
      <Button
        p={2}
        paddingHorizontal={5}
        borderRadius={2}
        bg="color-success-400"
        onPress={() => createHabitAction({ ...item, idCategory: idCategory })}
      >
        <Text variant="p" color="white">
          Add
        </Text>
      </Button>
    </Box>
  )
}
