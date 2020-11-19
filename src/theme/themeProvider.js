import {useTheme} from '@shopify/restyle';
import React, {useContext} from 'react';
import {darkTheme, lightTheme} from './theme';

export const AppThemeContext = React.createContext({
  theme: 'light',
  toggle: () => {},
  colors: undefined,
});
const THEME_KEY = 'THEME';

export const useThemes = () => {
  const themeContext = useContext(AppThemeContext);
  const toggle = () => {
    themeContext.toggle();
  };

  const theme = useTheme();
  return {
    toggle,
    ...theme,
    colors: theme.colors,
    theme: themeContext.theme,
  };
};

export const AppThemeProvider = (props) => {
  const {children} = props;
  const [currentTheme, setTheme] = React.useState('light');

  React.useEffect(() => {
    const boostrap = async () => {
      //   const themePersist = await storage.loadString(THEME_KEY);
      //   if (themePersist) {
      //     setTheme(themePersist);
      //   }
    };

    boostrap();
  }, []);

  const toggle = () => {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    // storage.saveString('THEME', nextTheme);
  };

  return (
    <>
      <AppThemeContext.Provider
        value={{theme: currentTheme, toggle, colors: undefined}}>
        {children}
      </AppThemeContext.Provider>
    </>
  );
};
