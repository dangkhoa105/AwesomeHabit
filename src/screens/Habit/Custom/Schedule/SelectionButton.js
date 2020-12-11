import React, { useState, useEffect } from 'react'
import { FlatList, Dimensions, StyleSheet } from 'react-native'
import { Box, Text, Button } from '../../../../components'

export default function SelectionButton({ title, data, getValue }) {
  const [type, setType] = useState(null)

  const onPress = (item, index) => {
    setType(index)
    getValue(item)
  }

  const renderItem = ({ item, index }) => {
    let isSelect = type === index

    let bg = 'transparent'

    if (type !== null) {
      bg = isSelect ? 'color-primary-transparent-200' : 'transparent'
    }

    return (
      <Button
        flex={1}
        alignItems="center"
        bg={bg}
        borderRadius={1}
        onPress={() => onPress(item, index)}
      >
        <Text
          numberOfLines={1}
          variant="p"
          paddingHorizontal={6}
          paddingVertical={2}
          color="color-primary-500"
        >
          {item}
        </Text>
      </Button>
    )
  }

  return (
    <Box pt={11}>
      <Text variant="p" color="color-gray-400" pb={4}>
        {title}:
      </Text>

      <FlatList
        data={data}
        numColumns={3}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </Box>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'space-between',
  },
})
