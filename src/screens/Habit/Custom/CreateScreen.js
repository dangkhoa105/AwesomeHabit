import React, { useState, useEffect } from 'react'
import { TextInput, ScrollView, StyleSheet } from 'react-native'
import { Box, Text, Button } from '../../../components'
import { colors } from '../../../theme/color'
import Header from '../Custom/Header/Header'
import ColorPicker from '../Custom/ColorPicker/ColorPicker'
import IconPicker from '../Custom/IconPicker/IconPicker'

export default function CreateScreen({ type, navigation, getValue }) {
  const [select, setSelect] = useState({ name: '', color: '', icon: '' })

  let checkCondition = select.name.trim() !== '' && select.color !== '' && select.icon !== ''

  let bg = checkCondition ? 'color-primary-500' : 'color-primary-200'

  const handleOnPressNext = () => {
    if (checkCondition) {
      getValue(select)
      navigation.navigate('DetailScheduleContainer', { dataSelect: select })
    } else {
      return {}
    }
  }

  const jsUcFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Box flex={1} paddingHorizontal={8} pt={5} bg="white">
        {/* HEADER */}
        <Header title={'Create new ' + type} navigation={navigation} />

        {/* SELECTIONS */}
        <Box pt={6}>
          <Box>
            <Text pb={2}>{jsUcFirst(type)} name:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(value) => setSelect({ ...select, name: value })}
            />
          </Box>

          <ColorPicker onSelectColor={(value) => setSelect({ ...select, color: value })} />

          <IconPicker onSelectIcon={(value) => setSelect({ ...select, icon: value })} />
        </Box>

        {/* BUTTONS */}
        <Box
          flex={1}
          flexDirection="row"
          paddingVertical={11}
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Button bg="color-primary-500" borderRadius={1} onPress={() => navigation.goBack()}>
            <Text color="white" variant="p" paddingHorizontal={6} paddingVertical={2}>
              Back
            </Text>
          </Button>

          <Button bg={bg} borderRadius={1} onPress={handleOnPressNext}>
            <Text color="white" variant="p" paddingHorizontal={6} paddingVertical={2}>
              Next
            </Text>
          </Button>
        </Box>
      </Box>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors['color-gray-100'],
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  circle: {
    width: 24,
    height: 24,
    marginLeft: 12,
    borderRadius: 24,
  },
})