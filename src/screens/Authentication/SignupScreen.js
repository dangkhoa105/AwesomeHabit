import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../theme/color'
import { Box, Text, Button } from '../../components'
import { Icon } from 'react-native-eva-icons'
import ButtonCustom from './Custom/ButtonCustom'
import IconTextInput from '../../components/IconTextInput'

const { width } = Dimensions.get('window')

const size = 20

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState({ value: '', resultCode: true, message: '' })
  const [email, setEmail] = useState({ value: '', resultCode: true, message: '' })
  const [password, setPassword] = useState({ value: '', resultCode: true, message: '' })
  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    resultCode: true,
    message: '',
  })
  const [secureTextEntry, setSecureTextEntry] = useState({ password: true, confirmPassword: true })

  const handleSignup = () => {
    let resultCode = { name: true, email: true, password: true, confirmPassword: true }
    let message = { name: '', email: '', password: '', confirmPassword: '' }

    if (name.value === '') {
      resultCode.name = false
      message.name = 'Please enter your name!'
    } else {
      resultCode.name = true
      message.name = ''
    }

    if (email.value === '') {
      resultCode.email = false
      message.email = 'Please enter your email!'
    } else {
      let listEmail = users.filter((v) => v.email.toLowerCase() === email.value.toLowerCase())
      if (listEmail.length === 0) {
        resultCode.email = true
        message.email = ''
      } else {
        resultCode.email = false
        message.email = 'Email is already in use!'
      }
    }

    if (password.value === '') {
      resultCode.password = false
      message.password = 'Please enter your password!'
    } else {
      resultCode.password = true
      message.password = ''
    }

    if (confirmPassword.value === '') {
      resultCode.confirmPassword = false
      message.confirmPassword = 'Please enter your confirm password!'
    } else {
      if (confirmPassword.value === password.value) {
        resultCode.confirmPassword = true
        message.confirmPassword = ''
      } else {
        resultCode.confirmPassword = false
        message.confirmPassword = 'Password are not matching'
      }
    }

    setName({ ...name, resultCode: resultCode.name, message: message.name })
    setEmail({ ...email, resultCode: resultCode.email, message: message.email })
    setPassword({ ...password, resultCode: resultCode.password, message: message.password })
    setConfirmPassword({
      ...confirmPassword,
      resultCode: resultCode.confirmPassword,
      message: message.confirmPassword,
    })

    if (
      name.value !== '' &&
      email.value !== '' &&
      password.value !== '' &&
      confirmPassword.value !== ''
    ) {
      let listEmail = users.filter((v) => v.email.toLowerCase() === email.value.toLowerCase())
      if (listEmail.length === 0) {
        setName({ ...name, value: '' })
        setEmail({ ...email, value: '' })
        setPassword({ ...password, value: '' })
        setConfirmPassword({ ...confirmPassword, value: '' })
        alert('Your account has been created successful')
      } else {
        resultCode.email = false
        message.email = 'Email is already in use!'
      }
    }
  }

  let nameIconRightPassword = secureTextEntry.password ? 'eye-off-outline' : 'eye-outline'
  let nameIconRightConfirmPassword = secureTextEntry.confirmPassword
    ? 'eye-off-outline'
    : 'eye-outline'

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Box alignItems="center" paddingVertical={4}>
          <Text fontSize={24} variant="h3bold" color="color-gray-700">
            Sign Up
          </Text>
          <Text variant="label" color="color-gray-700" pt={2}>
            Please signup before get started
          </Text>
        </Box>

        {/* TextInput Name */}
        <Box width={width} paddingHorizontal={4}>
          <IconTextInput
            iconLeft={
              <Icon
                name="person-outline"
                width={size}
                height={size}
                fill={colors['color-gray-500']}
              />
            }
            title="Name"
            placeholder="Enter your name"
            value={name.value}
            onChangeText={(value) => setName({ ...name, value })}
          />
          {!name.resultCode && (
            <Text variant="s1" color="color-danger-500">
              {name.message}
            </Text>
          )}
        </Box>

        {/* TextInput Email */}
        <Box width={width} paddingHorizontal={4}>
          <IconTextInput
            iconLeft={
              <Icon
                name="email-outline"
                width={size}
                height={size}
                fill={colors['color-gray-500']}
              />
            }
            title="Email"
            placeholder="Enter your email address"
            value={email.value}
            onChangeText={(value) => setEmail({ ...email, value })}
          />
          {!email.resultCode && (
            <Text variant="s1" color="color-danger-500">
              {email.message}
            </Text>
          )}
        </Box>

        {/* TextInput Password */}
        <Box width={width} paddingHorizontal={4}>
          <IconTextInput
            iconLeft={
              <Icon
                name="lock-outline"
                width={size}
                height={size}
                fill={colors['color-gray-500']}
              />
            }
            iconRight={
              <Icon
                name={nameIconRightPassword}
                width={size}
                height={size}
                fill={colors['color-gray-500']}
                onPress={() =>
                  setSecureTextEntry({ ...secureTextEntry, password: !secureTextEntry.password })
                }
              />
            }
            title="Password"
            secureTextEntry={secureTextEntry.password}
            placeholder="Enter your password"
            value={password.value}
            onChangeText={(value) => setPassword({ ...password, value })}
          />
          {!password.resultCode && (
            <Text variant="s1" color="color-danger-500">
              {password.message}
            </Text>
          )}
        </Box>

        {/* TextInput Confirm Password */}
        <Box width={width} paddingHorizontal={4}>
          <IconTextInput
            iconLeft={
              <Icon
                name="lock-outline"
                width={size}
                height={size}
                fill={colors['color-gray-500']}
              />
            }
            iconRight={
              <Icon
                name={nameIconRightConfirmPassword}
                width={size}
                height={size}
                fill={colors['color-gray-500']}
                onPress={() =>
                  setSecureTextEntry({
                    ...secureTextEntry,
                    confirmPassword: !secureTextEntry.confirmPassword,
                  })
                }
              />
            }
            title="Password"
            secureTextEntry={secureTextEntry.confirmPassword}
            placeholder="Enter your password"
            value={confirmPassword.value}
            onChangeText={(value) => setConfirmPassword({ ...confirmPassword, value })}
          />
          {!confirmPassword.resultCode && (
            <Text variant="s1" color="color-danger-500">
              {confirmPassword.message}
            </Text>
          )}
        </Box>

        {/* Button Sign Up */}
        <ButtonCustom
          title="Sign up"
          bg="color-primary-500"
          textColor="white"
          containerStyles={styles.btn}
          onPress={() => handleSignup()}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  btn: {
    marginTop: 20,
    marginBottom: 16,
    paddingHorizontal: 44,
  },
})
