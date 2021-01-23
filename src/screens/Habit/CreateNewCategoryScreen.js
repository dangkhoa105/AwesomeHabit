import React, { useState, useEffect, useRef } from 'react'
import { objectIsNull } from '../../components/Function'
import CreateScreen from './Custom/CreateScreen'

export default function CreateNewCategoryScreen(props) {
  const [value, setValue] = useState(null)
  const prevProps = useRef({ dataCreateCategory: props.dataCreateCategory }).current

  useEffect(() => {
    if (
      !objectIsNull(props.dataCreateCategory) &&
      prevProps.dataCreateCategory !== props.dataCreateCategory
    ) {
      if (props.dataCreateCategory.resultCode === 1) {
        props.navigation.navigate('HabitsContainer', {
          title: value.title,
          idCategory: props.dataCreateCategory.id,
        })
      }
    }
  }, [props.dataCreateCategory])

  return (
    <CreateScreen
      type="thể loại"
      navigation={props.navigation}
      getValue={(value) => setValue(value)}
      onPressNext={() => {
        props.createCategoryAction(value)
        alert('Tạo thể loại thành công')
      }}
    />
  )
}
