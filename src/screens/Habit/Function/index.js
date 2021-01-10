import { arrayIsEmpty, stringIsEmpty } from '../../../components/Function'

export const checkCondition = (value) => {
  console.log(!arrayIsEmpty(value.days))
  if (
    !stringIsEmpty(value.at) &&
    !arrayIsEmpty(value.days) &&
    !stringIsEmpty(value.habitType) &&
    !arrayIsEmpty(value.times)
  ) {
    return true
  }
  return false
}
