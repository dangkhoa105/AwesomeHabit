import React, { useState, useEffect, useRef } from 'react'
import { Image, Dimensions, ScrollView, StyleSheet } from 'react-native'
import { Box, Text, Button } from '../../components'
import { objectIsNull } from '../../components/Function'
import { getImage } from '../../theme/images'
import Header from './Custom/Header/Header'
import Schedule from './Custom/Schedule'

const { width, height } = Dimensions.get('window')

export default function DetailScheduleScreen(props) {
  const [data, setData] = useState({})
  const { dataSelect } = props.route.params
  const prevProps = useRef({ dataCreateHabit: props.dataCreateHabit }).current

  const handleOnPressDone = () => {
    props.createHabitAction(Object.assign(data, dataSelect))
  }

  useEffect(() => {
    if (
      !objectIsNull(props.dataCreateHabit) &&
      prevProps.dataCreateHabit !== props.dataCreateHabit
    ) {
      if (props.dataCreateHabit.resultCode === 1) {
        props.navigation.navigate('HabitsContainer')
      }
    }
  }, [props.dataCreateHabit])

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Box flex={1} paddingHorizontal={8} pt={5} bg="white">
        {/* HEADER */}
        <Header title={'Detail Schedule'} type="other" navigation={props.navigation} />

        {/* SELECTIONS */}
        <Schedule getData={(value) => setData(value)} />

        {/* BUTTON */}
        <Box
          flex={1}
          flexDirection="row"
          paddingVertical={11}
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Image
            resizeMode="contain"
            style={styles.imgFooter}
            source={getImage.footer_detailSchedule}
          />
          <Button bg="color-primary-500" borderRadius={1} onPress={handleOnPressDone}>
            <Text color="white" variant="p" paddingHorizontal={6} paddingVertical={2}>
              Done
            </Text>
          </Button>
        </Box>
      </Box>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imgFooter: {
    height: width / 2 - 50,
    width: width / 2,
  },
})
