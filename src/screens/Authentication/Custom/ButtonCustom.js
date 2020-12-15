import React from 'react'
import { StyleSheet } from 'react-native'
import { Box, Text, Button } from '../../../components'

export default function ButtonCustom({
  iconLeft,
  iconRight,
  title,
  bg,
  textColor,
  containerStyles,
  onPress,
}) {
  return (
    <Button onPress={onPress}>
      <Box
        flexDirection="row"
        alignItems="center"
        borderRadius={19}
        paddingVertical={3}
        paddingHorizontal={6}
        bg={bg}
        style={containerStyles}
      >
        {iconLeft}
        <Text fontSize={14} variant="h3medium" paddingHorizontal={2} color={textColor}>
          {title}
        </Text>
        {iconRight}
      </Box>
    </Button>
  )
}

ButtonCustom.defaultProps = {
  iconLeft: null,
  iconRight: null,
  title: '',
  bg: 'color-gray-200',
  textColor: 'background-basic-1',
  onPress: () => {},
}
