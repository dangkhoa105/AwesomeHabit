import React from 'react'
import { SafeAreaView, Image, Dimensions, StyleSheet } from 'react-native'
import { Box, Text, Button } from '../../components'
import { Icon } from 'react-native-eva-icons'
import { getImage } from '../../theme/images'
import { colors } from '../../theme/color'
import ButtonCustom from './Custom/ButtonCustom'

const { width, height } = Dimensions.get('window')

const size = 18

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Box flex={1} bg="white">
        <Box flex={1} pl={4} justifyContent="center">
          <Text fontSize={24} variant="h3bold" color="color-gray-700">
            Welcome!
          </Text>
          <Text variant="label" color="color-gray-700" pt={2}>
            We're happy to see you here.
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
              title="Continue with facebook"
              textColor="color-gray-700"
            />

            <ButtonCustom
              iconLeft={
                <Icon name="google" width={size} height={size} fill={colors['color-gray-700']} />
              }
              title="Continue with google"
              textColor="color-gray-700"
              containerStyles={styles.btn}
            />
          </Box>

          {/* Sign Up Button */}
          <ButtonCustom
            title="Sign up with Email"
            bg="color-primary-500"
            textColor="white"
            containerStyles={styles.btnSignUp}
            onPress={() => navigation.navigate('SignupContainer')}
          />

          {/* Login Text */}
          <Box flexDirection="row">
            <Text variant="s1" color="color-gray-500">
              Already have a account?{' '}
            </Text>
            <Button onPress={() => navigation.navigate('LoginContainer')}>
              <Text variant="s1" fontWeight="bold" color="color-primary-500">
                Login now
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
