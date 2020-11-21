import { useTheme } from '@shopify/restyle'
import React, { useContext } from 'react'
import theme from './theme'
import {
  ThemeProvider,
  createBox,
  createText,
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle'

export const AppThemeProvider = (props) => {
  const { children } = props

  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}
