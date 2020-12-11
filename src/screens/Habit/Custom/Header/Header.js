import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-eva-icons'
import { Box, Text, Button } from '../../../../components'

export default function Header({ title, type, navigation }) {
  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      {/* BUTON BACK AND TITLE */}
      <Box flexDirection="row" alignItems="center">
        {type !== 'normal' && (
          <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" width={24} height={24} fill="#000" />
          </TouchableOpacity>
        )}
        <Text variant="h3bold">{title}</Text>
      </Box>

      {/* BUTTON CLOSE */}
      <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
        <Icon name="close" width={24} height={24} fill="#000" />
      </TouchableOpacity>
    </Box>
  )
}

Header.defaultProps = {
  title: '',
  type: 'normal',
  goBack: null,
}

const styles = StyleSheet.create({
  btnBack: {
    paddingRight: 16,
  },
})
