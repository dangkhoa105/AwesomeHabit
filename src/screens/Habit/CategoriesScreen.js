import React from 'react'
import { FlatList, Image, Dimensions, StyleSheet } from 'react-native'
import { Box } from '../../components/box/Box'
import IconText from './Custom/IconText'
import Header from './Custom/Header'

const DataCategories = [
  { title: 'Healthy', iconName: 'heart-outline', iconFill: '#DC2626' },
  { title: 'Learning', iconName: 'browser-outline', iconFill: '#60A5FA' },
  { title: 'Chore', iconName: 'star-outline', iconFill: '#F59E0B' },
  { title: 'Hobbies', iconName: 'award-outline', iconFill: '#34D399' },
  { title: 'Social', iconName: 'camera-outline', iconFill: '#EC4899' },
]

export default function CategoriesScreen({ route, navigation }) {
  return (
    <Box flex={1} paddingHorizontal={4} paddingTop={4}>
      {/* HEADER */}
      <Header title="Choose the category" navigation={navigation} />

      {/* CONTENT */}
      {/* TITLE */}
      <IconText label="Create a custom category" iconName="edit-outline" iconFill="#9570FF" />

      {/* LIST CATEGORY */}
      {/* TITLE */}
      <IconText label="Popular categories:" color="color-gray-400" paddingTop={0} />

      {/* IMAGE */}
      <Box position="absolute" bottom={20} right={-30}>
        <Image
          resizeMode="contain"
          style={styles.imgFooter}
          source={require('../../theme/images/footer_categories.png')}
        />
      </Box>

      {/* LIST */}
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
  )
}

const styles = StyleSheet.create({
  imgFooter: {
    height: Dimensions.get('window').width / 2,
    width: Dimensions.get('window').width / 2 + 100,
  },
})
