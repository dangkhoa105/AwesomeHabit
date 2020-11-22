import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import ItemPlan from './Customs/ItemPlan'

const DataRatio = {
  content: "You're almost done, go ahead!",
  ratio: '80',
}

const DataHabit = [
  {
    name: 'Read Book',
    content: 'Complete today to have the first streak',
    isSelected: true,
  },
  {
    name: 'Learning Arabic',
    content: '1-day streak',
    isSelected: true,
  },
  {
    name: 'Morning Run',
    content: '1-day streak',
    isSelected: true,
  },
  {
    name: 'Read Book',
    content: 'Complete today to have the first streak',
    isSelected: false,
  },
  {
    name: 'Read Book',
    content: 'Complete today to have the first streak',
    isSelected: false,
  },
  {
    name: 'Read Book',
    content: 'Complete today to have the first streak',
    isSelected: false,
  },
  {
    name: 'Read Book',
    content: 'Complete today to have the first streak',
    isSelected: false,
  },
  {
    name: 'Read Bookkk',
    content: 'Complete today to have the first streak',
    isSelected: false,
  },
]

export default function HomeScreen() {
  const [ratio, setRatio] = useState(0)

  useEffect(() => {
    setRatio(calRatio)
  }, [ratio])

  const calRatio = () => {
    const listHabitComplete = DataHabit.filter((val) => {
      return val.isSelected === true
    })

    return (listHabitComplete.length * 100) / DataHabit.length
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        {/* TITLE HEADER */}
        <View style={styles.titleHeader}>
          <Text style={styles.txtTitleHeader}>{DataRatio.content}</Text>
          <Text style={styles.txtTitleHeader}>{ratio}%</Text>
        </View>

        {/* RATIO */}
        <View style={styles.ratioHeader}>
          <View style={[styles.ratioInfo, { width: `${ratio}%` }]} />
        </View>
      </View>

      {/* <View style={styles.divider} /> */}

      {/* CONTENT */}
      <FlatList
        data={DataHabit}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({ item, index }) => {
          return <ItemPlan data={item} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8FBFB',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    paddingHorizontal: 22,
  },
  header: {
    borderBottomColor: '#9CA3AF',
    borderBottomWidth: 0.5,
    paddingBottom: 20,
  },
  titleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingHorizontal: 7,
    paddingVertical: 16,
  },
  txtTitleHeader: {
    color: '#91A7AD',
    fontSize: 12,
    fontWeight: '500',
  },
  ratioHeader: {
    backgroundColor: '#E8F1F4',
    borderRadius: 16,
    flexDirection: 'row',
    height: 8,
  },
  ratioInfo: {
    backgroundColor: '#FF79C9',
    borderRadius: 16,
    height: 8,
  },
  content: {},
})
