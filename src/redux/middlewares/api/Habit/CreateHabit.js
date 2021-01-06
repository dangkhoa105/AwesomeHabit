import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'

export const createHabit = async (data) => {
  const { uid } = auth().currentUser
  let response = null

  try {
    await database()
      .ref(`/users/${uid}/habits`)
      .push(data)
      .then(() => {
        response = {
          ...response,
          resultCode: 1,
          message: 'Habit is created successfully',
        }
      })
    return response
  } catch (err) {
    return { ...response, resultCode: -1, message: err }
  }
}
