import { useTheme } from '@shopify/restyle'
import React, { useContext } from 'react'
import { darkTheme, lightTheme } from './theme'
import {
  ThemeProvider,
  createBox,
  createText,
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AppThemeProvider = (props) => {
  const { children } = props
  const [currentTheme, setTheme] = React.useState('light')

  const finalTheme = currentTheme === 'light' ? lightTheme : darkTheme
  return (
    <>
      <ThemeProvider theme={finalTheme}>{children}</ThemeProvider>
    </>
  )
}
