import React, { useState, useEffect } from 'react'
import { SafeAreaView, Image, Dimensions, StyleSheet, Alert } from 'react-native'
import { Box, Text, Button } from '../../components'
import { Icon } from 'react-native-eva-icons'
import { getImage } from '../../theme/images'
import { colors } from '../../theme/color'
import ButtonCustom from './Custom/ButtonCustom'
import auth from '@react-native-firebase/auth'

const { width, height } = Dimensions.get('window')

const size = 18

export default function WelcomeScreen({ navigation }) {
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()

  function onAuthStateChanged(user) {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  const handleUserUsedToLogin = () => {
    if (user) {
      navigation.navigate('Tab')
    } else {
      navigation.navigate('LoginContainer')
    }
  }

  if (initializing) return null

  return (
    <SafeAreaView style={styles.container}>
      <Box flex={1} bg="white">
        <Box flex={1} pl={4} justifyContent="center">
          <Text fontSize={24} variant="h3bold" color="color-gray-700">
            Xin chào!
          </Text>
          <Text variant="label" color="color-gray-700" pt={2}>
            Chúng tối thật vui khi thấy bạn ở đây.
          </Text>
        </Box>

        <Box flex={1} alignItems="center">
          <Image resizeMode="contain" style={styles.img} source={getImage.background_welcome} />
        </Box>

        <Box flex={2} justifyContent="center" alignItems="center">
          <Box>
            <ButtonCustom
              iconLeft={
                <Icon name="facebook" width={size} height={size} fill={colors['color-gray-700']} />
              }
              title="Đăng nhập bằng Facebook"
              textColor="color-gray-700"
              onPress={() => Alert.alert('Thông báo', 'Chức năng đang được phát triển')}
            />

            <ButtonCustom
              iconLeft={
                <Icon name="google" width={size} height={size} fill={colors['color-gray-700']} />
              }
              title="Đăng nhập bằng Google"
              textColor="color-gray-700"
              containerStyles={styles.btn}
              onPress={() => Alert.alert('Thông báo', 'Chức năng đang được phát triển')}
            />
          </Box>

          {/* Sign Up Button */}
          <ButtonCustom
            title="Đăng kí tài khoản Email"
            bg="color-primary-500"
            textColor="white"
            containerStyles={styles.btnSignUp}
            onPress={() => navigation.navigate('SignupContainer')}
          />

          {/* Login Text */}
          <Box flexDirection="row">
            <Text variant="s1" color="color-gray-500">
              Bạn đã có tài khoản?{' '}
            </Text>
            <Button onPress={handleUserUsedToLogin}>
              <Text variant="s1" fontWeight="bold" color="color-primary-500">
                Đăng nhập ngay
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: (width * 702) / 900,
    height: (height * 1) / 4,
  },
  btn: {
    marginVertical: 8,
  },
  btnSignUp: {
    marginVertical: 32,
  },
})
