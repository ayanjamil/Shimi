import { Platform, StatusBar } from "react-native";
import { theme } from "galio-framework";

export const StatusHeight = StatusBar.currentHeight;
export const HeaderHeight = theme.SIZES.BASE * 3.5 + (StatusHeight || 0);
export const iPhoneX = () =>
  Platform.OS === "ios" && (height === 812 || width === 812);
export const generateUniqueImageName = () => {
  var unix = Math.round(+new Date() / 1000);
  return `${unix}.jpg`;
};
