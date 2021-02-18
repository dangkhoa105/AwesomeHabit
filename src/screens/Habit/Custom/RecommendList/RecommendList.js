import React, { useEffect, useRef, useState } from 'react'
import { FlatList } from 'react-native'
import { Box } from '../../../../components'
import { arrayIsEmpty, objectIsNull } from '../../../../components/Function'
import Swiper from '../../../../components/Swiper'
import IconText from '../Header/IconText'
import Item from './Item'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default function RecommendList(props) {
  const [indexScroll, setIndexScroll] = useState('')
  const [dataGetRecommendations, setDataGetRecommendations] = useState([])
  const prevProps = { dataGetRecommendations: usePrevious(props.dataGetRecommendations) }

  useEffect(() => {
    if (
      !objectIsNull(props.dataGetRecommendations) &&
      prevProps.dataGetRecommendations !== props.dataGetRecommendations
    ) {
      setDataGetRecommendations(props.dataGetRecommendations)
    }
  }, [props.dataGetRecommendations])

  const renderItem = ({ item, index }) => (
    <Swiper
      index={index}
      indexScroll={indexScroll}
      setIndexScroll={(value) => setIndexScroll(value)}
    >
      <Item
        item={item}
        index={index}
        idCategory={props.idCategory}
        createHabitAction={(data) => props.createHabitAction(data)}
        dataCreateHabit={props.dataCreateHabit}
      />
    </Swiper>
  )

  return (
    <Box flex={1} marginVertical={4}>
      <IconText label="Danh sách thói quen gợi ý:" color="color-gray-400" paddingTop={0} />
      <FlatList
        data={dataGetRecommendations}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </Box>
  )
}
