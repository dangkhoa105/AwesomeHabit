import React, { useState, useEffect } from 'react'
import CreateScreen from './Custom/CreateScreen'

export default function CreateNewHabitScreen({ navigation }) {
  const [value, setValue] = useState(null)

  return <CreateScreen type="habit" navigation={navigation} getValue={(value) => setValue(value)} />
}
