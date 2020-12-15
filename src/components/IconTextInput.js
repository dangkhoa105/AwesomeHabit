import React from 'react'
import { TextInput, Dimensions, StyleSheet } from 'react-native'
import { Box, Text } from '.'
import { fonts } from '../theme/theme'
import { colors } from '../theme/color'

const { width } = Dimensions.get('window')

export default function IconTextInput({
  iconLeft,
  iconRight,
  title,
  secureTextEntry,
  placeholder,
  value,
  onChangeText,
}) {
  return (
    <Box pt={2}>
      <Text variant="p" fontWeight="bold" color="color-gray-700" pb={1}>
        {title}
      </Text>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderWidth={1}
        borderColor="color-gray-300"
        borderRadius={1}
        paddingHorizontal={4}
      >
        <Box flexDirection="row" alignItems="center">
          {iconLeft}
          <TextInput
            value={value}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor={colors['color-gray-300']}
            onChangeText={onChangeText}
            style={styles.txtTextInput}
          />
        </Box>
        {iconRight}
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: colors['color-primary-500'],
  },
  txtTextInput: {
    width: width - 128,
    fontSize: 14,
    fontFamily: fonts.medium,
    marginLeft: 16,
  },
})

IconTextInput.defaultProps = {
  iconLeft: null,
  iconRight: null,
  title: '',
  secureTextEntry: false,
}
