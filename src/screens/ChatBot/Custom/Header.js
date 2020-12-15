import React from 'react'
import { StyleSheet } from 'react-native'
import { Box, Text, Button } from '../../../components'
import { Icon } from 'react-native-eva-icons'
import { colors } from '../../../theme/color'

const size = 24

export default function Header({ navigation }) {
  return (
    <Box>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingHorizontal={4}
      >
        {/* BUTON BACK AND TITLE */}
        <Box flexDirection="row" alignItems="center">
          <Button style={styles.btnBack} onPress={() => navigation.goBack()}>
            <Icon name="arrow-ios-back" width={size} height={size} fill="#000" />
          </Button>
          <Box>
            <Box flexDirection="row" alignItems="center">
              <Icon name="smiling-face" width={size} height={size} fill="#000" />
              <Box pl={2}>
                <Text variant="h3bold">Chat with bot</Text>
                <Text variant="s2" color="text-basic">
                  Active now
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  btnBack: {
    paddingRight: 16,
  },
})
