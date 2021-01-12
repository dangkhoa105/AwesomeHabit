import React, { useState, useEffect, useRef } from 'react'
import { Box } from '../../../components'
import { stringIsEmpty } from '../../../components/Function'
import OnDays from './Schedule/OnDays/OnDays'
import SelectionButton from './Schedule/SelectionButton'
import TimePicker from './Schedule/TimePicker/TimePicker'

const habitTypes = ['Daily', 'Weekly', 'Monthly']
const onWeeks = [1, 2, 3, 4, 5, 6]
const onMonths = ['Begin', 'Middle', 'End']

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
    getData({ habitType, days, weeks, months, times })
  }, [habitType, days, weeks, months, times])

  return (
    <Box contentContainerStyle={{ flexGrow: 1 }}>
      {type !== 'Once' && (
        <SelectionButton
          title="Habit type"
          data={habitTypes}
          getValue={(value) => setHabitType(value)}
        />
      )}

      {habitType === 'Daily' && type !== 'Once' && <OnDays getDays={(value) => setDays(value)} />}

      {habitType === 'Weekly' && type !== 'Once' && (
        <SelectionButton title="On weeks" data={onWeeks} getValue={(value) => setWeeks(value)} />
      )}

      {habitType === 'Monthly' && type !== 'Once' && (
        <SelectionButton title="On months" data={onMonths} getValue={(value) => setMonths(value)} />
      )}

      <TimePicker getValue={(value) => setTimes(value)} />
    </Box>
  )
}
