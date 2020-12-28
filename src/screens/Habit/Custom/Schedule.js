import React, { useState, useEffect } from 'react'
import { Box } from '../../../components'
import OnDays from './Schedule/OnDays/OnDays'
import SelectionButton from './Schedule/SelectionButton'
import TimePicker from './Schedule/TimePicker/TimePicker'

const habitTypes = ['Daily', 'Weekly', 'Monthly']
const ats = ['Morning', 'Afternoon', 'Evening']

export default function Schedule({ getData }) {
  const [habitType, setHabitType] = useState('')
  const [days, setDays] = useState([])
  const [at, setAt] = useState('')
  const [times, setTimes] = useState([])

  useEffect(() => {
    getData({ habitType, days, at, times })
  }, [habitType, days, at, times])

  return (
    <Box contentContainerStyle={{ flexGrow: 1 }}>
      <SelectionButton
        title="Habit type"
        data={habitTypes}
        getValue={(value) => setHabitType(value)}
      />

      <OnDays getDays={(value) => setDays(value)} />

      <SelectionButton title="At" data={ats} getValue={(value) => setAt(value)} />

      <TimePicker getValue={(value) => setTimes(value)} />
    </Box>
  )
}
