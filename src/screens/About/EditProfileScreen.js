import React, { useEffect, useState } from 'react'
import { Box, Text, Button } from '../../components'
import { ScrollView, Dimensions } from 'react-native'
import { colors } from '../../theme/color'
import { Icon } from 'react-native-eva-icons'
import { handleUpdate } from './Function'
import auth from '@react-native-firebase/auth'
import Header from '../Habit/Custom/Header/Header'
import IconTextInput from '../../components/IconTextInput'

const { width } = Dimensions.get('window')
const size = 20

export default function EditProfileScreen(props) {
  const user = auth().currentUser
  const [name, setName] = useState({ value: user.displayName, resultCode: true, message: '' })
  const [password, setPassword] = useState({ value: '', resultCode: true, message: '' })
  const [newPassword, setNewPassword] = useState({ value: '', resultCode: true, message: '' })

  const [secureTextEntry, setSecureTextEntry] = useState({ password: true, confirmPassword: true })
  const [checkChangeValue, setCheckChangeValue] = useState(false)

  const nameIconRightPassword = !secureTextEntry.password ? 'eye-off-outline' : 'eye-outline'
  const nameIconRightConfirmPassword = !secureTextEntry.confirmPassword
    ? 'eye-off-outline'
    : 'eye-outline'

  const bg = checkChangeValue ? 'color-primary-500' : 'color-primary-400'

  const onPress = () => {
    if (checkChangeValue) {
      handleUpdate(
        name,
        setName,
        password,
        setPassword,
        newPassword,
        setNewPassword,
        props.navigation,
      )
    }
  }

  return (
    <Box flex={1} paddingTop={5} backgroundColor="white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <Box paddingHorizontal={8}>
          <Header title={'Chỉnh sửa thông tin cá nhân'} navigation={props.navigation} />
        </Box>

        <Box width={width} paddingHorizontal={4} pt={4}>
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
            onChangeText={(value) => {
              setName({ ...name, value })
              setCheckChangeValue(true)
            }}
          />
          {!name.resultCode && (
            <Text variant="s1" color="color-danger-500">
              {name.message}
            </Text>
          )}
        </Box>

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
            editable={false}
            title="Email"
            value={user.email}
          />
        </Box>

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
            secureTextEntry={secureTextEntry.password}
            title="Mật khẩu cũ"
            placeholder="Nhập mật khẩu cũ"
            value={password.value}
            onChangeText={(value) => setPassword({ ...password, value })}
          />
          {!password.resultCode && (
            <Text variant="s1" color="color-danger-500">
              {password.message}
            </Text>
          )}
        </Box>

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
            secureTextEntry={secureTextEntry.confirmPassword}
            title="Mật khẩu mới"
            placeholder="Nhập mật khẩu mới"
            value={newPassword.value}
            onChangeText={(value) => {
              setNewPassword({ ...newPassword, value })
              setCheckChangeValue(true)
            }}
          />
          {!newPassword.resultCode && (
            <Text variant="s1" color="color-danger-500">
              {newPassword.message}
            </Text>
          )}
        </Box>

        <Box flex={1} flexDirection="row" justifyContent="center" alignItems="center">
          <Button bg={bg} borderRadius={1} onPress={onPress}>
            <Text color="white" variant="p" paddingHorizontal={9} paddingVertical={3}>
              Hoàn thành
            </Text>
          </Button>
        </Box>
      </ScrollView>
    </Box>
  )
}
