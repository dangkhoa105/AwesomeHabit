import { arrayIsEmpty, objectIsNull, stringIsEmpty } from '../../../components/Function'

export const checkConditionCreateHabit = (value, type) => {
  if (type !== 'Once') {
    if (!stringIsEmpty(value.habitType)) {
      if (value.habitType === 'Daily') {
        if (!arrayIsEmpty(value.days) && !arrayIsEmpty(value.times)) {
          return true
        } else {
          return false
        }
      } else if (value.habitType === 'Weekly') {
        if (!stringIsEmpty(value.weeks) && !arrayIsEmpty(value.times)) {
          return true
        } else {
          return false
        }
      } else {
        if (!stringIsEmpty(value.months) && !arrayIsEmpty(value.times)) {
          return true
        } else {
          return false
        }
      }
    } else {
      return false
    }
  } else {
    return !arrayIsEmpty(value.times)
  }
}

export const checkConditionUpdateHabit = (value, type) => {
  if (type !== 'Once') {
    if (type === 'Daily') {
      if (!arrayIsEmpty(value.days) && !arrayIsEmpty(value.times) && !stringIsEmpty(value.title)) {
        return true
      } else {
        return false
      }
    } else if (type === 'Weekly') {
      if (
        !stringIsEmpty(value.weeks) &&
        !arrayIsEmpty(value.times) &&
        !stringIsEmpty(value.title)
      ) {
        return true
      } else {
        return false
      }
    } else {
      if (
        !stringIsEmpty(value.months) &&
        !arrayIsEmpty(value.times) &&
        !stringIsEmpty(value.title)
      ) {
        return true
      } else {
        return false
      }
    }
  } else {
    return !arrayIsEmpty(value.times) && !stringIsEmpty(value.title)
  }
}
