import React, { useState, useEffect, useRef } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Box, Text } from '../../components'
import { calRatio, checkTypeHabit, handleAlertRatio } from './Function'
import { alert, arrayIsEmpty, compareMoment, objectIsNull } from '../../components/Function'
import ItemHabit from './Customs/ItemHabit'
import Loading from '../../components/Loading'
import Swiper from '../../components/Swiper'
import Calender from './Customs/Calender'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default function HomeScreen(props) {
  const [habits, setHabits] = useState([])
  const [keys, setKeys] = useState([])
  const [ratio, setRatio] = useState(0)
  const [daySelect, setDaySelect] = useState(new Date())

  const [indexSelected, setIndexSelected] = useState('')
  const [indexScroll, setIndexScroll] = useState('')
  const prevProps = {
    dataGetHabits: usePrevious(props.dataGetHabits),
    dataDeleteHabit: usePrevious(props.dataDeleteHabit),
  }

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      props.getHabitsAction()
    })

    return unsubscribe
  }, [props.navigation])

  useEffect(() => {
    if (!objectIsNull(props.dataGetHabits) && prevProps.dataGetHabits !== props.dataGetHabits) {
      props.dataGetHabits.data.map((v) => {
        setHabits(props.dataGetHabits.data)
        setKeys(props.dataGetHabits.keys)
      })
    }

    if (
      !objectIsNull(props.dataDeleteHabit) &&
      prevProps.dataDeleteHabit !== props.dataDeleteHabit
    ) {
      if (props.dataDeleteHabit.resultCode === 1) {
        alert('You deleted this habit')
        props.getHabitsAction()
      }
    }
  }, [props.dataGetHabits, props.dataDeleteHabit])

  useEffect(() => {
    setRatio(calRatio(habits))
    if (!objectIsNull(habits[indexSelected])) {
      if (!arrayIsEmpty(habits[indexSelected].checkins)) {
        const arrFilter = habits[indexSelected].checkins.filter(
          (v, i) => habits[indexSelected].checkins.indexOf(v) === i,
        )
        props.updateCheckinsHabitAction(keys[indexSelected], arrFilter)
      }
    }
  }, [ratio, habits])

  const onChangeValueItem = (value, index) => {
    const newArr = [...habits] // copying the old datas array
    newArr[index] = value // replace value with whatever you want to change it to
    setIndexSelected(index)
    setHabits(newArr)
  }

  const onDelete = (id) => {
    alert('Are you sure you want to delete?', () => props.deleteHabitAction(id))
  }

  const showRatio = !isNaN(ratio) ? ratio + '%' : ''

  return (
    <Box style={styles.container}>
      <Calender getHabitsAction={props.getHabitsAction} getDaySelect={(day) => setDaySelect(day)} />

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
          style={{ paddingHorizontal: 22 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          onScroll={() => setIndexScroll('')}
          renderItem={({ item, index }) => {
            if (checkTypeHabit(item.habitType, item.days, item.startDate, daySelect)) {
              return (
                <Swiper
                  index={index}
                  indexScroll={indexScroll}
                  setIndexScroll={(value) => setIndexScroll(value)}
                >
                  <ItemHabit
                    item={item}
                    index={index}
                    daySelect={daySelect}
                    onChangeValue={(value, index) => onChangeValueItem(value, index)}
                    keys={keys}
                    onDelete={(id) => onDelete(id)}
                  />
                </Swiper>
              )
            }
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
    // paddingHorizontal: 22,
  },
  header: {
    borderBottomColor: '#9CA3AF',
    borderBottomWidth: 0.5,
    paddingBottom: 20,
    marginHorizontal: 22,
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
