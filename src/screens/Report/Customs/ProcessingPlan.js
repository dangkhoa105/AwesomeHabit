import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import { Icon } from 'react-native-eva-icons'

export default function ProcessingPlan({ data }) {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Text style={styles.title}>This week</Text>

      {/* CONTENT */}
      <FlatList
        data={data}
        style={styles.contentContainer}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({ item, index }) => {
          return (
            <View
              style={[
                styles.wrapItem,
                {
                  borderBottomWidth: index === data.length - 1 ? 0 : 0.5,
                  paddingVertical: 25,
                  marginHorizontal: 25,
                  borderBottomColor: '#91A7AD',
                },
              ]}
            >
              <View style={[styles.wrapItem, { margin: 0 }]}>
                {/* CIRCLE BAR */}
                <ProgressCircle
                  percent={parseInt(item.ratio)}
                  radius={10}
                  borderWidth={2}
                  color="#FF79C9"
                  shadowColor="#E8F1F4"
                  bgColor="#F8FBFB"
                />

                {/* NAME */}
                <Text style={styles.name}>{item.name}</Text>
              </View>

              <View style={[styles.wrapItem, { margin: 0 }]}>
                {/* RATIO */}
                <Text style={styles.ratio}>{item.ratio}%</Text>

                {/* ARROW */}
                <Icon name="chevron-right-outline" width={24} height={24} fill="#859EA4" />
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
  },
  title: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 16,
  },
  contentContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#9CA3AF',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 5,
  },
  wrapItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 12,
  },
  ratio: {
    color: '#859EA4',
    fontSize: 11,
    fontWeight: '500',
    paddingRight: 16,
  },
})
