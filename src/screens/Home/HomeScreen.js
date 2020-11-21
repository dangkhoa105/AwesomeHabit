import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import ItemPlan from './Customs/ItemPlan'

const DataRatio = {
  content: "You're almost done, go ahead!",
  ratio: '80',
}

const DataPlan = [
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
    calRatio()
  }, [ratio])

  const calRatio = () => {
    let listComplete = DataPlan.filter((val) => {
      return val.isSelected === true
    })

    setRatio((listComplete.length * 100) / DataPlan.length)
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

      {/* CONTENT */}
      <FlatList
        data={DataPlan}
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
    flex: 1,
    backgroundColor: '#F8FBFB',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 22,
  },
  header: {
    paddingVertical: 16,
  },
  titleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    paddingBottom: 1,
  },
  txtTitleHeader: {
    fontSize: 12,
    fontWeight: '500',
    color: '#91A7AD',
  },
  ratioHeader: {
    flexDirection: 'row',
    height: 8,
    backgroundColor: '#E8F1F4',
    borderRadius: 16,
  },
  ratioInfo: {
    backgroundColor: '#FF79C9',
    height: 8,
    borderRadius: 16,
  },
  content: {},
})
