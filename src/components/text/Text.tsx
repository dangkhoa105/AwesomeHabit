import {createText, TextProps} from '@shopify/restyle';
import React from 'react';
import {Theme} from '../../theme/theme';

const Text = createText<Theme>();
Text.defaultProps = {
  variant: 'p',
};

export {Text};
