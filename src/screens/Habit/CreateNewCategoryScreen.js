import React, { useState, useEffect } from 'react'
import CreateScreen from './Custom/CreateScreen'

export default function CreateNewCategoryScreen({ navigation }) {
  const [value, setValue] = useState(null)

  return (
    <CreateScreen type="category" navigation={navigation} getValue={(value) => setValue(value)} />
  )
}
