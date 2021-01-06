import { CREATE_CATEGORY } from '../types'

export const createCategoryAction = (data) => {
  return { type: CREATE_CATEGORY, data }
}
