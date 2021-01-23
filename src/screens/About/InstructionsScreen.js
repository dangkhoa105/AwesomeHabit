import React from 'react'
import { Box, Text } from '../../components'
import { Icon } from 'react-native-eva-icons'
import { colors } from '../../theme/color'
import Header from '../Habit/Custom/Header/Header'

const size = 22

export default function InstructionsScreen(props) {
  return (
    <Box flex={1} paddingLeft={8} paddingRight={8} paddingTop={5} backgroundColor="white">
      <Header title={'Hướng dẫn'} navigation={props.navigation} />

      <Box flexDirection="row" alignItems="center" pt={8}>
        <Box p={2} bg="color-primary-500">
          <Icon name="arrow-back-outline" width={size} height={size} fill={colors.white} />
        </Box>
        <Box pl={4} alignItems="flex-start">
          <Text variant="h3medium">Lướt qua trái để hiển thị các lựa chọn</Text>
          <Box flexDirection="row">
            <Box p={2} bg="color-success-400" borderRadius={2}>
              <Text color="white">Chi tiết</Text>
            </Box>
            <Box ml={2} p={2} bg="color-danger-400" borderRadius={2}>
              <Text color="white">Xóa</Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box flexDirection="row" alignItems="center" pt={4}>
        <Box p={2} bg="color-primary-500">
          <Icon name="radio-outline" width={size} height={size} fill={colors.white} />
        </Box>
        <Text variant="h3medium" pl={4}>
          Nhập vào thói quen để hoàn thành
        </Text>
      </Box>
    </Box>
  )
}
