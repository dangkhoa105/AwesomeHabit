import React from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { VictoryBar } from 'victory'
import { Icon } from 'react-native-eva-icons'

export default function CompletionRate({ data }) {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>This week</Text>
        <TouchableOpacity style={styles.filter}>
          <Text style={styles.txtFilter}>Weekly</Text>
          {/* <Icon name="chevron-down-outline" width={16} height={16} color="#9F7EFF" /> */}
        </TouchableOpacity>
      </View>

      {/* CONTENT */}
      {/* <VictoryBar
                data={data}
                y='value'
            /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtFilter: {
    color: '#9F7EFF',
    fontSize: 12,
    paddingRight: 12,
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
  },
  wrapItem: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
