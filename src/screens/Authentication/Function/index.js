import React, { useState, useEffect } from 'react'
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
      .then(() => {
        navigation.navigate('Tab')
      })
      .catch((error) => {
        console.log('vo day', error)
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
    setFetching(false)
  }
  setFetching(false)
  setEmail({ ...email, resultCode: resultCode.email, message: message.email })
  setPassword({ ...password, resultCode: resultCode.password, message: message.password })
}

export const handleUserUsedToLogin = (navigation) => {
  auth().onAuthStateChanged(function (user) {
    if (user) {
      navigation.navigate('Tab')
    } else {
      console.log('vo day')
      navigation.navigate('LoginContainer')
    }
  })
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
  let resultCode = { name: true, email: true, password: true, confirmPassword: true }
  let message = { name: '', email: '', password: '', confirmPassword: '' }

  if (
    name.value === '' ||
    email.value === '' ||
    password.value === '' ||
    confirmPassword.value === ''
  ) {
    if (name.value === '') {
      resultCode.name = false
      message.name = 'Please enter your name!'
    }

    if (email.value === '') {
      resultCode.email = false
      message.email = 'Please enter your email!'
    }

    if (password.value === '') {
      resultCode.password = false
      message.password = 'Please enter your password!'
    }

    if (confirmPassword.value === '') {
      resultCode.confirmPassword = false
      message.confirmPassword = 'Please enter your confirm password!'
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
          navigation.navigate('Tab')
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              resultCode.name = true
              message.name = ''
              resultCode.email = false
              message.email = 'That email address is invalid!'
              resultCode.password = true
              message.password = ''
              resultCode.confirmPassword = true
              message.confirmPassword = ''
              break
            case 'auth/email-already-in-use':
              resultCode.name = true
              message.name = ''
              resultCode.email = false
              message.email = 'That email address is already in use!'
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
              message.password = 'Your password is too weak!'
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
      message.password = 'Password are not matching'
      resultCode.confirmPassword = false
      message.confirmPassword = 'Password are not matching'
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
