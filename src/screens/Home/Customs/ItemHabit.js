import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { Icon } from 'react-native-eva-icons'
import { colors } from '../../../theme/color'
import { fonts } from '../../../theme/theme'
import { checkExpDate } from '../Function'

const { width } = Dimensions.get('window')
const size = 20

export default function ItemHabit({ item, index, onChangeValue, keys, onDelete }) {
  const [isSelected, setIsSelected] = useState(item.check)

  const handleSelected = () => {
    setIsSelected(!isSelected)
    onChangeValue({ ...item, check: !isSelected }, index)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSelected}>
        <View style={styles.content}>
          <Icon
            name={isSelected ? 'checkmark-circle-2' : 'radio-button-off-outline'}
            width={size}
            height={size}
            fill="#9570FF"
          />
          <View>
            <Text style={styles.name}>{item !== null && item.title} </Text>
            <Text style={styles.habitType}>type: {item !== null && item.habitType}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonDelete} onPress={() => onDelete(keys[index])}>
        <Text style={styles.textButton}>Delete</Text>
      </TouchableOpacity>
    </View>
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
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#333',
    fontSize: 14,
    fontFamily: fonts.medium,
    paddingLeft: 16,
  },
  habitType: {
    color: '#999',
    fontSize: 12,
    fontFamily: fonts.medium,
    paddingLeft: 16,
  },
  expDate: {
    color: '#999',
    fontSize: 10,
    fontFamily: fonts.medium,
    paddingLeft: 16,
  },
  buttonDelete: {
    backgroundColor: colors['color-danger-400'],
    padding: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  textButton: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: '#fff',
  },
})
