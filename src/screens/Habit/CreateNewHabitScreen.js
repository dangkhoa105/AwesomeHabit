import React, { useState, useEffect } from 'react'
import { alert } from '../../components/Function'
import CreateScreen from './Custom/CreateScreen'

export default function CreateNewHabitScreen({ navigation, route }) {
  const [value, setValue] = useState(null)

  return (
    <CreateScreen
      type="habit"
      navigation={navigation}
      getValue={(value) => setValue(value)}
      onPressNext={() =>
        navigation.navigate('DetailScheduleContainer', {
          dataSelect: { ...value, idCategory: route.params.idCategory, check: false },
          title: route.params.title,
          type: route.params.type,
        })
      }
    />
  )
}
