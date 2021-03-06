import React, { useState, useEffect } from 'react'
import { Icon } from 'react-native-eva-icons'
import { FlatList } from 'react-native-gesture-handler'
import { Box, Text, Button } from '../../../../../components'
import { arrayIsEmpty } from '../../../../../components/Function'
import { colors } from '../../../../../theme/color'
import DayPicker from './DayPicker'

const size = 20

export default function OnDays({ value, habitType, getDays }) {
  const [isShowPopup, setIsShowPopup] = useState(false)
  const [daysSelected, setDaysSelected] = useState([])
  const [indexDelete, setIndexDelete] = useState('')

  useEffect(() => {
    getDays(daysSelected)
  }, [daysSelected])

  useEffect(() => {
    if (!arrayIsEmpty(value)) {
      setDaysSelected(value)
    }
  }, [value])

  const renderItem = ({ item, index }) => (
    <Box
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      borderWidth={1}
      borderColor="color-primary-500"
      borderRadius={8}
      p={2}
      paddingVertical={1}
      mt={2}
      mr={2}
    >
      <Text variant="s1" color="color-primary-500" fontSize={12} pr={1}>
        {item}
      </Text>
      <Icon
        name="close-circle"
        width={size}
        height={size}
        fill={colors['color-primary-500']}
        onPress={() => {
          setIndexDelete(index)
          setDaysSelected(daysSelected.filter((_, i) => i !== index))
        }}
      />
    </Box>
  )

  return (
    <Box pt={11}>
      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Text variant="p">Vào các ngày:</Text>

        <Button
          width="65%"
          bg="color-gray-100"
          borderWidth={0.25}
          borderColor="color-gray-200"
          alignItems="flex-end"
          onPress={() => setIsShowPopup(!isShowPopup)}
        >
          <Text variant="p" color="color-gray-300" paddingVertical={2} pr={2} pl={11}>
            Chọn ngày
          </Text>
        </Button>

        {isShowPopup && (
          <DayPicker habitType={habitType} indexDelete={indexDelete} getDays={setDaysSelected} />
        )}
      </Box>

      <FlatList
        data={daysSelected}
        contentContainerStyle={{ paddingBottom: 8 }}
        numColumns={2}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </Box>
  )
}
