import React, { useState } from 'react'
import { Box, Text, Button } from '../../components'
import { ScrollView, Dimensions } from 'react-native'
import { colors } from '../../theme/color'
import { Icon } from 'react-native-eva-icons'
import auth from '@react-native-firebase/auth'
import IconText from '../Habit/Custom/Header/IconText'
import Header from '../Habit/Custom/Header/Header'
import IconTextInput from '../../components/IconTextInput'

const { width } = Dimensions.get('window')
const size = 20

export default function EditProfileScreen(props) {
  const user = auth().currentUser
  const [name, setName] = useState({ value: user.displayName, resultCode: true, message: '' })
  const [email, setEmail] = useState({ value: user.email, resultCode: true, message: '' })
  const [password, setPassword] = useState({ value: '', resultCode: true, message: '' })
  const [phoneNumber, setPhoneNumber] = useState({
    value: user.phoneNumber,
    resultCode: true,
    message: '',
  })

  const bg = true ? 'color-primary-500' : 'color-primary-200'

  return (
    <Box flex={1} paddingLeft={8} paddingRight={8} paddingTop={5} backgroundColor="white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <Header title={'Edit your profile'} navigation={props.navigation} />

        <Box width={width - 64} pt={4}>
          <IconTextInput
            iconLeft={
              <Icon
                name="person-outline"
                width={size}
                height={size}
                fill={colors['color-gray-500']}
              />
            }
            title="Your full name"
            placeholder="Enter your name"
            value={name.value}
            onChangeText={(value) => setName({ ...name, value })}
          />
        </Box>

        <Box width={width - 64}>
          <IconTextInput
            iconLeft={
              <Icon
                name="email-outline"
                width={size}
                height={size}
                fill={colors['color-gray-500']}
              />
            }
            title="Your email"
            placeholder="Enter your email"
            value={email.value}
            onChangeText={(value) => setEmail({ ...email, value })}
          />
        </Box>

        <Box width={width - 64}>
          <IconTextInput
            iconLeft={
              <Icon
                name="lock-outline"
                width={size}
                height={size}
                fill={colors['color-gray-500']}
              />
            }
            title="Your old password"
            placeholder="Enter your old password"
            value={password.value}
            onChangeText={(value) => setPassword({ ...password, value })}
          />
        </Box>

        <Box width={width - 64}>
          <IconTextInput
            iconLeft={
              <Icon
                name="lock-outline"
                width={size}
                height={size}
                fill={colors['color-gray-500']}
              />
            }
            title="Your new password"
            placeholder="Enter your new password"
            value={phoneNumber.value}
            onChangeText={(value) => setPhoneNumber({ ...phoneNumber, value })}
          />
        </Box>

        <Box width={width - 64}>
          <IconTextInput
            iconLeft={
              <Icon
                name="phone-outline"
                width={size}
                height={size}
                fill={colors['color-gray-500']}
              />
            }
            title="Your phone number"
            placeholder="Enter your phone number"
            value={phoneNumber.value}
            onChangeText={(value) => setPhoneNumber({ ...phoneNumber, value })}
          />
        </Box>

        <Box
          flex={1}
          flexDirection="row"
          paddingVertical={11}
          justifyContent="center"
          alignItems="flex-end"
        >
          <Button bg={bg} borderRadius={1}>
            <Text color="white" variant="p" paddingHorizontal={6} paddingVertical={3}>
              Done
            </Text>
          </Button>
        </Box>
      </ScrollView>
    </Box>
  )
}