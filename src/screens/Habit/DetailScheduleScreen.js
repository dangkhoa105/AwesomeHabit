import React, { useState, useEffect } from 'react'
import { Image, Dimensions, ScrollView, StyleSheet } from 'react-native'
import { Box, Text, Button } from '../../components'
import { getImage } from '../../theme/images'
import Header from './Custom/Header/Header'
import Schedule from './Custom/Schedule'

const { width, height } = Dimensions.get('window')

export default function DetailScheduleScreen({ navigation, route }) {
  const [data, setData] = useState({})
  const { dataSelect } = route.params

  const handleOnPressDone = () => {
    console.log(Object.assign(data, dataSelect))
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Box flex={1} paddingHorizontal={8} pt={5} bg="white">
        {/* HEADER */}
        <Header title={'Detail Schedule'} type="other" navigation={navigation} />

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
