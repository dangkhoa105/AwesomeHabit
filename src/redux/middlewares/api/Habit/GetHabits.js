import database from '@react-native-firebase/database'

export const getHabits = async () => {
  try {
    let data = null
    await database()
      .ref('/habits')
      .once('value')
      .then((snapshot) => {
        data = snapshot.val()
      })
    return data
  } catch (err) {
    return err
  }
}
