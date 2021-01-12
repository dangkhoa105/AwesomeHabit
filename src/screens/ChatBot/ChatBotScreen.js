import React, { useRef, useState } from 'react'
import {
  FlatList,
  TextInput,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  StyleSheet,
} from 'react-native'
import { Icon } from 'react-native-eva-icons'
import { Box, Text, Button } from '../../components'
import { colors } from '../../theme/color'
import { fonts } from '../../theme/theme'
import Header from './Custom/Header'
import ButtonSend from './Custom/ButtonSend'
import LineChat from './Custom/LineChat'
import AnimatedEllipsis from './Custom/AnimatedEllipsis'

const { width } = Dimensions.get('window')
const steps = [
  {
    message: 'a',
    type: 0,
  },
  {
    message: 'a',
    type: 1,
  },
  {
    message: 'a',
    type: 0,
  },
  {
    message: 'a',
    type: 1,
  },
  {
    message: 'a',
    type: 1,
  },
  {
    message: 'a',
    type: 1,
  },
  {
    message: 'a',
    type: 1,
  },
  {
    message: 'a',
    type: 1,
  },
  {
    message: 'a',
    type: 1,
  },
  {
    message: 'a',
    type: 0,
  },
]

export default function ChatBotScreen({ navigation }) {
  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)
  const refFlatList = useRef()

  const renderItem = ({ item, index }) => {
    let findDuplicates = steps.filter((item, index) => steps.indexOf(item.type) != index)

    return <LineChat message={item.message} type={item.type} />
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Box flex={1} bg="white">
        <Box paddingVertical={5} borderBottomWidth={1} borderBottomColor="color-gray-300">
          <Header navigation={navigation} />
        </Box>

        <Box flex={1}>
          <FlatList
            data={steps}
            ref={refFlatList}
            onEndThreshold={0}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            onContentSizeChange={() => refFlatList.current.scrollToEnd({ animated: true })}
            onLayout={() => refFlatList.current.scrollToEnd({ animated: true })}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
          />
          {visible && <AnimatedEllipsis minOpacity={0.4} animationDelay={200} />}
        </Box>

        <Box
          width={width}
          flexDirection="row"
          justifyContent="center"
          // paddingHorizontal={2}
          borderTopWidth={1}
          borderTopColor="color-gray-200"
          paddingVertical={3}
          bg="background-basic-2"
        >
          <TextInput
            value={message}
            style={styles.textInput}
            placeholder="Write a message here"
            placeholderTextColor={colors['color-gray-500']}
            onFocus={() => setVisible(true)}
            onBlur={() => setVisible(false)}
            onChangeText={(value) => setMessage(value)}
          />
          <ButtonSend
            onPress={() => {
              if (message.trim() !== '') {
                Keyboard.dismiss()
                steps.push({ message, type: 1 })
                setMessage('')
              }
            }}
          />
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  textInput: {
    width: width / 1.5,
    fontSize: 14,
    fontFamily: fonts.medium,
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    paddingVertical: 8,
    paddingLeft: 16,
  },
  btnSend: {
    backgroundColor: colors['color-primary-500'],
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 32,
    borderBottomRightRadius: 32,
    paddingVertical: 8,
  },
  lottie: {
    width: 100,
    height: 100,
  },
})
