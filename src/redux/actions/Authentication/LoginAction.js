import { LOGIN } from '../types'

export const loginAction = (email, password) => {
  type: LOGIN, email, password
}
