import { LOGIN } from '../types'

export const loginAction = (email, password) => {
  return { type: LOGIN, email, password }
}
