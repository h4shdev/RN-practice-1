import {colors} from '../config/colors';

export type AppTheme = {
  primaryText: string;
  primaryButtonText: string;
  subText: string;
  linearGradientColor1: string;
  linearGradientColor2: string;
  lightButton: string;
  borderColor: string;
  headingText: string;
  androidBackground: string;
  headingSubText: string;
  brandeisBlueLight: string;
  disabledButton: string;
  disabledButtonText: string;
  linearGradientColor08: string;
  placeholderTextColor: string;
  checkBoxLabel: string;
  phoneInputBackground: string;
  textInputColor: string;
  label: string;
  error: string;
  checkBoxBorder: string;
  emptyProgressAreaBackground: string;
};

export const defaultTheme: AppTheme = {
  primaryText: colors.black,
  primaryButtonText: colors.white,
  subText: colors.black64PercentAlpha,
  linearGradientColor1: colors.malachite,
  linearGradientColor2: colors.brandeisBlue,
  lightButton: colors.black2PercentAlpha,
  borderColor: colors.black1PercentAlpha,
  headingText: colors.chineseBlack,
  androidBackground: colors.antiFlashWhite,
  headingSubText: colors.darkCharcoal,
  brandeisBlueLight: colors.brandeisBlueLight,
  disabledButton: colors.brightGray,
  disabledButtonText: colors.spanishGray,
  linearGradientColor08: colors.malachite08,
  placeholderTextColor: colors.gray,
  checkBoxLabel: colors.darkLiver,
  phoneInputBackground: colors.lotion,
  textInputColor: colors.eerieBlack,
  label: colors.graniteGray,
  error: colors.coralReef,
  checkBoxBorder: colors.chineseSilver,
  emptyProgressAreaBackground: colors.blackPoint5PercentAlpha,
};

export const darkTheme: AppTheme = {
  primaryText: colors.black,
  primaryButtonText: colors.white,
  subText: colors.black64PercentAlpha,
  linearGradientColor1: colors.malachite,
  linearGradientColor2: colors.brandeisBlue,
  lightButton: colors.black2PercentAlpha,
  borderColor: colors.black1PercentAlpha,
  headingText: colors.chineseBlack,
  androidBackground: colors.antiFlashWhite,
  headingSubText: colors.darkCharcoal,
  brandeisBlueLight: colors.brandeisBlueLight,
  disabledButton: colors.brightGray,
  disabledButtonText: colors.spanishGray,
  linearGradientColor08: colors.malachite08,
  placeholderTextColor: colors.gray,
  checkBoxLabel: colors.darkLiver,
  phoneInputBackground: colors.lotion,
  textInputColor: colors.eerieBlack,
  label: colors.graniteGray,
  error: colors.coralReef,
  checkBoxBorder: colors.chineseSilver,
  emptyProgressAreaBackground: colors.blackPoint5PercentAlpha,
};
