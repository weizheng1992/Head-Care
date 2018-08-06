import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { screen } from "../until";
import { color } from "../constants";

const ImgItemView = ({ img, icon, title, tips, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <View style={styles.itemImg}>
      {icon ? <Icon name={icon} size={25} color={color.secondary} /> : null}
      {img ? (
        <Image source={require("../img/test.jpeg")} style={styles.img} />
      ) : null}
    </View>
    <View style={styles.itemTitle}>
      <Text>{title}</Text>
    </View>
    {tips ? (
      <View style={styles.itemTips}>
        <Text style={styles.tipsTxt}>{tips}</Text>
      </View>
    ) : null}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginLeft: 12,
    borderColor: color.border,
    borderBottomWidth: screen.onePixel,
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  itemImg: {
    width: 60,
    justifyContent: "center"
  },
  img: {
    width: 25,
    height: 25,
    resizeMode: "contain"
  },
  itemTitle: {
    flex: 1
  },
  itemTips: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 12
  },
  tipsTxt: {
    fontSize: 12,
    color: color.secondary
  }
});

export default ImgItemView;
