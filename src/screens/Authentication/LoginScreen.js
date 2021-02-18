import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../theme/color'
import { Box, Text, Button } from '../../components'
import { Icon } from 'react-native-eva-icons'
import IconTextInput from '../../components/IconTextInput'
import ButtonCustom from './Custom/ButtonCustom'
import Loading from '../../components/Loading'
import { handleLogin } from './Function'

const { width } = Dimensions.get('window')

const size = 20

export default function LoginScreen(props) {
  const [email, setEmail] = useState({ value: '', resultCode: true, message: '' })
  const [password, setPassword] = useState({ value: '', resultCode: true, message: '' })
  const [fetching, setFetching] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const nameIconRight = !secureTextEntry ? 'eye-off-outline' : 'eye-outline'

  const onPress = () => {
    setFetching(true)
    handleLogin(email, setEmail, password, setPassword, props.navigation, setFetching)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {fetching && <Loading />}
      <ScrollView contentContainerStyle={styles.container}>
        <Box alignItems="center" paddingVertical={4}>
          <Text fontSize={24} variant="h3bold" color="color-gray-700">
            Đăng nhập
          </Text>
          <Text variant="label" color="color-gray-700" pt={2}>
            Bắt đầu nào!
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
                name={nameIconRight}
                width={size}
                height={size}
                fill={colors['color-gray-500']}
                onPress={() => setSecureTextEntry(!secureTextEntry)}
              />
            }
            title="Mật khẩu"
            secureTextEntry={secureTextEntry}
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

        {/* Button Login */}
        <ButtonCustom
          title="Đăng nhập"
          bg="color-primary-500"
          textColor="white"
          containerStyles={styles.btn}
          onPress={onPress}
        />

        {/* Sign up Text */}
        <Box flexDirection="row">
          <Text variant="s1" color="color-gray-500">
            Bạn không có tài khoản?{' '}
          </Text>
          <Button onPress={() => props.navigation.navigate('SignupContainer')}>
            <Text variant="s1" fontWeight="bold" color="color-primary-500">
              Đăng ký ngay
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
