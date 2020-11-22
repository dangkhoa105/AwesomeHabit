import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Dimensions, StyleSheet } from 'react-native'
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory-native'
import { Icon } from 'react-native-eva-icons'

const { width } = Dimensions.get('window')

export default function CompletionRate({ data }) {
  const dataX = data.filter((val, index) => {
    return index + 1
  })

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Completion Rate</Text>
        <TouchableOpacity style={styles.filter}>
          <Text style={styles.txtFilter}>Weekly</Text>
          <Icon name="chevron-down-outline" width={20} height={20} fill="#9F7EFF" />
        </TouchableOpacity>
      </View>

      {/* CONTENT */}
      <View style={styles.contentContainer}>
        <VictoryChart width={width - 40} theme={VictoryTheme.material}>
          <VictoryBar
            data={data}
            animate={{
              onExit: {
                duration: 500,
                before: () => ({
                  _y: 0,
                  fill: '#EC4899',
                }),
              },
            }}
            y="value"
            style={{ data: { fill: '#EC4899', width: 12 } }}
            cornerRadius={{ top: 6 }}
          />
        </VictoryChart>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
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
    shadowColor: '#9CA3AF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 5,
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
