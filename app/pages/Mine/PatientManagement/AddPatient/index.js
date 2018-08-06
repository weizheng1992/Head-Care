import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated
} from "react-native";
import BasePage from "../../../../components/BasePage";
import { screen } from "../../../../until";
import { color } from "../../../../constants";
import Button from "../../../../components/Button";
import Radio from "../../../../components/Radio";
import TextInputView from "../../../../components/TextInputView";

export default class AddPatient extends BasePage {
  static navigationOptions = ({ navigation }) => ({
    title: "添加就诊人"
  });

  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      move: new Animated.ValueXY({
        x: 0,
        y: 0
      })
    };
  }

  renderComponent() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text>输入就诊人信息</Text>
        </View>
        <View style={styles.formList}>
          <TextInputView placeholderName={"姓名"} tips={"请输入真实姓名"} />
          <View style={styles.radioItem}>
            <Radio itemStyle={styles.radio} selected={false} label={"男"} />
            <Radio itemStyle={styles.radio} selected={true} label={"女"} />
          </View>
          <TextInputView placeholderName={"年龄"} />
          <TextInputView
            placeholderName={"身份证号/社保卡号"}
            tips={"无社保卡请填写身份证号"}
          />
          <TextInputView
            placeholderName={"有无过敏（选填）"}
            tips={"请注明所有过敏源"}
          />
          <TextInputView
            placeholderName={"有无家族病史（选填）"}
            tips={"如有病史请注明"}
          />
          <TextInputView placeholderName={"既往病史（选填）"} />
          <Button
            onPress={() => {}}
            style={styles.BtnTxt}
            containerStyle={styles.containerStyle}
            text={"保存"}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    marginLeft: 12,
    paddingTop: 25,
    paddingBottom: 20,
    borderColor: color.border,
    borderBottomWidth: screen.onePixel,
    fontSize: 15,
    color: color.Major
  },
  formList: {
    padding: 12
  },

  radioItem: {
    flexDirection: "row",
    height: 60
  },
  radio: {
    width: 100,
    height: 60
  },
  containerStyle: {
    flex: 1,
    backgroundColor: color.theme,
    height: 40,
    justifyContent: "center"
  },
  BtnTxt: {
    fontSize: 14,
    color: "#fff",
    alignSelf: "center"
  }
});
