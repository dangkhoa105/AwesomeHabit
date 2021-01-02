import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-eva-icons'
import { Box, Text, Button } from '../../../../components'

export default function IconText({ label, iconName, iconFill, color, paddingTop, onPress, style }) {
  return (
    <Box>
      {onPress !== undefined ? (
        <TouchableOpacity onPress={onPress}>
          <Box
            flexDirection="row"
            alignItems="center"
            paddingVertical={5}
            paddingTop={paddingTop}
            style={style}
          >
            {iconName !== undefined && (
              <Icon name={iconName} width={18} height={18} fill={iconFill} />
            )}
            <Text variant="p" color={color} paddingLeft={iconName !== undefined ? 5 : 0}>
              {label}
            </Text>
          </Box>
        </TouchableOpacity>
      ) : (
        <Box
          flexDirection="row"
          alignItems="center"
          paddingVertical={5}
          paddingTop={paddingTop}
          style={style}
        >
          {iconName !== undefined && (
            <Icon name={iconName} width={18} height={18} fill={iconFill} />
          )}
          <Text variant="p" color={color} paddingLeft={iconName !== undefined ? 5 : 0}>
            {label}
          </Text>
        </Box>
      )}
    </Box>
  )
}

IconText.defaultProps = {
  label: '',
  iconFill: '#000',
  color: 'color-gray-700',
}
