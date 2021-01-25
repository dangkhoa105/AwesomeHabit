import React, { useState, useEffect, useRef } from 'react'
import { Image } from 'react-native'
import { Box, Text } from '../../../components'
import { arrayIsEmpty, objectIsNull } from '../../../components/Function'
import { getImage } from '../../../theme/images'
import { calRatio, checkTypeHabit } from '../../Home/Function'
import moment from 'moment'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default function HeaderChildren(props) {
  const [habits, setHabits] = useState([])
  const [ratio, setRatio] = useState(0)
  const prevProps = useRef({ dataGetHabits: props.dataGetHabits }).current

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      props.getHabitsAction()
    })

    return unsubscribe
  }, [props.navigation])

  useEffect(() => {
    if (!objectIsNull(props.dataGetHabits) && prevProps.dataGetHabits !== props.dataGetHabits) {
      if (!arrayIsEmpty(props.dataGetHabits.data)) {
        setHabits(
          props.dataGetHabits.data.filter(
            (item) =>
              item.days.includes(moment().format('dddd')) &&
              checkTypeHabit(
                item.habitType,
                item.days,
                item.weeks,
                item.months,
                item.checkins,
                item.startDate,
                moment().format('YYYY-MM-DD'),
              ),
          ),
        )
      }
    }
  }, [props.dataGetHabits])

  useEffect(() => {
    setRatio(calRatio(habits, moment()))
  }, [ratio, habits])

  const showRatio = !isNaN(ratio) ? ratio + '%' : ''

  return (
    <Box flex={1} justifyContent="center" paddingHorizontal={4}>
      <Image
        resizeMode="contain"
        source={getImage.header_report}
        style={{ width: '150%', height: '80%' }}
      />
      <Box position="absolute" paddingHorizontal={4}>
        <Text color="white" variant="h2Medium">
          {showRatio}
        </Text>
        {!isNaN(ratio) && (
          <Text color="white" variant="h3">
            Thói quen hôm nay
          </Text>
        )}
      </Box>
    </Box>
  )
}
