import auth from '@react-native-firebase/auth'

// Login
export const handleLogin = async (email, setEmail, password, setPassword, setFetching) => {
  let resultCode = { email: true, password: true }
  let message = { email: '', password: '' }

  if (email.value === '' && password.value === '') {
    resultCode.email = false
    message.email = 'Please enter your email!'
    resultCode.password = false
    message.password = 'Please enter your password!'
  } else if (email.value !== '' && password.value === '') {
    resultCode.email = true
    message.email = ''
    resultCode.password = false
    message.password = 'Please enter your password!'
  } else if (email.value === '' && password.value !== '') {
    resultCode.email = false
    message.email = 'Please enter your email!'
    resultCode.password = true
    message.password = ''
  } else if (email.value !== '' && password.value !== '') {
    await auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            resultCode.email = false
            message.email = 'That email address is invalid!'
            resultCode.password = true
            message.password = ''
            break
          case 'auth/user-not-found':
            resultCode.email = false
            message.email = 'There is no user record corresponding to this identifier'
            resultCode.password = true
            message.password = ''
            break
          case 'auth/wrong-password':
            resultCode.email = true
            message.email = ''
            resultCode.password = false
            message.password = 'Your password is wrong'
            break
        }
        setEmail({ ...email, resultCode: resultCode.email, message: message.email })
        setPassword({
          ...password,
          resultCode: resultCode.password,
          message: message.password,
        })
      })
  }

  setEmail({ ...email, resultCode: resultCode.email, message: message.email })
  setPassword({ ...password, resultCode: resultCode.password, message: message.password })
}
