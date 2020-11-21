import React from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { VictoryBar } from 'victory'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function CompletionRate({ data }) {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>This week</Text>
        <TouchableOpacity style={styles.filter}>
          <Text style={styles.txtFilter}>Weekly</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} color="#9F7EFF" />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtFilter: {
    fontSize: 12,
    color: '#9F7EFF',
    paddingRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 16,
    color: '#333',
  },
  contentContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  wrapItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 12,
    color: '#333',
  },
  ratio: {
    fontSize: 11,
    fontWeight: '500',
    color: '#859EA4',
    paddingRight: 16,
  },
})
