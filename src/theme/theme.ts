import { createTheme } from '@shopify/restyle';
import { colors, lightColors } from './color';

const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  13: 52,
  14: 56,
  15: 60,
  16: 64,
  17: 68,
  18: 72,
  19: 76,
  20: 80,
};

export const fonts = {
  regular: 'Montserrat-Regular',
  medium: 'Montserrat-Medium',
  bold: 'Montserrat-Bold',
  semibold: 'Montserrat-SemiBold',
  extrabold: 'Montserrat-ExtraBold',
};

const BASE_TEXT = {
  fontSize: 14,
  fontFamily: fonts.regular,
  color: 'text-basic',
};

const theme = createTheme({
  colors: {
    ...colors,
    ...lightColors,
  },
  spacing,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    transparent: {
      ...BASE_TEXT,
      opacity: 0,
    },
    h2Medium: {
      ...BASE_TEXT,
      fontSize: 24,
      fontFamily: fonts.medium,
    },
    h2: {
      ...BASE_TEXT,
      fontSize: 24,
      fontWeight: '500',
      fontStyle: 'normal',
    },
    h3: {
      ...BASE_TEXT,
      fontSize: 18,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    h3medium: {
      ...BASE_TEXT,
      fontSize: 18,
      fontFamily: fonts.medium,
    },
    h3bold: {
      ...BASE_TEXT,
      fontSize: 18,
      fontFamily: fonts.bold,
    },
    p: {
      ...BASE_TEXT,
    },
    s1: {
      ...BASE_TEXT,
      fontSize: 12,
    },

    s2: {
      ...BASE_TEXT,
      fontSize: 10,
    },

    label: {
      ...BASE_TEXT,
      fontSize: 14,
      color: 'text-gray',
    },
  },
  borderRadii: {
    ...spacing,
    'rounded-full':99999
  },

});

export default theme;
export type Theme = typeof theme

