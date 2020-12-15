import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../theme/color'
import { Box, Text, Button } from '../../components'
import { Icon } from 'react-native-eva-icons'
import IconTextInput from '../../components/IconTextInput'
import ButtonCustom from './Custom/ButtonCustom'

const { width } = Dimensions.get('window')

const size = 20

const users = [
  { email: 'a', password: 'a' },
  { email: 'b', password: 'b' },
  { email: 'c', password: 'c' },
  { email: 'd', password: 'd' },
]

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', resultCode: true, message: '' })
  const [password, setPassword] = useState({ value: '', resultCode: true, message: '' })
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const handleLogin = () => {
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
      let listEmail = users.filter((v) => v.email.toLowerCase() === email.value.toLowerCase())
      if (listEmail.length === 0) {
        resultCode.email = false
        message.email = 'Email is not valid!'
      } else {
        let listPass = users.filter(
          (v) => v.password.toLowerCase() === password.value.toLowerCase(),
        )
        if (listPass.length === 0) {
          resultCode.password = false
          message.password = 'Password is not valid!'
        } else {
          resultCode.email = true
          message.email = ''
          resultCode.password = true
          message.password = ''
          navigation.navigate('Tab')
        }
      }
    }

    setEmail({ ...email, resultCode: resultCode.email, message: message.email })
    setPassword({ ...password, resultCode: resultCode.password, message: message.password })
  }

  let nameIconRight = secureTextEntry ? 'eye-off-outline' : 'eye-outline'

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Box alignItems="center" paddingVertical={4}>
          <Text fontSize={24} variant="h3bold" color="color-gray-700">
            Login
          </Text>
          <Text variant="label" color="color-gray-700" pt={2}>
            Get started now!
          </Text>
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
                name={nameIconRight}
                width={size}
                height={size}
                fill={colors['color-gray-500']}
                onPress={() => setSecureTextEntry(!secureTextEntry)}
              />
            }
            title="Password"
            secureTextEntry={secureTextEntry}
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

        {/* Button Login */}
        <ButtonCustom
          title="Log in"
          bg="color-primary-500"
          textColor="white"
          containerStyles={styles.btn}
          onPress={() => handleLogin()}
        />

        {/* Sign up Text */}
        <Box flexDirection="row">
          <Text variant="s1" color="color-gray-500">
            Don't have a account?{' '}
          </Text>
          <Button onPress={() => navigation.navigate('SignupContainer')}>
            <Text variant="s1" fontWeight="bold" color="color-primary-500">
              Sign up now
            </Text>
          </Button>
        </Box>
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
