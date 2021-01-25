import React, { useState, useEffect, useRef } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { arrayIsEmpty, compareMoment, objectIsNull } from '../../components/Function'
import { checkTypeHabit, countDaysInMonth } from '../Home/Function'
import { colors } from '../../theme/color'
import moment from 'moment'
import CalendarHabit from './Customs/CalendarHabit'
import LineLog from './Customs/LineLog'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default function ReportScreen(props) {
  const [habits, setHabits] = useState([])
  const [month, setMonth] = useState(moment().format('MM'))
  const [perfectDates, setPerfectDates] = useState([])
  const [someDoneDates, setSomeDoneDates] = useState([])
  const [habitsDonePerfect, setHabitsDonePerfect] = useState(0)
  const [habitsDone, setHabitsDone] = useState(0)
  const prevProps = { dataGetHabits: usePrevious(props.dataGetHabits) }

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      props.getHabitsAction()
    })

    return unsubscribe
  }, [props.navigation])

  useEffect(() => {
    if (!objectIsNull(props.dataGetHabits) && prevProps.dataGetHabits !== props.dataGetHabits) {
      if (!arrayIsEmpty(props.dataGetHabits.data)) {
        setHabits(props.dataGetHabits.data)
      }
    }
  }, [props.dataGetHabits])

  useEffect(() => {
    const perfectDates = []
    const someDoneDates = []

    let countDonePerfect = 0
    let countDone = 0
    const counts = {}

    habits.map((v) => {
      if (!objectIsNull(v.checkins)) {
        const arrFilter = v.checkins.filter((item, i) => v.checkins.indexOf(item) === i)
        arrFilter.map((v) => {
          someDoneDates.push(moment(v).format('YYYY-MM-DD'))
        })
        countDone += arrFilter.filter((item) => month === moment(item).format('MM')).length
      }
    })

    someDoneDates.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1
    })

    for (let i = 1; i <= countDaysInMonth(moment().format('M'), moment().format('YYYY')); i++) {
      const tempt = habits.filter(
        (item) =>
          item.days.includes(moment().date(i).format('dddd')) &&
          checkTypeHabit(
            item.habitType,
            item.days,
            item.weeks,
            item.months,
            item.checkins,
            item.startDate,
            moment().date(i).format('YYYY-MM-DD'),
          ),
      )

      if (
        counts[moment().date(i).format('YYYY-MM-DD')] === tempt.length &&
        month === moment(i).format('MM')
      ) {
        perfectDates.push(moment().date(i).format('YYYY-MM-DD'))
        countDonePerfect++
      }
    }

    setHabitsDone(countDone)
    setPerfectDates(perfectDates)
    setHabitsDonePerfect(countDonePerfect)
    setSomeDoneDates(someDoneDates)
  }, [habits, month])

  const iconCheck = { name: 'checkmark-outline', size: 20, fill: colors['color-success-500'] }
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      <CalendarHabit
        someDoneDates={someDoneDates}
        perfectDates={perfectDates}
        getMonth={(value) => setMonth(value)}
      />
      <LineLog icon={iconCheck} content="Tổng số ngày hoàn hảo" value={habitsDonePerfect} />
      <LineLog icon={iconCheck} content="Tổng thói quen đã hoàn thành" value={habitsDone} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8FBFB',
    flexGrow: 1,
    padding: 24,
  },
})
