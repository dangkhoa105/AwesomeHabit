import React, { useState } from 'react'
import { Box, Text, Button } from '../../../components'
import { Icon } from 'react-native-eva-icons'

export default function LineLog({ icon, content, value }) {
  return (
    <Box
      flex={1}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      // paddingVertical={4}
      paddingHorizontal={2}
      marginTop={4}
    >
      <Box flexDirection="row" alignItems="center" width={'90%'}>
        <Icon name={icon.name} width={icon.size} height={icon.size} fill={icon.fill} />
        <Text pl={2}>{content}</Text>
      </Box>
      <Text variant="h3medium" color={'color-success-500'}>
        {value}
      </Text>
    </Box>
  )
}
