import React, { useState, useEffect, useRef } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Box, Text, Button } from '../../components'
import { calRatio, handleAlertRatio } from './Function'
import { objectIsNull, stringIsEmpty } from '../../components/Function'
import ItemHabit from './Customs/ItemHabit'
import Loading from '../../components/Loading'

export default function HomeScreen(props) {
  const [habits, setHabits] = useState([])
  const [ratio, setRatio] = useState(0)
  const prevProps = useRef({ dataGetHabits: props.dataGetHabits }).current

  useEffect(() => {
    props.getHabitsAction()
  }, [])

  useEffect(() => {
    if (!objectIsNull(props.dataGetHabits) && prevProps.dataGetHabits !== props.dataGetHabits) {
      setHabits(props.dataGetHabits)
    }
  }, [props.dataGetHabits])

  useEffect(() => {
    setRatio(calRatio(habits))
  }, [ratio, habits])

  const onChangeValueItem = (value, index) => {
    const newArr = [...habits] // copying the old datas array
    newArr[index] = value // replace value with whatever you want to change it to

    setHabits(newArr)
  }

  const showRatio = !isNaN(ratio) ? ratio + '%' : ''

  return (
    <Box style={styles.container}>
      {/* HEADER */}
      {props.fetchingGetHabits ? (
        <Loading />
      ) : (
        <Box style={styles.header}>
          {/* TITLE HEADER */}
          <Box style={styles.titleHeader}>
            <Text variant="p" style={[styles.txtTitleHeader, { width: '80%' }]}>
              {handleAlertRatio(ratio)}
            </Text>
            <Text variant="p" style={[styles.txtTitleHeader, { width: '20%' }]} textAlign="right">
              {showRatio}
            </Text>
          </Box>

          {/* RATIO */}
          <Box style={styles.ratioHeader}>
            <Box style={[styles.ratioInfo, { width: `${ratio}%` }]} />
          </Box>
        </Box>
      )}

      {/* CONTENT */}
      {props.fetchingGetHabits ? (
        <Loading />
      ) : (
        <FlatList
          data={habits}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ItemHabit
                item={item}
                index={index}
                onChangeValue={(value, index) => onChangeValueItem(value, index)}
              />
            )
          }}
        />
      )}
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8FBFB',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    paddingHorizontal: 22,
  },
  header: {
    borderBottomColor: '#9CA3AF',
    borderBottomWidth: 0.5,
    paddingBottom: 20,
  },
  titleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingHorizontal: 7,
    paddingVertical: 16,
  },
  txtTitleHeader: {
    color: '#91A7AD',
    fontSize: 12,
    fontWeight: '500',
  },
  ratioHeader: {
    backgroundColor: '#E8F1F4',
    borderRadius: 16,
    flexDirection: 'row',
    height: 8,
  },
  ratioInfo: {
    backgroundColor: '#FF79C9',
    borderRadius: 16,
    height: 8,
  },
})
