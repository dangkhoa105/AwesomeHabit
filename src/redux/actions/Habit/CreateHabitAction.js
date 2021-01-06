import { CREATE_HABIT } from '../types'

export const createHabitAction = (data) => {
  return { type: CREATE_HABIT, data }
}
