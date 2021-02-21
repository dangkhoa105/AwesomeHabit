import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { countDaysInYear } from '../Function'
import { objectIsNull } from '../../../components/Function'
import { fonts } from '../../../theme/theme'
import { colors } from '../../../theme/color'
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
  const [indexToday, setIndexToday] = useState(0)
  const flatListRef = useRef(null)

  const onPress = () => {
    if (!objectIsNull(flatListRef)) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: indexToday - 2 <= 0 ? indexToday : indexToday - 2,
      })
    }
  }

  return (
    <View>
      <TouchableOpacity style={styles.buttonToday} onPress={onPress}>
        <Text style={styles.txtToday}>Hôm nay</Text>
      </TouchableOpacity>
      <FlatList
        data={calendar}
        ref={flatListRef}
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
              getIndexToday={(value) => setIndexToday(value)}
            />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonToday: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors['color-info-500'],
    padding: 9,
    margin: 12,
    marginTop: 16,
    marginBottom: 0,
    borderRadius: 64,
  },
  txtToday: {
    color: '#fff',
    fontSize: 9,
    fontFamily: fonts.medium,
  },
})
