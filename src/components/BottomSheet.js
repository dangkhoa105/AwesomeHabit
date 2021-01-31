import React, { useState, useEffect } from 'react'
import { Modal } from 'react-native'
import { Box, Text, Button } from '.'

export default function BottomSheet({ isShowModal, children }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(isShowModal)
  }, [isShowModal])

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <Box flex={1} justifyContent="flex-end" bg="color-basic-transparent-600">
        {children}
      </Box>
    </Modal>
  )
}
