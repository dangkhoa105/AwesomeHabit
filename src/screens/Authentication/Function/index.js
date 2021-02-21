import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { alert } from '../../../components/Function'

const recommendations = {
  '-MRk01rc-44LiJdftyQm': {
    days: 'Saturday',
    habitType: 'Once',
    iconFill: 'color-info-700',
    iconName: 'checkmark-square-outline',
    months: '',
    startDate: 'Sat Jan 23 2021 23:12:53 GMT+0700 (+07)',
    times: ['Sun Jan 24 2021 00:02:02 GMT+0700 (+07)'],
    title: 'Bơi lội',
    weeks: '',
  },
  '-MRk5-qYtYESdcAINl97': {
    days: ['Monday', 'Tuesday', 'Wednesday'],
    habitType: 'Daily',
    iconFill: 'color-danger-600',
    iconName: 'award-outline',
    months: '',
    startDate: 'Sat Jan 23 2021 09:56:36 GMT+0700 (+07)',
    times: ['Sat Jan 23 2021 09:59:36 GMT+0700 (+07)'],
    title: 'Eat clean',
    weeks: '',
  },
  '-MRkZ2SrUmSDsyI9p57j': {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    habitType: 'Weekly',
    iconFill: 'color-danger-600',
    iconName: 'alert-circle-outline',
    months: '',
    startDate: 'Sun Jan 24 2021 23:44:51 GMT+0700 (+07)',
    times: ['Sun Jan 24 2021 01:45:49 GMT+0700 (+07)'],
    title: 'Thanh nhạc',
    weeks: 2,
  },
  '-MRuBfKc8I9o13qXv34A': {
    days: 'Monday',
    habitType: 'Once',
    iconFill: 'color-danger-200',
    iconName: 'arrow-circle-up-outline',
    months: '',
    startDate: 'Mon Jan 25 2021 22:38:56 GMT+0700 (+07)',
    times: ['Mon Jan 25 2021 22:39:48 GMT+0700 (+07)'],
    title: 'Chơi game',
    weeks: '',
  },
}
// Login
export const handleLogin = async (
  email,
  setEmail,
  password,
  setPassword,
  navigation,
  setFetching,
) => {
  const resultCode = { email: true, password: true }
  const message = { email: '', password: '' }

  if (email.value === '' && password.value === '') {
    resultCode.email = false
    message.email = 'Xin vui lòng nhập email của bạn!'
    resultCode.password = false
    message.password = 'Xin vui lòng nhập mật khẩu của bạn!'
  } else if (email.value !== '' && password.value === '') {
    resultCode.email = true
    message.email = ''
    resultCode.password = false
    message.password = 'Xin vui lòng nhập mật khẩu của bạn!'
  } else if (email.value === '' && password.value !== '') {
    resultCode.email = false
    message.email = 'Xin vui lòng nhập email của bạn!'
    resultCode.password = true
    message.password = ''
  } else if (email.value !== '' && password.value !== '') {
    await auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(() => {
        AsyncStorage.setItem('@password_key', password.value)
        navigation.navigate('Tab')
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            resultCode.email = false
            message.email = 'Email sai cú pháp!'
            resultCode.password = true
            message.password = ''
            break
          case 'auth/user-not-found':
            resultCode.email = false
            message.email = 'Email không tồn tại!'
            resultCode.password = true
            message.password = ''
            break
          case 'auth/wrong-password':
            resultCode.email = true
            message.email = ''
            resultCode.password = false
            message.password = 'Sai mật khẩu!'
            break
        }

        setEmail({ ...email, resultCode: resultCode.email, message: message.email })
        setPassword({
          ...password,
          resultCode: resultCode.password,
          message: message.password,
        })
      })
    setFetching(false)
  }
  setFetching(false)
  setEmail({ ...email, resultCode: resultCode.email, message: message.email })
  setPassword({ ...password, resultCode: resultCode.password, message: message.password })
}

// Sign up
export const handleSignup = async (
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  navigation,
  setFetching,
) => {
  const resultCode = { name: true, email: true, password: true, confirmPassword: true }
  const message = { name: '', email: '', password: '', confirmPassword: '' }

  if (
    name.value === '' ||
    email.value === '' ||
    password.value === '' ||
    confirmPassword.value === ''
  ) {
    if (name.value === '') {
      resultCode.name = false
      message.name = 'Vui lòng nhập tên của bạn!'
    }

    if (email.value === '') {
      resultCode.email = false
      message.email = 'Vui lòng nhập email của bạn!'
    }

    if (password.value === '') {
      resultCode.password = false
      message.password = 'Vui lòng nhập mật khẩu của bạn!'
    }

    if (confirmPassword.value === '') {
      resultCode.confirmPassword = false
      message.confirmPassword = 'Vui lòng nhập xác nhận mật khẩu!'
    }
  } else if (
    name.value !== '' &&
    email.value !== '' &&
    password.value !== '' &&
    confirmPassword.value !== ''
  ) {
    if (confirmPassword.value === password.value) {
      await auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredentials) => {
          userCredentials.user.updateProfile({
            displayName: name.value,
          })
          setName({ ...name, value: '' })
          setEmail({ ...email, value: '' })
          setPassword({ ...password, value: '' })
          setConfirmPassword({ ...confirmPassword, value: '' })
          database().ref(`/users/${userCredentials.user.uid}/recommendations`).set(recommendations)
          navigation.navigate('LoginContainer')
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              resultCode.name = true
              message.name = ''
              resultCode.email = false
              message.email = 'Email sai cú pháp!'
              resultCode.password = true
              message.password = ''
              resultCode.confirmPassword = true
              message.confirmPassword = ''
              break
            case 'auth/email-already-in-use':
              resultCode.name = true
              message.name = ''
              resultCode.email = false
              message.email = 'Email đã tồn tại!'
              resultCode.password = true
              message.password = ''
              resultCode.confirmPassword = true
              message.confirmPassword = ''
              break
            case 'auth/weak-password':
              resultCode.name = true
              message.name = ''
              resultCode.email = true
              message.email = ''
              resultCode.password = false
              message.password = 'Mật khẩu của bạn quá yếu!'
              resultCode.confirmPassword = true
              message.confirmPassword = ''
              break
          }

          setFetching(false)
          setName({ ...name, resultCode: resultCode.name, message: message.name })
          setEmail({ ...email, resultCode: resultCode.email, message: message.email })
          setPassword({ ...password, resultCode: resultCode.password, message: message.password })
          setConfirmPassword({
            ...confirmPassword,
            resultCode: resultCode.confirmPassword,
            message: message.confirmPassword,
          })
        })
      setFetching(false)
    } else {
      resultCode.name = true
      message.name = ''
      resultCode.email = true
      message.email = ''
      resultCode.password = false
      message.password = 'Hai mật khẩu không giống nhau'
      resultCode.confirmPassword = false
      message.confirmPassword = 'Hai mật khẩu không giống nhau'
    }
  }
  setFetching(false)
  setName({ ...name, resultCode: resultCode.name, message: message.name })
  setEmail({ ...email, resultCode: resultCode.email, message: message.email })
  setPassword({ ...password, resultCode: resultCode.password, message: message.password })
  setConfirmPassword({
    ...confirmPassword,
    resultCode: resultCode.confirmPassword,
    message: message.confirmPassword,
  })
}

// Reset password
export const handleResetPassword = async (email, setEmail, navigation) => {
  const resultCode = { email: true }
  const message = { email: '' }

  auth()
    .sendPasswordResetEmail(email.value)
    .then(function (user) {
      alert('Vui lòng check email của bạn!', navigation.navigate('LoginContainer'))
    })
    .catch(function (e) {
      switch (e.code) {
        case 'auth/invalid-email':
          resultCode.email = false
          message.email = 'Email sai cú pháp!'
          break
        case 'auth/user-not-found':
          resultCode.email = false
          message.email = 'Không tìm thấy email!'
          break
      }
      setEmail({ ...email, resultCode: resultCode.email, message: message.email })
    })

  setEmail({ ...email, resultCode: resultCode.email, message: message.email })
}
