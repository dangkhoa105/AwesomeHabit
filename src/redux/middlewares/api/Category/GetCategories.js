import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import { objectIsNull } from '../../../../components/Function'

export const getCategories = async () => {
  const { uid } = auth().currentUser
  try {
    const data = []
    await database()
      .ref(`/users/${uid}/categories`)
      .once('value')
      .then((snapshot) => {
        if (!objectIsNull(snapshot.val())) {
          const keys = Object.keys(snapshot.val())
          Object.values(snapshot.val()).map((v, i) => {
            data.push({ ...v, id: keys[i] })
          })
        }
      })

    return data
  } catch (err) {
    return err
  }
}
