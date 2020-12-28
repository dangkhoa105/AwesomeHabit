import React from 'react'
import { FlatList, Image, Dimensions, StyleSheet } from 'react-native'
import { Box, Text, Button } from '../../components'
import { getImage } from '../../theme/images'
import IconText from './Custom/Header/IconText'
import Header from './Custom/Header/Header'

const { width, height } = Dimensions.get('window')

const DataCategories = [
  { title: 'Hit the gym', iconName: 'heart-outline', iconFill: '#DC2626' },
  { title: 'Go for a walk', iconName: 'browser-outline', iconFill: '#60A5FA' },
  { title: 'Go for a run', iconName: 'star-outline', iconFill: '#F59E0B' },
  { title: 'Play some sport', iconName: 'award-outline', iconFill: '#34D399' },
  { title: 'Go for a ride', iconName: 'camera-outline', iconFill: '#EC4899' },
  { title: 'Hit the gym', iconName: 'heart-outline', iconFill: '#DC2626' },
  { title: 'Go for a walk', iconName: 'browser-outline', iconFill: '#60A5FA' },
  { title: 'Go for a run', iconName: 'star-outline', iconFill: '#F59E0B' },
  { title: 'Play some sport', iconName: 'award-outline', iconFill: '#34D399' },
  { title: 'Go for a ride', iconName: 'camera-outline', iconFill: '#EC4899' },
  { title: 'Hit the gym', iconName: 'heart-outline', iconFill: '#DC2626' },
  { title: 'Go for a walk', iconName: 'browser-outline', iconFill: '#60A5FA' },
  { title: 'Go for a run', iconName: 'star-outline', iconFill: '#F59E0B' },
  { title: 'Play some sport', iconName: 'award-outline', iconFill: '#34D399' },
  { title: 'Go for a ride', iconName: 'camera-outline', iconFill: '#EC4899' },
]

export default function HabitsScreen({ route, navigation }) {
  const { title } = route.params
  return (
    <Box flex={1} paddingLeft={8} paddingRight={8} paddingTop={5} backgroundColor="white">
      {/* HEADER */}
      <Header title={title} type="other" navigation={navigation} />

      {/* CONTENT */}
      {/* TITLE */}
      <IconText
        label="Create a custom habit"
        iconName="edit-outline"
        iconFill="#9570FF"
        onPress={() => navigation.navigate('CreateNewHabitContainer')}
      />

      {/* LIST CATEGORY */}
      {/* TITLE */}
      <IconText label="Popular healthy habit:" color="color-gray-400" paddingTop={0} />

      {/* LIST */}
      <Box height={height / 2}>
        <FlatList
          data={DataCategories}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <IconText
                label={item.title}
                iconName={item.iconName}
                iconFill={item.iconFill}
                paddingTop={0}
                onPress={() => console.log('aa')}
              />
            )
          }}
        />
      </Box>

      {/* IMAGE */}
      <Box position="absolute" bottom={30} right={20}>
        <Image resizeMode="contain" style={styles.imgFooter} source={getImage.footer_category} />
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  imgFooter: {
    height: width / 2,
    width: width / 2 + 100,
  },
})
