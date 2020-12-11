import React, { useState, useEffect } from 'react'
import { FlatList, Dimensions, StyleSheet } from 'react-native'
import { Box, Text, Button } from '../../../../components'
import { Icon } from 'react-native-eva-icons'
import { listIconPicker } from '../../../../theme/icon'

const size = 24

export default function IconPicker({ onSelectIcon }) {
  const [selectIcon, setSelectIcon] = useState(null)

  const onPress = (item, index) => {
    setSelectIcon(index)
    onSelectIcon(item)
  }

  const renderItemPicker = ({ item, index }) => {
    const isSelectedIcon = selectIcon === index

    let opacity = 1
    if (selectIcon !== null) {
      opacity = isSelectedIcon ? 1 : 0.2
    }

    return (
      <Button flex={1} pb={6} key={index} onPress={() => onPress(item, index)}>
        <Icon name={item} width={size} height={size} fill="#0D1C2E" opacity={opacity} />
      </Button>
    )
  }

  return (
    <Box pt={6}>
      <Text pb={4}>Icon:</Text>
      <FlatList
        data={listIconPicker}
        numColumns={7}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItemPicker}
      />
    </Box>
  )
}
