import { arrayIsEmpty, stringIsEmpty } from '../../../components/Function'

export const checkConditionCreateHabit = (value, type) => {
  if (type !== 'Once') {
    if (
      (!arrayIsEmpty(value.days) ||
        !stringIsEmpty(value.weeks) ||
        !stringIsEmpty(value.setMonths)) &&
      !stringIsEmpty(value.habitType) &&
      !arrayIsEmpty(value.times)
    ) {
      return true
    }
    return false
  } else {
    return !arrayIsEmpty(value.times)
  }
}
