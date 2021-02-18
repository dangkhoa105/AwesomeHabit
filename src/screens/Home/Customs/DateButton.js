import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import moment from 'moment'

export default function DateButton({
  getHabitsAction,
  item,
  index,
  indexSelect,
  setIndexSelected,
  getDaySelect,
  getIndexToday,
}) {
  const curDate = moment().utc().format('DD')
  const curMonth = moment().utc().format('MM')

  const check = (date, month, type) => {
    let stylesWrap = ''
    let stylesItemDate = ''
    let stylesItemDay = ''

    if (curDate === date && curMonth === month) {
      getIndexToday(index)
      stylesWrap = styles.wrapItemCurDate
      stylesItemDate = styles.txtItemDateCurDate
      stylesItemDay = styles.txtItemDayCurDate
    } else {
      if (indexSelect === index) {
        stylesWrap = styles.wrapItemSelect
        stylesItemDate = styles.txtItemDateSelect
        stylesItemDay = styles.txtItemDaySelect
      } else {
        stylesWrap = styles.wrapItem
        stylesItemDate = styles.txtItemDate
        stylesItemDay = styles.txtItemDay
      }
    }

    switch (type) {
      case 0:
        return stylesWrap
      case 1:
        return stylesItemDate
      case 2:
        return stylesItemDay
    }
  }

  const onPress = () => {
    setIndexSelected(index)
    getDaySelect(moment(item.year + '-' + item.month + '-' + item.date))
    getHabitsAction()
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={check(item.date, item.month, 0)}>
        <Text style={check(item.date, item.month, 1)}>{item.day.toUpperCase()}</Text>
        <Text style={check(item.date, item.month, 2)}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapItem: {
    width: 48,
    backgroundColor: '#E8F1F4',
    paddingVertical: 16,
    marginHorizontal: 8,
    marginVertical: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#9F7EFF',
    borderWidth: 0,
  },
  txtItemDay: {
    fontSize: 16,
    color: '#698790',
  },
  txtItemDate: {
    fontSize: 16,
    color: '#698790',
  },

  wrapItemSelect: {
    width: 48,
    backgroundColor: '#9F7EFF',
    paddingVertical: 16,
    marginHorizontal: 8,
    marginVertical: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtItemDaySelect: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  txtItemDateSelect: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  wrapItemCurDate: {
    width: 48,
    backgroundColor: '#F1ECFF',
    paddingVertical: 16,
    marginHorizontal: 8,
    marginVertical: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#9F7EFF',
    borderWidth: 1,
  },
  txtItemDayCurDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9F7EFF',
  },
  txtItemDateCurDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9F7EFF',
  },
})
