import auth from '@react-native-firebase/auth'

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
