import React from "react";

import { CustomCachedImage } from "react-native-img-cache";

import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress/Pie";

const CacheImg = ({ uri, styles={} }) => (
  <CustomCachedImage
    component={Image}
    source={{ uri: uri }}
    indicator={ProgressBar}
    style={styles}
  />
);

export default CacheImg;