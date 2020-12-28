import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { Box, Text, Button } from '../../../../../components'
import { Icon } from 'react-native-eva-icons'
import { colors } from '../../../../../theme/color'

const size = 20
const { width } = Dimensions.get('window')

export default function LabelTime({ time, index, onRemove }) {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      borderWidth={1}
      borderColor="color-primary-500"
      borderRadius={8}
      p={2}
      paddingVertical={1}
      mt={2}
    >
      <Box flexDirection="row" alignItems="center">
        <Icon name="clock" width={size} height={size} fill={colors['color-primary-500']} />
        <Text fontWeight="bold" color="color-primary-500" pl={1}>
          {time}
        </Text>
      </Box>

      <Icon
        name="close-circle"
        width={size}
        height={size}
        fill={colors['color-primary-500']}
        onPress={() => onRemove(index)}
      />
    </Box>
  )
}
