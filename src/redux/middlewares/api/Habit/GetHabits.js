import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import { objectIsNull } from '../../../../components/Function'

export const getHabits = async () => {
  const { uid } = auth().currentUser
  try {
    let data = null
    await database()
      .ref(`/users/${uid}/habits`)
      .once('value')
      .then((snapshot) => {
        data = objectIsNull(snapshot.val()) ? null : Object.values(snapshot.val())
      })
    return data
  } catch (err) {
    return err
  }
}
