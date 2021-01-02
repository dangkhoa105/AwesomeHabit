import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-eva-icons'
import { fonts } from '../../../theme/theme'

const size = 20

export default function ItemHabit({ item, index, onChangeValue }) {
  const [isSelected, setIsSelected] = useState(item.check)

  const handleSelected = () => {
    setIsSelected(!isSelected)
    onChangeValue({ ...item, check: !isSelected }, index)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleSelected}>
      <Icon
        name={isSelected ? 'checkmark-circle-2' : 'radio-button-off-outline'}
        width={size}
        height={size}
        fill="#9570FF"
      />
      <View style={{ paddingLeft: 16 }}>
        <Text style={styles.name}>{item !== null && item.title}</Text>
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
    fontSize: 14,
    fontFamily: fonts.medium,
    fontWeight: '500',
  },
})
