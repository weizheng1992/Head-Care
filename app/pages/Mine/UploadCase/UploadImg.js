import React, { Component } from "react";
import { Modal, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { color } from "../../../constants";
import { screen } from "../../../until";

const UploadImg = ({ visible, onCancel, onUploadClick }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onCancel}
  >
    <TouchableOpacity style={styles.container} onPress={onCancel}>
      <View style={styles.moadlContent}>
        <TouchableOpacity style={styles.item} onPress={() => onUploadClick(1)}>
          <View style={styles.left}>
            <Text style={styles.leftTxt}>从相册选择</Text>
          </View>
          <View style={styles.right}>
            <Text>
              <Icon name={"ios-image-outline"} size={25} />
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => onUploadClick(2)}>
          <View style={styles.left}>
            <Text style={styles.leftTxt}>拍摄新照片</Text>
          </View>
          <View style={styles.right}>
            <Text>
              <Icon name={"ios-camera-outline"} size={25} />
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={onCancel}>
          <Text style={styles.leftTxt}>取消</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end"
  },
  moadlContent: {
    height: 200,
    backgroundColor: "#fff"
  },
  item: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    paddingLeft: 12,
    paddingRight: 12,
    borderColor: color.border,
    borderBottomWidth: screen.onePixel
  },
  left: {
    flex: 1
  },
  right: {
    flex: 1,
    alignItems: "flex-end"
  },
  leftTxt: {
    fontSize: 15,
    color: color.Major
  }
});

export default UploadImg;
