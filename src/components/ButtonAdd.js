import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-eva-icons'
import ActionButton from 'react-native-action-button'
import { colors } from '../theme/color'

const size = 40

export default function ButtonAdd({ onPressCreate, onPressChatBot }) {
  return (
    <ActionButton shadowStyle={{ elevation: 0 }} buttonColor={colors['color-primary-500']}>
      <ActionButton.Item
        size={size}
        buttonColor={colors['color-success-300']}
        // title="Create"
        onPress={onPressCreate}
      >
        <Icon name="plus" width={24} height={24} fill="#fff" />
      </ActionButton.Item>
      <ActionButton.Item
        size={size}
        buttonColor={colors['color-info-500']}
        // title="Chat bot"
        onPress={onPressChatBot}
      >
        <Icon name="message-circle-outline" width={24} height={24} fill="#fff" />
      </ActionButton.Item>
    </ActionButton>
  )
}
