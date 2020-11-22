import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-eva-icons'

export default function ItemPlan({ data }) {
  const [isSelected, setIsSelected] = useState(data.isSelected)

  const handleSelected = () => {
    setIsSelected(!isSelected)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleSelected}>
      <Icon
        name={isSelected ? 'checkmark-circle-2' : 'radio-button-off-outline'}
        width={24}
        height={24}
        fill="#9570FF"
      />
      <View style={{ paddingLeft: 16 }}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.content}>{data.content}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 12,
  },
  content: {
    color: '#91A7AD',
    fontSize: 12,
    fontWeight: '500',
  },
  name: {
    color: '#333',
    fontSize: 12,
    fontWeight: 'bold',
  },
})
