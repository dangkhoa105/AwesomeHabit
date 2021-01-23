import React, { useState, useEffect, useRef } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Box, Text, Button } from '../../components'
import { colors } from '../../theme/color'
import { alert, objectIsNull } from '../../components/Function'
import { checkConditionUpdateHabit } from './Function'
import ColorPicker from './Custom/ColorPicker/ColorPicker'
import Header from './Custom/Header/Header'
import IconPicker from './Custom/IconPicker/IconPicker'
import OnDays from './Custom/Schedule/OnDays/OnDays'
import SelectionButton from './Custom/Schedule/SelectionButton'
import TimePicker from './Custom/Schedule/TimePicker/TimePicker'

const onWeeks = [1, 2, 3, 4, 5, 6]
const onMonths = ['Begin', 'Middle', 'End']

export default function DetailHabitScreen(props) {
  const { id, habit } = props.route.params
  const [select, setSelect] = useState({
    title: habit.title,
    iconFill: habit.iconFill,
    iconName: habit.iconName,
  })
  const [days, setDays] = useState(habit.days)
  const [weeks, setWeeks] = useState(habit.weeks)
  const [months, setMonths] = useState(habit.months)
  const [times, setTimes] = useState(habit.times)
  const prevProps = useRef({ dataUpdateHabit: props.dataUpdateHabit }).current

  useEffect(() => {
    if (
      !objectIsNull(props.dataUpdateHabit) &&
      props.dataUpdateHabit !== prevProps.dataUpdateHabit
    ) {
      if (props.dataUpdateHabit.resultCode === 1) {
        alert('Cập nhật habit thành công')
        props.navigation.navigate('Tab')
      }
    }
  }, [props.dataUpdateHabit])

  const handleOnPressUpdate = () => {
    props.updateHabitAction(id, {
      title: select.title,
      iconFill: select.iconFill,
      iconName: select.iconName,
      days,
      weeks,
      months,
      times,
    })
  }

  const bg = checkConditionUpdateHabit(
    { title: select.title, days: days, weeks: weeks, months: months, times: times },
    habit.habitType,
  )
    ? 'color-primary-500'
    : 'color-primary-200'

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <Box flex={1} paddingHorizontal={8} pt={5} bg="white">
        <Header title={'Detail habit'} navigation={props.navigation} />

        <Box pt={8}>
          <Text pb={2}>Habit name:</Text>
          <TextInput
            value={select.title}
            style={styles.textInput}
            onChangeText={(value) => setSelect({ ...select, title: value })}
          />
        </Box>

        <ColorPicker
          value={select.iconFill}
          onSelectColor={(value) => setSelect({ ...select, iconFill: value })}
        />

        <IconPicker
          value={select.iconName}
          onSelectIcon={(value) => setSelect({ ...select, iconName: value })}
        />

        {habit.habitType !== 'Once' && (
          <Text>
            Habit type:{' '}
            <Text variant="p" fontWeight="bold" color="background-primary-1">
              {habit.habitType}
            </Text>
          </Text>
        )}

        {habit.habitType === 'Daily' && <OnDays value={days} getDays={(value) => setDays(value)} />}

        {habit.habitType === 'Weekly' && (
          <SelectionButton
            title="On weeks"
            data={onWeeks}
            value={weeks}
            getValue={(value) => setWeeks(value)}
          />
        )}

        {habit.habitType === 'Monthly' && (
          <SelectionButton
            title="On months"
            data={onMonths}
            value={months}
            getValue={(value) => setMonths(value)}
          />
        )}

        <TimePicker value={times} getValue={(value) => setTimes(value)} />

        <Box flexDirection="row" paddingVertical={11} justifyContent="flex-end">
          <Button
            bg={bg}
            borderRadius={1}
            onPress={() =>
              checkConditionUpdateHabit(
                { title: select.title, days: days, weeks: weeks, months: months, times: times },
                habit.habitType,
              )
                ? handleOnPressUpdate()
                : {}
            }
          >
            <Text color="white" variant="p" paddingHorizontal={6} paddingVertical={2}>
              Update
            </Text>
          </Button>
        </Box>
      </Box>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors['color-gray-100'],
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
})
