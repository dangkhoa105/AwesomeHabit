import React from 'react'
import { Box, Text, Button } from '../../../components'
import { Icon } from 'react-native-eva-icons'

export default function IconButton({ icon, text, textColor, onPress, pt }) {
  return (
    <Button flexDirection="row" alignItems="center" onPress={onPress} pt={pt}>
      <Icon name={icon.name} width={icon.size} height={icon.size} fill={icon.fill} />
      <Text pl={4} variant="h3medium" color={textColor}>
        {text}
      </Text>
    </Button>
  )
}

IconButton.defaultProps = {
  pt: 0,
  textColor: 'text-basic',
}
