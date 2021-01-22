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
          // const obj = Object.values(snapshot)[0]
          // console.log(obj)
          const keys = Object.keys(snapshot.val())
          list = { data: Object.values(snapshot.val()), keys }
          // console.log('api', Object.values(obj.value))
        }
      })
    return list
  } catch (err) {
    return err
  }
}
