import React, { useState } from 'react'
import { Box, Text, Button } from '../../../../components'
import { Icon } from 'react-native-eva-icons'

const size = 18

export default function CircleCheckButton({ item, index }) {
  const ml = index && 3

  return (
    <Box
      width={size}
      height={size}
      bg={item}
      borderRadius="rounded-full"
      ml={ml}
      justifyContent="center"
      alignItems="center"
    >
      <Icon name="checkmark" width={12} height={12} fill="#fff" />
    </Box>
  )
}
