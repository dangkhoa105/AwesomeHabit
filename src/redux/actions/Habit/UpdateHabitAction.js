import { UPDATE_HABIT } from '../types'

export const updateHabitAction = (id, data) => {
  return { type: UPDATE_HABIT, id, data }
}
