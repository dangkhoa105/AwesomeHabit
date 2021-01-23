import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'

export const updateHabit = async (id, data) => {
  const { uid } = auth().currentUser
  let response = null
  try {
    await database()
      .ref(`/users/${uid}/habits/${id}`)
      .update({
        days: data.days,
        weeks: data.weeks,
        months: data.months,
        iconFill: data.iconFill,
        iconName: data.iconName,
        times: data.times,
        title: data.title,
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
