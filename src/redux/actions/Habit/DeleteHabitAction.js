import { DELETE_HABIT } from '../types'

export const deleteHabitAction = (id) => {
  return { type: DELETE_HABIT, id: id }
}
