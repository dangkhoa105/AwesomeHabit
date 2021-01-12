import { arrayIsEmpty, stringIsEmpty } from '../../../components/Function'

export const checkConditionCreateHabit = (value) => {
  if (
    (!arrayIsEmpty(value.days) || !stringIsEmpty(value.weeks) || !stringIsEmpty(value.setMonths)) &&
    !stringIsEmpty(value.habitType) &&
    !arrayIsEmpty(value.times)
  ) {
    return true
  }
  return false
}
