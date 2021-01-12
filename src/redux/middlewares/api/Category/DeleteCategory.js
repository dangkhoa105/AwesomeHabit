import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'

export const deleteCategory = async (id) => {
  const { uid } = auth().currentUser
  let response = null
  try {
    await database()
      .ref(`/users/${uid}/categories/${id}`)
      .remove()
      .then(() => {
        response = {
          resultCode: 1,
        }
      })
      .catch(() => {
        response = { resultCode: -1, message: err }
      })
    return response
  } catch (err) {
    return { resultCode: -1, message: err }
  }
}
