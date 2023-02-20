import {StyleSheet} from 'react-native';

import {WINDOW_WIDTH, WINDOW_HEIGHT} from '../config/config';
import {normalize} from '../config/normalize';
import {AppTheme} from '../config/theme';

export const styles = (theme: AppTheme) =>
  StyleSheet.create({
    slideContainer: {
      alignItems: 'center',
      width: WINDOW_WIDTH,
      marginTop: normalize(77),
    },

    title: {
      marginTop: normalize(76),
      textAlign: 'center',
    },

    subtitle: {
      marginTop: normalize(16),
      textAlign: 'center',
      paddingHorizontal: normalize(24),
    },

    footerContainer: {
      height: normalize(WINDOW_HEIGHT * 0.28),
      justifyContent: 'space-between',
      paddingHorizontal: normalize(24),
    },

    indicatorContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },

    indicator: {
      height: normalize(4),
      width: normalize(4),
      backgroundColor: theme.lightButton,
      borderRadius: normalize(32),
      marginHorizontal: normalize(8),
    },

    activeIndicator: {
      backgroundColor: theme.linearGradientColor2,
      width: normalize(12),
    },

    flatListContainer: {
      height: normalize(WINDOW_HEIGHT * 0.6),
    },

    signInButton: {
      justifyContent: 'center',
      alignItems: 'center',
      height: normalize(48),
      borderRadius: normalize(72),
      marginTop: normalize(8),
    },

    signInText: {
      textTransform: 'capitalize',
    },
  });
