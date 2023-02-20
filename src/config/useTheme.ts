import {useMemo} from 'react';
import {useColorScheme} from 'react-native';

import {darkTheme, defaultTheme} from '../config/theme';

export const useTheme = (styles: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? darkTheme : defaultTheme;

  return [useMemo(() => styles(theme), [theme, styles]), theme];
};
