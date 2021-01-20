import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { countDaysInYear } from '../Function'
import moment from 'moment'
import DateButton from './DateButton'

// get calendar
let calendar = []
for (let i = 1; i <= countDaysInYear(); i++) {
  calendar = [
    ...calendar,
    {
      day: moment().dayOfYear(i).format('ddd'),
      date: moment().dayOfYear(i).format('DD'),
      month: moment().dayOfYear(i).format('MM'),
      year: moment().dayOfYear(i).format('YYYY'),
    },
  ]
}

export default function Calender({ getHabitsAction, getDaySelect }) {
  const [indexSelect, setIndexSelected] = useState('')
  return (
    <View>
      <FlatList
        data={calendar}
        keyExtractor={(_, index) => 'key' + index}
        horizontal
        decelerationRate={0.5}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <DateButton
              getHabitsAction={getHabitsAction}
              item={item}
              index={index}
              indexSelect={indexSelect}
              setIndexSelected={(value) => setIndexSelected(value)}
              getDaySelect={getDaySelect}
            />
          )
        }}
      />
    </View>
  )
}
