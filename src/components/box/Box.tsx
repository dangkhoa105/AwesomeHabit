import {createBox} from '@shopify/restyle';
import {Theme} from '../../theme/theme';

export const Box = createBox<Theme>();

export const Layout = createBox<Theme>();
Layout.defaultProps = {
  backgroundColor: 'background-basic-1',
};

export const CenterBox = createBox<Theme>();
CenterBox.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const Flex = createBox<Theme>();
Flex.defaultProps = {
  flexDirection: 'row',
};
