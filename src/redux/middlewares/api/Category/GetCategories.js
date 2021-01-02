import database from '@react-native-firebase/database'
import { userProfile } from '../../../../config'

export const getCategories = async () => {
  try {
    let data = null
    await database()
      .ref('/categories')
      .once('value')
      .then((snapshot) => {
        let list = snapshot.val()
        data = list.filter((item) => item.uid === userProfile.uid)
      })

    return data
  } catch (err) {
    return err
  }
}
