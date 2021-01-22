import React from 'react'
import { Box, Text } from '../../components'
import { Icon } from 'react-native-eva-icons'
import { colors } from '../../theme/color'
import Header from '../Habit/Custom/Header/Header'
import { Dimensions } from 'react-native'

const size = 22

export default function InstructionsScreen(props) {
  return (
    <Box flex={1} paddingLeft={8} paddingRight={8} paddingTop={5} backgroundColor="white">
      <Header title={'Instructions'} navigation={props.navigation} />

      <Box flexDirection="row" alignItems="center" pt={8}>
        <Box p={2} bg="color-primary-500">
          <Icon name="arrow-back-outline" width={size} height={size} fill={colors.white} />
        </Box>
        <Text variant="h3medium" pl={4}>
          Swipe to left to show option{' '}
          <Box p={2} bg="color-success-400" borderRadius={2}>
            <Text color="white">Detail</Text>
          </Box>{' '}
          <Box p={2} bg="color-danger-400" borderRadius={2}>
            <Text color="white">Delete</Text>
          </Box>
        </Text>
      </Box>

      <Box flexDirection="row" alignItems="center" pt={4}>
        <Box p={2} bg="color-primary-500">
          <Icon name="radio-outline" width={size} height={size} fill={colors.white} />
        </Box>
        <Text variant="h3medium" pl={4}>
          Tap for done habit
        </Text>
      </Box>
    </Box>
  )
}
