import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../theme/color'
import { Box, Text, Button } from '../../components'
import { Icon } from 'react-native-eva-icons'
import { handleSignup } from './Function'
import ButtonCustom from './Custom/ButtonCustom'
import IconTextInput from '../../components/IconTextInput'
import Loading from '../../components/Loading'

const { width } = Dimensions.get('window')

const size = 20

export default function SignupScreen(props) {
  const [name, setName] = useState({ value: '', resultCode: true, message: '' })
  const [email, setEmail] = useState({ value: '', resultCode: true, message: '' })
  const [password, setPassword] = useState({ value: '', resultCode: true, message: '' })
  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    resultCode: true,
    message: '',
  })
  const [fetching, setFetching] = useState(false)

  const [secureTextEntry, setSecureTextEntry] = useState({ password: true, confirmPassword: true })

  const onPress = () => {
    setFetching(true)
    handleSignup(
      name,
      setName,
      email,
      setEmail,
      password,
      setPassword,
      confirmPassword,
      setConfirmPassword,
      props.navigation,
      setFetching,
    )
  }

  const nameIconRightPassword = !secureTextEntry.password ? 'eye-off-outline' : 'eye-outline'
  const nameIconRightConfirmPassword = !secureTextEntry.confirmPassword
    ? 'eye-off-outline'
    : 'eye-outline'

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {fetching && <Loading />}
        <Box alignItems="center" paddingVertical={4}>
          <Text fontSize={24} variant="h3bold" color="color-gray-700">
            Đăng ký
          </Text>
          <Text variant="label" color="color-gray-700" pt={2}>
            Hãy đăng ký trước khi vào app nha
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
            title="Họ và tên"
            placeholder="Nhập tên của bạn"
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
            placeholder="Nhập email của bạn"
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
            title="Mật khẩu"
            secureTextEntry={secureTextEntry.password}
            placeholder="Nhập mật khẩu của bạn"
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
            title="Xác nhận lại mật khẩu"
            secureTextEntry={secureTextEntry.confirmPassword}
            placeholder="Nhập mật khẩu của bạn"
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
          title="Đăng ký"
          bg="color-primary-500"
          textColor="white"
          containerStyles={styles.btn}
          onPress={onPress}
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
