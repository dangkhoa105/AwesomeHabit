import React, { useState, useEffect, useRef } from 'react'
import { Image } from 'react-native'
import { Box, Text } from '../../../components'
import { objectIsNull } from '../../../components/Function'
import { getImage } from '../../../theme/images'
import { calRatio } from '../../Home/Function'

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
  const prevProps = { dataGetHabits: usePrevious(props.dataGetHabits) }

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      props.getHabitsAction()
    })

    return unsubscribe
  }, [props.navigation])

  useEffect(() => {
    if (!objectIsNull(props.dataGetHabits) && prevProps.dataGetHabits !== props.dataGetHabits) {
      setHabits(props.dataGetHabits.data)
    }
  }, [props.dataGetHabits])

  useEffect(() => {
    setRatio(calRatio(habits))
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
