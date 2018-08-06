import React, { Component } from "react";

import { View, Image, StyleSheet } from "react-native";
import BasePage from "../../components/BasePage";
import Icon from "react-native-vector-icons/Ionicons";
import ImgItemView from "../../components/ImgItemView";
export default class Mine extends BasePage {
  static navigationOptions = navigation => ({
    title: "Head & Care",
    headerRight: (
      <Icon.Button
        name="md-options"
        backgroundColor="transparent"
        underlayColor="transparent"
        activeOpacity={0.8}
        size={25}
        color="#666"
        onPress={() => {
          navigation.navigation.navigate("SetUp");
        }}
      />
    )
  });

  toPage = index => {
    const { navigate } = this.props.navigation;
    switch (index) {
      case 0:
        navigate("PatientManagement");
        break;
      case 1:
        navigate("UploadCase");
        break;
      case 2:
        navigate("PatientManagement");
        break;
      case 3:
        navigate("Feedback");
        break;
    }
    // navigate("PatientManagement");
  };

  renderComponent() {
    const list = [
      { icon: "ios-people-outline", title: "就诊人管理", tips: "添加就诊人" },
      { icon: "md-cloud-outline", title: "上传病例", tips: "" },
      { icon: "md-copy", title: "我的订单", tips: "" },
      { icon: "md-copy", title: "意见反馈", tips: "反馈得礼品" }
    ];

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../img/people.png")}
            style={styles.headImg}
          />
        </View>
        {list.map((l, i) => (
          <ImgItemView {...l} onPress={() => this.toPage(i)} key={i} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    height: 100,
    backgroundColor: "#ddd",
    justifyContent: "center",
    paddingLeft: 20
  },
  headImg: {
    width: 50,
    height: 50
  }
});
