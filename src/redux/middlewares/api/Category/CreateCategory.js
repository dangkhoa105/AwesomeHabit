import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'

export const createCategory = async (data) => {
  const { uid } = auth().currentUser
  let response = null

  try {
    await database()
      .ref(`/users/${uid}/categories`)
      .push(data)
      .then((snapshot) => {
        const tempt = snapshot.toString().split('/')
        response = {
          ...response,
          id: tempt[4],
          resultCode: 1,
          message: 'Category is created successfully',
        }
      })
    return response
  } catch (err) {
    return { ...response, resultCode: -1, message: err }
  }
}
