import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { countDaysInYear } from '../Function'
import moment from 'moment'

// get calendar
let calendar = []
for (let i = 1; i <= countDaysInYear(); i++) {
  calendar = [
    ...calendar,
    {
      date: moment().dayOfYear(i).format('DD'),
      month: moment().dayOfYear(i).format('M'),
      day: moment().dayOfYear(i).format('ddd'),
    },
  ]
}

const curDate = moment().utc().format('DD')
const curMonth = moment().utc().format('M')

export default function Calender() {
  const checkCurDate = (date, month) => {
    if (curDate === date && curMonth === month) {
      return true
    }
    return false
  }
  return (
    <View>
      <FlatList
        data={calendar}
        keyExtractor={(_, index) => 'key' + index}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View
              style={checkCurDate(item.date, item.month) ? styles.wrapItemCurDate : styles.wrapItem}
            >
              <Text
                style={
                  checkCurDate(item.date, item.month) ? styles.txtItemDayCurDate : styles.txtItemDay
                }
              >
                {item.day.toUpperCase()}
              </Text>
              <Text
                style={[
                  styles.txtItem,
                  {
                    color: checkCurDate(item.date, item.month) ? '#9F7EFF' : '#698790',
                  },
                ]}
              >
                {item.date}
              </Text>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapItem: {
    backgroundColor: '#E8F1F4',
    padding: 16,
    marginHorizontal: 8,
    marginVertical: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#9F7EFF',
    borderWidth: 0,
  },
  wrapItemCurDate: {
    backgroundColor: '#F1ECFF',
    padding: 16,
    marginHorizontal: 8,
    marginVertical: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#9F7EFF',
    borderWidth: 1,
  },
  txtItemDay: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#698790',
    paddingBottom: 10,
    fontSize: 10,
  },
  txtItemDayCurDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9F7EFF',
    paddingBottom: 10,
    fontSize: 10,
  },
})
