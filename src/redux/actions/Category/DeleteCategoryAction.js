import { DELETE_CATEGORY } from '../types'

export const deleteCategoryAction = (id) => {
  return { type: DELETE_CATEGORY, id: id }
}
