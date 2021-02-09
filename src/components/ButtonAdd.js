import React from 'react'
import { Icon } from 'react-native-eva-icons'
import { colors } from '../theme/color'
import ActionButton from 'react-native-action-button'
import OpenURLButton from './OpenURLButton'

const size = 40

export default function ButtonAdd({ onPressCreate }) {
  return (
    <ActionButton
      shadowStyle={{ elevation: 0 }}
      offsetX={15}
      offsetY={15}
      buttonColor={colors['color-primary-500']}
    >
      <ActionButton.Item
        size={size}
        buttonColor={colors['color-success-300']}
        // title="Create"
        onPress={onPressCreate}
      >
        <Icon name="plus" width={24} height={24} fill="#fff" />
      </ActionButton.Item>
      <ActionButton.Item
        title="Đi đến Messenger"
        size={size}
        buttonColor={colors['color-info-500']}
        onPress={() => {}}
      >
        <OpenURLButton url={`http://x.me/100004167723749/`}>
          <Icon name="message-circle-outline" width={24} height={24} fill="#fff" />
        </OpenURLButton>
      </ActionButton.Item>
    </ActionButton>
  )
}
