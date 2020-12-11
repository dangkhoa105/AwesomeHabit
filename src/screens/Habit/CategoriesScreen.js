import React from 'react'
import { FlatList, Image, Dimensions, StyleSheet } from 'react-native'
import { Box, Text, Button } from '../../components'
import { getImage } from '../../theme/images'
import IconText from './Custom/Header/IconText'
import Header from './Custom/Header/Header'

const { width, height } = Dimensions.get('window')

const DataCategories = [
  { title: 'Healthy', iconName: 'heart-outline', iconFill: '#DC2626' },
  { title: 'Learning', iconName: 'browser-outline', iconFill: '#60A5FA' },
  { title: 'Chore', iconName: 'star-outline', iconFill: '#F59E0B' },
  { title: 'Hobbies', iconName: 'award-outline', iconFill: '#34D399' },
  { title: 'Social', iconName: 'camera-outline', iconFill: '#EC4899' },
]

export default function CategoriesScreen({ route, navigation }) {
  return (
    <Box flex={1} paddingLeft={8} paddingRight={8} paddingTop={5} backgroundColor="white">
      {/* HEADER */}
      <Header title="Choose the category" navigation={navigation} />

      {/* CONTENT */}
      {/* TITLE */}
      <IconText
        label="Create a custom category"
        iconName="edit-outline"
        iconFill="#9570FF"
        onPress={() => navigation.navigate('CreateNewCategoryContainer')}
      />

      {/* LIST CATEGORY */}
      {/* TITLE */}
      <IconText label="Popular categories:" color="color-gray-400" paddingTop={0} />

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
                onPress={() => navigation.navigate('CategoryContainer', { title: item.title })}
              />
            )
          }}
        />
      </Box>

      {/* IMAGE */}
      <Box position="absolute" bottom={45} left={(width * 144) / 375}>
        <Image resizeMode="contain" style={styles.imgFooter} source={getImage.footer_categories} />
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  imgFooter: {
    height: 200,
    width: 280,
  },
})
