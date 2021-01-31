import React from 'react'
import { Box, Text, Button } from '../../../components'
import { fonts } from '../../../theme/theme'

export default function ItemBottomSheet({ onPressType, setIsShowModal }) {
  return (
    <Box>
      <Box bg="white" borderRadius={3} marginHorizontal={3}>
        <Box
          alignItems="center"
          borderBottomWidth={1}
          borderColor="color-gray-200"
          paddingVertical={3}
        >
          <Text fontFamily={fonts.medium} color="color-gray-500">
            Chọn loại thói quen
          </Text>
        </Box>
        <Button
          alignItems="center"
          borderBottomWidth={1}
          borderColor="color-gray-200"
          paddingVertical={4}
          onPress={() => onPressType('Once')}
        >
          <Text fontSize={16} fontFamily={fonts.semibold} color="color-primary-500">
            Chỉ một lần
          </Text>
        </Button>
        <Button alignItems="center" paddingVertical={4} onPress={() => onPressType()}>
          <Text fontSize={16} fontFamily={fonts.semibold} color="color-primary-500">
            Lặp lại
          </Text>
        </Button>
      </Box>
      <Button
        bg="white"
        borderRadius={3}
        alignItems="center"
        paddingVertical={4}
        m={3}
        onPress={() => setIsShowModal(false)}
      >
        <Text fontSize={16} fontFamily={fonts.bold} color="color-primary-500">
          Hủy bỏ
        </Text>
      </Button>
    </Box>
  )
}
