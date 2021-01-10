import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'

export const updateHabit = async (id, data) => {
  const { uid } = auth().currentUser
  let response = null
  try {
    await database()
      .ref(`/users/${uid}/habits/${id}`)
      .set(data, function (error) {
        if (error) {
          response = { ...response, resultCode: -1, message: err }
        } else {
          response = {
            ...response,
            resultCode: 1,
            message: 'Habit is created successfully',
          }
        }
      })
    return response
  } catch (err) {
    return { ...response, resultCode: -1, message: err }
  }
}
