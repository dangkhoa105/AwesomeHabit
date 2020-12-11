import React, { useState } from 'react'
import { Box, Text, Button } from '../../../../components'

const size = 18

export default function CircleButton({ item, index, opacity }) {
  const ml = index && 3

  return (
    <Box
      width={size}
      height={size}
      bg={item}
      opacity={opacity}
      borderRadius="rounded-full"
      ml={ml}
    />
  )
}
