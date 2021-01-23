import React, { useState, useEffect, useRef } from 'react'
import { Box } from '../../../components'
import moment from 'moment'
import OnDays from './Schedule/OnDays/OnDays'
import SelectionButton from './Schedule/SelectionButton'
import TimePicker from './Schedule/TimePicker/TimePicker'

const habitTypes = ['Daily', 'Weekly', 'Monthly']
const onWeeks = [1, 2, 3, 4, 5, 6]
const onMonths = ['Begin', 'Middle', 'End']
const daily = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default function Schedule({ type, getData }) {
  const [habitType, setHabitType] = useState('')
  const [days, setDays] = useState([])
  const [weeks, setWeeks] = useState('')
  const [months, setMonths] = useState('')
  const [times, setTimes] = useState([])

  const prevStates = usePrevious(habitType)

  useEffect(() => {
    if (prevStates !== habitType) {
      setDays([])
      setWeeks('')
      setMonths('')
    }
    const habitTypeTempt = type !== 'Once' ? habitType : 'Once'
    let daysTempt = []

    if (type !== 'Once') {
      if (habitType === 'Daily') {
        daysTempt = days
      } else if (habitType === 'Weekly') {
        daysTempt = daily
      } else {
        const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
        const curYear = moment().format('YYYY')
        const tempt = []
        if (months === 'Begin') {
          month.map((v) => {
            tempt.push(moment(`${curYear}-${v}`).startOf('month').format('dddd'))
          })
        } else if (months === 'Middle') {
          month.map((v) => {
            tempt.push(moment(`${curYear}-${v}-15`).format('dddd'))
          })
        } else {
          month.map((v) => {
            tempt.push(moment(`${curYear}-${v}`).endOf('month').format('dddd'))
          })
        }

        daysTempt = tempt.filter((v, i) => tempt.indexOf(v) === i)
      }
    } else {
      daysTempt = moment(new Date(times[0])).format('dddd')
    }

    getData({
      habitType: habitTypeTempt,
      days: daysTempt,
      weeks,
      months,
      startDate: `${new Date()}`,
      times,
    })
  }, [habitType, days, weeks, months, times])

  return (
    <Box contentContainerStyle={{ flexGrow: 1 }}>
      {type !== 'Once' && (
        <SelectionButton
          title="Loại thói quen"
          data={habitTypes}
          getValue={(value) => setHabitType(value)}
        />
      )}

      {habitType === 'Daily' && type !== 'Once' && <OnDays getDays={(value) => setDays(value)} />}

      {habitType === 'Weekly' && type !== 'Once' && (
        <SelectionButton
          title="Số lần trong tuần"
          data={onWeeks}
          getValue={(value) => setWeeks(value)}
        />
      )}

      {habitType === 'Monthly' && type !== 'Once' && (
        <SelectionButton
          title="Vào ngày trong tháng"
          data={onMonths}
          getValue={(value) => setMonths(value)}
        />
      )}

      <TimePicker getValue={(value) => setTimes(value)} />
    </Box>
  )
}
