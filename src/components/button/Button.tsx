import { TouchableOpacity, View } from 'react-native'
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  spacingShorthand,
  SpacingShorthandProps,
  layout,
  LayoutProps,
  opacity,
  OpacityProps,
} from '@shopify/restyle'
import React from 'react'

import { Theme } from '../../theme/theme'

const restyleFunctions = [
  spacing,
  border,
  layout,
  backgroundColorShorthand,
  spacingShorthand,
  backgroundColor,
  opacity,
]
type Props = SpacingProps<Theme> &
  OpacityProps<Theme> &
  LayoutProps<Theme> &
  SpacingShorthandProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  BackgroundColorProps<Theme> & {
    onPress: () => void
    children: React.ReactNode
  }

export const Button = ({ onPress, children, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest)

  return (
    <TouchableOpacity onPress={onPress} {...props}>
      {children}
    </TouchableOpacity>
  )
}
