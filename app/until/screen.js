import { Dimensions, Platform, PixelRatio } from "react-native";

const deviceWidth = Dimensions.get("window").width; //设备的宽度
const deviceHeight = Dimensions.get("window").height; //设备的高度
const defaultPixel = 2;
const defaultW = Platform.OS === "ios" ? 750 : 720;
const defaultH = Platform.OS === "ios" ? 1334 : 1280;
const w2 = defaultW / defaultPixel;
const h2 = defaultH / defaultPixel;
const scale = Math.min(deviceHeight / h2, deviceWidth / w2);

export default {
  width: deviceWidth,
  height: deviceHeight,
  onePixel: 1 / PixelRatio.get(),
  statusBarHeight: Platform.OS === "ios" ? 20 : 0,
  scaleSize: size => {
    size = Math.round(size * scale + 0.5);
    return size / defaultPixel;
  }
};
