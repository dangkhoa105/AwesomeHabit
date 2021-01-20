import { UPDATE_CHECKINS_HABIT } from '../types'

export const updateCheckinsHabitAction = (id, data) => {
  return { type: UPDATE_CHECKINS_HABIT, id, data }
}
