import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'

export const updateCheckinsHabit = async (id, data) => {
  const { uid } = auth().currentUser
  let response = null
  try {
    await database()
      .ref(`/users/${uid}/habits/${id}`)
      .update({
        checkins: data,
      })
      .then(() => {
        response = {
          ...response,
          resultCode: 1,
          message: 'Habit is updated successfully',
        }
      })
      .catch((error) => {
        response = { ...response, resultCode: -1, message: error }
      })
    return response
  } catch (err) {
    return { ...response, resultCode: -1, message: err }
  }
}
