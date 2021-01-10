import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import { objectIsNull } from '../../../../components/Function'

export const getHabits = async () => {
  const { uid } = auth().currentUser
  try {
    let list = { data: [], keys: [] }
    await database()
      .ref(`/users/${uid}/habits`)
      .once('value')
      .then((snapshot) => {
        if (!objectIsNull(snapshot.val())) {
          const obj = Object.values(snapshot)[0]
          const keys = obj.childKeys.reverse()
          list = { data: Object.values(obj.value), keys }
        }
      })
    return list
  } catch (err) {
    return err
  }
}
