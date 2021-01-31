import React, { useState, useEffect, useRef } from 'react'
import { Alert, FlatList, Image, Dimensions, StyleSheet } from 'react-native'
import { Box, Text, Button } from '../../components'
import { getImage } from '../../theme/images'
import { colors } from '../../theme/color'
import { fonts } from '../../theme/theme'
import { alert, arrayIsEmpty, objectIsNull } from '../../components/Function'
import IconText from './Custom/Header/IconText'
import Header from './Custom/Header/Header'
import Loading from '../../components/Loading'
import RecommendList from './Custom/RecommendList/RecommendList'
import BottomSheet from '../../components/BottomSheet'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import ItemBottomSheet from './Custom/ItemBottomSheet'

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
  const [isShowModal, setIsShowModal] = useState(false)
  const [habits, setHabits] = useState([])
  const prevProps = {
    dataGetHabits: usePrevious(props.dataGetHabits),
    dataCreateHabit: usePrevious(props.dataCreateHabit),
  }

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      props.getHabitsAction()
      props.getRecommendationsAction()
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

    if (
      !objectIsNull(props.dataCreateHabit) &&
      prevProps.dataCreateHabit !== props.dataCreateHabit
    ) {
      if (props.dataCreateHabit.resultCode === 1) {
        props.getHabitsAction()
      }
    }
  }, [props.dataGetHabits, props.dataCreateHabit])

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

  const onPressType = (type) => {
    if (type) {
      props.navigation.navigate('CreateNewHabitContainer', {
        title,
        idCategory,
        type: 'Once',
      })
    } else {
      props.navigation.navigate('CreateNewHabitContainer', {
        title,
        idCategory,
      })
    }
    setIsShowModal(false)
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
        onPress={() => setIsShowModal(true)}
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
        <Box height={height / 3}>
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

      <RecommendList
        dataGetRecommendations={props.dataGetRecommendations}
        idCategory={idCategory}
        createHabitAction={(data) => props.createHabitAction(data)}
      />

      <BottomSheet isShowModal={isShowModal}>
        <Button flex={1} onPress={() => setIsShowModal(false)} />
        <ItemBottomSheet
          onPressType={(type) => onPressType(type)}
          setIsShowModal={(value) => setIsShowModal(value)}
        />
      </BottomSheet>

      {/* IMAGE */}
      <Box position="absolute" bottom={30} right={-10} opacity={0.7} zIndex={-1}>
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
