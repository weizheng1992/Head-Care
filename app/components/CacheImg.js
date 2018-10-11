import React from "react";

import { CustomCachedImage } from "react-native-img-cache";

import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress/Pie";

const CacheImg = ({ uri, styles={} }) => (
  <CustomCachedImage
    component={Image}
    source={{ uri: 'http://res.e-healcare.cn/oper/upload/b682b1b84df34159b2fff949ac922210.png' }}
    indicator={ProgressBar}
    style={styles}
  />
);

export default CacheImg;