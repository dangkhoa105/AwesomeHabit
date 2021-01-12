import React, { useState } from 'react'
import { Image } from 'react-native'
import { Box, Text } from '../../../components'
import { getImage } from '../../../theme/images'
import { fonts } from '../../../theme/theme'

export default function HeaderChildren() {
  return (
    <Box flex={1} justifyContent="center" paddingHorizontal={4}>
      <Image
        resizeMode="contain"
        source={getImage.header_about}
        style={{ width: '140%', height: '75%' }}
      />
      <Box position="absolute" paddingHorizontal={4}>
        <Text color="white" variant="h3medium" fontFamily={fonts.regular}>
          Your profile
        </Text>
        <Text variant="p" color="color-success-100" pt={3} style={{ width: '70%' }}>
          Helping you improve your health
        </Text>
      </Box>
    </Box>
  )
}
