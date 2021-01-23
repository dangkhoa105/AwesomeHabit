import React, { useState, useEffect, useRef } from 'react'
import { Modal, FlatList, Image, Dimensions, StyleSheet, Alert } from 'react-native'
import { Box, Text, Button } from '../../components'
import { getImage } from '../../theme/images'
import { colors } from '../../theme/color'
import { objectIsNull } from '../../components/Function'
import IconText from './Custom/Header/IconText'
import Header from './Custom/Header/Header'
import Loading from '../../components/Loading'

const { width, height } = Dimensions.get('window')

export default function CategoriesScreen(props) {
  const [categories, setCategories] = useState([])

  const prevProps = useRef({ dataGetCategories: props.dataGetCategories }).current

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      props.getCategoriesAction()
    })

    return unsubscribe
  }, [props.navigation])

  useEffect(() => {
    if (
      !objectIsNull(props.dataGetCategories) &&
      prevProps.dataGetCategories !== props.dataGetCategories
    ) {
      setCategories(props.dataGetCategories)
    }
  }, [props.dataGetCategories])

  return (
    <Box flex={1} paddingLeft={8} paddingRight={8} paddingTop={5} backgroundColor="white">
      {/* HEADER */}
      <Header title="Chọn thể loại" navigation={props.navigation} />

      {/* CONTENT */}
      {/* TITLE */}
      <IconText
        label="Tạo một thể loại mới"
        iconName="edit-outline"
        iconFill={colors['color-primary-500']}
        onPress={() => props.navigation.navigate('CreateNewCategoryContainer')}
      />

      {/* LIST CATEGORY */}
      {/* TITLE */}
      <IconText label="Danh sách thể loại:" color="color-gray-400" paddingTop={0} />

      {/* LIST */}
      {props.fetchingGetCategories ? (
        <Loading />
      ) : (
        <Box height={height / 2}>
          <FlatList
            data={categories}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <IconText
                  label={item.title}
                  iconName={item.iconName}
                  iconFill={colors[item.iconFill]}
                  paddingTop={0}
                  onPress={() =>
                    props.navigation.navigate('HabitsContainer', {
                      title: item.title,
                      idCategory: item.id,
                    })
                  }
                />
              )
            }}
          />
        </Box>
      )}

      {/* IMAGE */}
      <Box position="absolute" bottom={45} left={(width * 120) / 375}>
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
