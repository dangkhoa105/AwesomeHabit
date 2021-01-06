import React, { useState, useEffect } from 'react'
import { ScrollView, FlatList, Dimensions, Platform, StyleSheet } from 'react-native'
import { Box, Text, Button } from '../../../../../components'
import { formatTime } from '../../../../../components/Function'
import DateTimePicker from '@react-native-community/datetimepicker'
import LabelTime from './LabelTime'

const { width } = Dimensions.get('window')

export default function TimePicker({ getValue }) {
  const [times, setTimes] = useState([])
  const [showTimePicker, setShowTimePicker] = useState(false)

  useEffect(() => {
    getValue(times)
  }, [times])

  const onChange = (event, selectedDate) => {
    setShowTimePicker(false)
    if (selectedDate !== undefined) {
      setTimes([
        ...times,
        formatTime(selectedDate.getHours()) + ':' + formatTime(selectedDate.getMinutes()),
      ])
    }
  }

  const renderItem = ({ item, index }) => {
    return (
      <LabelTime
        time={item}
        index={index}
        onRemove={(index) => setTimes(times.filter((v, i) => index !== i))}
      />
    )
  }

  return (
    <Box pt={11}>
      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        <Text variant="p" color="color-gray-400">
          Time:
        </Text>

        <Button
          width="70%"
          bg="color-gray-100"
          borderWidth={0.25}
          borderColor="color-gray-200"
          alignItems="flex-end"
          onPress={() => setShowTimePicker(true)}
        >
          <Text variant="p" color="color-gray-300" paddingVertical={2} pr={2} pl={11}>
            Choose time
          </Text>
        </Button>
      </Box>

      <FlatList
        data={times}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />

      {showTimePicker && (
        <DateTimePicker
          value={new Date()}
          mode={'time'}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      )}
    </Box>
  )
}
