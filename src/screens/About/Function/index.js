import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { alert } from '../../../components/Function'

export const handleUpdate = async (
  name,
  setName,
  password,
  setPassword,
  newPassword,
  setNewPassword,
  navigation,
) => {
  const resultCode = { name: true, password: true, newPassword: true }
  const message = { name: '', password: '', newPassword: '' }
  const passwordStorage = await AsyncStorage.getItem('@password_key')

  if (name.value.trim() === '') {
    resultCode.name = false
    message.name = 'Vui lòng nhập tên của bạn!'
  } else if (password.value !== '') {
    if (password.value.length < 6) {
      resultCode.password = false
      message.password = 'Mật khẩu không hợp lệ!'
    } else {
      if (password.value !== passwordStorage) {
        resultCode.password = false
        message.password = 'Mật khẩu không khớp!'
      } else {
        if (newPassword.value.length < 6) {
          resultCode.newPassword = false
          message.newPassword = 'Mật khẩu không hợp lệ!'
        } else if (newPassword.value === passwordStorage) {
          resultCode.newPassword = false
          message.newPassword = 'Mật khẩu mới không được trùng với mật khẩu cũ!'
        }
      }
    }
  } else if (password.value.trim() === '' && newPassword.value !== '') {
    resultCode.password = false
    resultCode.newPassword = false
    message.password = 'Vui lòng nhập mật khẩu!'
  }

  setName({ ...name, resultCode: resultCode.name, message: message.name })
  setPassword({ ...password, resultCode: resultCode.password, message: message.password })
  setNewPassword({
    ...newPassword,
    resultCode: resultCode.newPassword,
    message: message.newPassword,
  })

  if (resultCode.name && resultCode.newPassword && resultCode.password) {
    await auth().currentUser.updateProfile({ displayName: name.value })
    if (newPassword.value !== '') {
      await auth()
        .currentUser.updatePassword(newPassword.value)
        .then(async () => {
          await AsyncStorage.removeItem('@password_key')
          await AsyncStorage.setItem('@password_key', newPassword.value)
        })
    }

    await alert('Bạn đã thay đổi thành công', navigation.navigate('Tab'))
  }
}
