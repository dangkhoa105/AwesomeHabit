import React, { useState } from 'react'
import { Box, Text, Button } from '../../../components'
import { Calendar } from 'react-native-calendars'
import { colors } from '../../../theme/color'
import moment from 'moment'
import _ from 'lodash'

export default function CalendarHabit(props) {
  const convertToMarkedDates = (Dates, stylesMarked) => {
    const markedDates = {}
    _.forEach(Dates, (date) => {
      markedDates[date] = stylesMarked
    })
    return markedDates
  }

  const someDoneDates = convertToMarkedDates(props.someDoneDates, stylesMarkedDate.someDone)
  const perfectDates = convertToMarkedDates(props.perfectDates, stylesMarkedDate.perfect)

  const lifeLogDates = { ...someDoneDates, ...perfectDates }

  return (
    <Box elevation={4}>
      <Calendar
        markedDates={lifeLogDates}
        markingType="custom"
        firstDay={1}
        onMonthChange={(month) => props.getMonth(moment(month.dateString).format('MM'))}
      />
    </Box>
  )
}

const stylesMarkedDate = {
  someDone: {
    customStyles: {
      container: {
        backgroundColor: 'transparent',
        borderColor: colors['color-primary-500'],
        borderWidth: 2,
      },
    },
  },
  perfect: {
    customStyles: {
      container: {
        backgroundColor: colors['color-primary-500'],
      },
    },
  },
}
