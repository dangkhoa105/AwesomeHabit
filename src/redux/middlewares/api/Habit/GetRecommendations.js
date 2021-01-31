import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import { objectIsNull } from '../../../../components/Function'

export const getRecommendations = async () => {
  const { uid } = auth().currentUser
  try {
    let list = { data: [], keys: [] }
    await database()
      .ref(`/users/${uid}/recommendations`)
      .once('value')
      .then((snapshot) => {
        if (!objectIsNull(snapshot.val())) {
          list = Object.values(snapshot.val())
        }
      })
    return list
  } catch (err) {
    return err
  }
}
