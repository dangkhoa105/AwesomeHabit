import React from 'react'
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
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        {/* TITLE HEADER */}
        <View style={styles.titleHeader}>
          <Text style={styles.txtTitleHeader}>{DataRatio.content}</Text>
          <Text style={styles.txtTitleHeader}>{DataRatio.ratio}%</Text>
        </View>

        {/* RATIO */}
        <View style={styles.ratioHeader}>
          <View style={[styles.ratioInfo, { width: `${DataRatio.ratio}%` }]} />
        </View>
      </View>

      {/* <View style={styles.divider} /> */}

      {/* CONTENT */}
      <View style={styles.content}>
        <FlatList
          data={DataPlan}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({ item, index }) => {
            return <ItemPlan data={item} />
          }}
        />
      </View>
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
    flex: 1,
  },
  titleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    paddingVertical: 16,
    paddingBottom: 12,
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
  divider: {
    height: 0.5,
    backgroundColor: '#91A7AD',
    marginVertical: 16,
  },
  content: {
    flex: 4,
  },
})
