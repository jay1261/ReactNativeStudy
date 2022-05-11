import { CardStyleInterpolators } from "@react-navigation/stack";

const colors = {
  // 사용할 color 정의
  white: "#ffffff",
  black: "#000000",
  grey_0: "#d5d5d5",
  grey_1: "#a6a6a6",
  red: "#e84118",
  blue: "#1c98f7",
};

//theme 정의
export const theme = {
  background: colors.white,
  text: colors.black,
  errorText: colors.red,
  
  imageBackground: colors.grey_0,
  imageButtonBackground: colors.grey_1,
  imageButtonIcon: colors.white,

  label: colors.grey_1,
  inputPlaceholder: colors.grey_1,
  inputBorder: colors.grey_1,

  buttonBackground: colors.blue,
  buttonTitle: colors.white,
  buttonUnfilledTitle: colors.blue,

  headerTintColor: colors.black,

  spinnerBackground: colors.black,
  spinnerIndicator: colors.white,


};
