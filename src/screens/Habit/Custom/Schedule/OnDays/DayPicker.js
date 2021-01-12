import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { Box, Text, Button } from '../../../../../components'
import { Icon } from 'react-native-eva-icons'
import { colors } from '../../../../../theme/color'

const daily = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const size = 16

export default function DayPicker({ getDays }) {
  const [checkDaysSelected, setCheckDaysSelected] = useState(new Array(daily.length).fill(false))
  const [isSelectAll, setIsSelectAll] = useState(false)

  useEffect(() => {
    const list = []
    checkDaysSelected.map((v, i) => {
      if (v) {
        list.push(daily[i])
      }
    })
    getDays(list)
  }, [checkDaysSelected])

  const handleSelectAll = () => {
    setIsSelectAll(!isSelectAll)
    if (!isSelectAll) {
      setCheckDaysSelected(checkDaysSelected.map((v) => (v = true)))
    } else {
      setCheckDaysSelected(checkDaysSelected.map((v) => (v = false)))
    }
  }

  const renderItem = ({ item, index }) => {
    const isLastItem = index === daily.length - 1
    const pb = isLastItem ? 2 : 0

    const onSelect = () => {
      setCheckDaysSelected(checkDaysSelected.map((v, i) => (i === index ? !v : v)))
    }

    return (
      <Button onPress={onSelect}>
        <Box
          flexDirection="row"
          marginHorizontal={5}
          justifyContent="space-between"
          alignItems="center"
          mt={2}
          pb={pb}
        >
          <Text variant="p" color="color-gray-700">
            {item}
          </Text>

          {checkDaysSelected[index] && (
            <Icon
              name="checkmark-outline"
              width={size}
              height={size}
              fill={colors['color-gray-700']}
            />
          )}
        </Box>
      </Button>
    )
  }

  return (
    <Box
      width="70%"
      position="absolute"
      top="80%"
      left="32%"
      elevation={2}
      bg="white"
      borderRadius={1}
      zIndex={1}
    >
      <FlatList
        data={daily}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
      <Box borderWidth={0.25} height={1} borderColor="color-gray-200" marginHorizontal={4} />

      <Button paddingHorizontal={4} paddingVertical={2} onPress={handleSelectAll}>
        <Text variant="p">Select all</Text>
      </Button>
    </Box>
  )
}
