import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../theme/color'
import { Box, Text, Button } from '../../components'
import { Icon } from 'react-native-eva-icons'
import { handleResetPassword } from './Function'
import ButtonCustom from './Custom/ButtonCustom'
import IconTextInput from '../../components/IconTextInput'

const { width } = Dimensions.get('window')

const size = 20

export default function ForgetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', resultCode: true, message: '' })

  const onPress = () => {
    handleResetPassword(email, setEmail, navigation)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Box alignItems="center" paddingVertical={4}>
          <Text fontSize={24} variant="h3bold" color="color-gray-700">
            Quên mật khẩu
          </Text>
          <Text variant="label" color="color-gray-700" pt={2}>
            Đừng quên nữa nhá!
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

        {/* Button Reset */}
        <ButtonCustom
          title="Hoàn thành"
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
