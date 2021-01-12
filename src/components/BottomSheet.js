import React, { useState, useEffect } from 'react'
import { Modal } from 'react-native'
import { Box, Text } from '.'

export default function BottomSheet({ isShowModal, children }) {
  const [visible, SetVisible] = useState(isShowModal)

  useEffect(() => {
    SetVisible(isShowModal)
  }, [isShowModal])

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Modal animationType="slide" transparent={true} visible={visible}>
        {children}
      </Modal>
    </Box>
  )
}
