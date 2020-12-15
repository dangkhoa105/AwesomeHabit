import React from 'react'
import { Box, Text } from '../../../components'

export default function LineChat({ message, type }) {
  const alignSelf = type === 0 ? 'flex-start' : 'flex-end'
  const borderTopLeftRadius = type === 0 ? 0 : 1
  const borderTopRightRadius = type === 0 ? 1 : 0
  const bg = type === 0 ? 'color-gray-400' : 'color-primary-500'
  const style = type === 0 ? { marginRight: '40%' } : { marginLeft: '40%' }

  return (
    <Box
      alignSelf={alignSelf}
      marginHorizontal={4}
      mb={1}
      borderRadius={2}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
      bg={bg}
      style={style}
    >
      <Text color="white" p={2}>
        {message}
      </Text>
    </Box>
  )
}
