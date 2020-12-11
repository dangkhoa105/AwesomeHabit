import React, { useState, useEffect } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { Box, Text, Button } from '../../../components'
import OnDays from './Schedule/OnDays/OnDays'
import SelectionButton from './Schedule/SelectionButton'

const habitTypes = ['Daily', 'Weekly', 'Monthly']
const ats = ['Morning', 'Afternoon', 'Evening']

export default function Schedule({ getData }) {
  const [habitType, setHabitType] = useState('')
  const [days, setDays] = useState([])
  const [at, setAt] = useState('')

  useEffect(() => {
    getData({ habitType, days, at })
  }, [habitType, days, at])

  return (
    <Box contentContainerStyle={{ flexGrow: 1 }}>
      <SelectionButton
        title="Habit type"
        data={habitTypes}
        getValue={(value) => setHabitType(value)}
      />

      <OnDays getDays={(value) => setDays(value)} />

      <SelectionButton title="At" data={ats} getValue={(value) => setAt(value)} />
    </Box>
  )
}
