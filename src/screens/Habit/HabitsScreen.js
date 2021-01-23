import React, { useState, useEffect, useRef } from 'react'
import { Alert, FlatList, Image, Dimensions, StyleSheet } from 'react-native'
import { Box } from '../../components'
import { getImage } from '../../theme/images'
import { colors } from '../../theme/color'
import { alert, arrayIsEmpty, objectIsNull } from '../../components/Function'
import IconText from './Custom/Header/IconText'
import Header from './Custom/Header/Header'
import Loading from '../../components/Loading'

const { width, height } = Dimensions.get('window')

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default function HabitsScreen(props) {
  const { title, idCategory } = props.route.params

  const prevProps = {
    dataGetHabits: usePrevious(props.dataGetHabits),
  }

  const [habits, setHabits] = useState([])

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      props.getHabitsAction()
    })

    return unsubscribe
  }, [props.navigation])

  useEffect(() => {
    if (!objectIsNull(props.dataGetHabits) && prevProps.dataGetHabits !== props.dataGetHabits) {
      if (!arrayIsEmpty(props.dataGetHabits)) {
        const list = props.dataGetHabits.data.filter((item) => item.idCategory === idCategory)
        setHabits(list)
      }
    }
  }, [props.dataGetHabits, props.dataDeleteCategory])

  const onDelete = () => {
    if (arrayIsEmpty(habits)) {
      alert('Bạn chắc có muốn xóa thể loại này?', () => {
        props.deleteCategoryAction(idCategory)
        props.navigation.navigate('CategoriesContainer')
      })
    } else {
      Alert.alert('Thông báo', 'Bạn không thể xóa thể loại này!')
    }
  }

  return (
    <Box flex={1} paddingLeft={8} paddingRight={8} paddingTop={5} backgroundColor="white">
      {/* HEADER */}
      <Header title={title} type="other" navigation={props.navigation} />

      {/* CONTENT */}
      {/* TITLE */}
      <IconText
        label="Tạo mới một thói quen"
        iconName="edit-outline"
        iconFill={colors['color-primary-500']}
        onPress={() =>
          Alert.alert(
            'Tùy chọn',
            'Chọn loại thói quen',
            [
              {
                text: 'Chỉ một lần',
                onPress: () =>
                  props.navigation.navigate('CreateNewHabitContainer', {
                    title,
                    idCategory,
                    type: 'Once',
                  }),
              },
              {
                text: 'Lặp lại',
                onPress: () =>
                  props.navigation.navigate('CreateNewHabitContainer', { title, idCategory }),
              },
            ],
            { cancelable: false },
          )
        }
      />
      <IconText
        label="Xóa thể loại này"
        iconName="trash-2-outline"
        iconFill={colors['color-danger-500']}
        onPress={onDelete}
        style={{ paddingTop: 0 }}
      />

      {/* LIST CATEGORY */}
      {/* TITLE */}
      <IconText label="Danh sách thói quen:" color="color-gray-400" paddingTop={0} />

      {/* LIST */}
      {props.fetchingGetHabits ? (
        <Loading />
      ) : (
        <Box height={height / 2}>
          <FlatList
            data={habits}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <IconText
                  label={item.title}
                  iconName={item.iconName}
                  iconFill={colors[item.iconFill]}
                  paddingTop={0}
                />
              )
            }}
          />
        </Box>
      )}

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
