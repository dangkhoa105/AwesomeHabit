import React, { useState, useEffect } from 'react'
import { Icon } from 'react-native-eva-icons'
import { Box, Text, Button } from '../../../../../components'
import { colors } from '../../../../../theme/color'

const size = 16

export default function LabelTouch({
  checkDaysSelected,
  setCheckDaysSelected,
  item,
  index,
  length,
}) {
  const [select, setSelect] = useState(false)

  useEffect(() => {
    // let list = checkDaysSelected
    // list.splice(index, 1, select)
    setCheckDaysSelected(select)
  }, [select])

  let isLastItem = index === length - 1
  let pb = isLastItem ? 2 : 0

  const onPress = () => {
    setSelect(!select)
  }

  return (
    <Button onPress={onPress}>
      <Box
        flexDirection="row"
        marginHorizontal={5}
        justifyContent="space-between"
        alignItems="center"
        mt={2}
        pb={pb}
      >
        <Text variant="p" color="color-gray-700">
          {item}
        </Text>

        {select && (
          <Icon
            name="checkmark-outline"
            width={size}
            height={size}
            fill={colors['color-gray-700']}
          />
        )}
      </Box>
    </Button>
  )
}
