import React from 'react'
import { Box, Text, Button } from '../../components'
import { colors } from '../../theme/color'
import auth from '@react-native-firebase/auth'
import IconText from '../Habit/Custom/Header/IconText'
import Header from '../Habit/Custom/Header/Header'

export default function ProfileScreen(props) {
  const { displayName, uid, email, phoneNumber } = auth().currentUser
  return (
    <Box flex={1} paddingLeft={8} paddingRight={8} paddingTop={5} backgroundColor="white">
      <Header title={'Your profile'} navigation={props.navigation} />

      <IconText
        label="Edit your profile"
        iconName="edit-outline"
        iconFill={colors['color-primary-500']}
        onPress={() => props.navigation.navigate('EditProfileContainer')}
      />

      <Box borderBottomWidth={0.25}>
        <IconText label="Your user id:" color="color-gray-400" paddingTop={0} />
        <Text pb={2}>{uid}</Text>
      </Box>

      <Box borderBottomWidth={0.25}>
        <IconText label="Your full name:" color="color-gray-400" />
        <Text pb={2}>{displayName}</Text>
      </Box>

      <Box borderBottomWidth={0.25}>
        <IconText label="Your email:" color="color-gray-400" />
        <Text pb={2}>{email}</Text>
      </Box>

      <Box borderBottomWidth={0.25}>
        <IconText label="Your phone number:" color="color-gray-400" />
        <Text pb={2}>{phoneNumber}</Text>
      </Box>
    </Box>
  )
}
