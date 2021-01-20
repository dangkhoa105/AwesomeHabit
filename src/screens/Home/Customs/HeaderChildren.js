import React, { useState } from 'react'
import { Image } from 'react-native'
import { Box, Text } from '../../../components'
import { objectIsNull } from '../../../components/Function'
import { getImage } from '../../../theme/images'
import { fonts } from '../../../theme/theme'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import moment from 'moment'

export default function HeaderChildren() {
  const [habits, setHabits] = useState([])
  const user = auth().currentUser
  let name = ''

  if (user) {
    database()
      .ref(`/users/${user.uid}/habits`)
      .once('value')
      .then((snapshot) => {
        if (!objectIsNull(snapshot.val())) {
          const tempt = Object.values(snapshot.val())
          setHabits(
            tempt.filter((item) => {
              return item.days.includes(moment().format('dddd'))
            }),
          )
        }
      })

    name = user.displayName.split(' ')[user.displayName.split(' ').length - 1]
  }

  return (
    <Box flex={1} justifyContent="center" paddingHorizontal={4}>
      <Image
        resizeMode="contain"
        source={getImage.header_home}
        style={{ width: '140%', height: '80%' }}
      />
      <Box position="absolute" paddingHorizontal={4}>
        <Text color="white" variant="h3medium" fontFamily={fonts.regular}>
          Hi,{' '}
          <Text color="white" variant="h3bold">
            {name}
          </Text>
        </Text>
        <Text variant="p" color="white" pt={3}>
          You have{' '}
          <Text color="color-danger-300" variant="h3medium">
            {habits.length}
          </Text>{' '}
          Journals today
        </Text>
      </Box>
    </Box>
  )
}
