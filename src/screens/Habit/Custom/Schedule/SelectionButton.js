import React, { useState, useEffect } from 'react'
import { FlatList, Dimensions, StyleSheet } from 'react-native'
import { Box, Text, Button } from '../../../../components'
import { objectIsNull } from '../../../../components/Function'

export default function SelectionButton({ title, data, value, getValue }) {
  const [type, setType] = useState(null)

  useEffect(() => {
    if (!objectIsNull(value)) {
      setType(data.indexOf(value))
    }
  }, [value])

  const onPress = (item, index) => {
    setType(index)
    getValue(item)
  }

  const renderItem = ({ item, index }) => {
    const isSelect = type === index

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
      <Text variant="p" pb={4}>
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
