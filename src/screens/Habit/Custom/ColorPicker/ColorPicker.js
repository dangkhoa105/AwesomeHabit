import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { Box, Text, Button } from '../../../../components'
import { objectIsNull } from '../../../../components/Function'
import { listColorPicker } from '../../../../theme/color'
import CircleButton from './CircleButton'
import CircleCheckButton from './CircleCheckButton'

export default function ColorPicker({ value, onSelectColor }) {
  const [selectColor, setSelectColor] = useState(null)

  useEffect(() => {
    if (!objectIsNull(value)) {
      setSelectColor(listColorPicker.indexOf(value))
    }
  }, [value])

  const onPress = (item, index) => {
    setSelectColor(index)
    onSelectColor(item)
  }

  const renderItemPicker = ({ item, index }) => {
    const isSelectedColor = selectColor === index

    let opacity = 1
    if (selectColor !== null) {
      opacity = isSelectedColor ? 1 : 0.2
    }

    const handleSelectColor = () => {
      if (selectColor !== null) {
        if (isSelectedColor) {
          return <CircleCheckButton item={item} index={index} />
        }
        return <CircleButton item={item} index={index} opacity={opacity} />
      }
      return <CircleButton item={item} index={index} opacity={opacity} />
    }

    return (
      <Button key={index} onPress={() => onPress(item, index)}>
        {handleSelectColor()}
      </Button>
    )
  }

  return (
    <Box pt={6}>
      <Text pb={4}>Màu:</Text>
      <FlatList
        data={listColorPicker}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItemPicker}
      />
    </Box>
  )
}

ColorPicker.defaultProps = {
  value: null,
}
