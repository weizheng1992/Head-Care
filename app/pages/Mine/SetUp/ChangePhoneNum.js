import React, { Component } from "react";

import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert
} from "react-native";
import BasePage from "../../../components/BasePage";
import { screen, Toast } from "../../../until";
import { color } from "../../../constants";
import TextInputLineView from "../../../components/TextInputLineView";
import CountDownButton from "../../../components/CountDownButton";
import Button from "../../../components/Button";

export default class ChangePhoneNum extends BasePage {
  static navigationOptions = ({ navigation }) => ({
    title: "修改手机号"
  });

  constructor(props) {
    super(props);
    this.state = {
      phoneNum: "",
      visible: false
    };
  }

  componentDidMount() {}

  onChangePhoneNum = num => {
    this.setState({ phoneNum: num });
  };

  //2 秒后随机模拟获取验证码成功或失败的情况
  _requestAPI = shouldStartCounting => {
    this.setState({ visible: true });
    Toast.showShort(`验证码已发送，注意查收哦！`);
    setTimeout(() => {
      const requestSucc = Math.random() + 0.5 > 1;
      console.log("requestSucc", requestSucc);
      shouldStartCounting && shouldStartCounting(requestSucc);
    }, 1000);
  };

  renderComponent() {
    const { phoneNum, visible } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>验证旧手机号</Text>
        </View>

        <TextInputLineView
          label={"手机号"}
          tips={"请输入完整的手机号"}
          keyboardType={"phone-pad"}
          onChange={this.onChangePhoneNum}
        />

        <TextInputLineView
          label={"验证码"}
          keyboardType={"numeric"}
          onChange={this.onChangePhoneNum}
          rightView={
            <CountDownButton
              style={styles.countDown}
              textStyle={{ color: color.Major }}
              timerTitle={"获取验证码"}
              enable={phoneNum.length > 10}
              onClick={shouldStartCounting => {
                this._requestAPI(shouldStartCounting);
              }}
              timerEnd={() => {
                console.log("倒计时结束");
              }}
            />
          }
        />
        <Button
          onPress={() => {}}
          style={styles.bottomBtnTxt}
          containerStyle={styles.bottomBtn}
          text={"下一步"}
        />
        <View style={styles.toast}>
          <View style={styles.toastTxtView}>
            <Text style={styles.toastTxt}>什么什么的</Text>
          </View>
        </View>
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
    marginLeft: 12,
    paddingTop: 25,
    paddingBottom: 20,
    borderColor: color.border,
    borderBottomWidth: screen.onePixel,
    fontSize: 15,
    color: color.Major
  },
  countDown: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: color.border,
    borderWidth: screen.onePixel
  },
  bottomBtn: {
    marginTop: 25,
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: "#fff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: color.border,
    borderWidth: screen.onePixel
  },
  bottomBtnTxt: {
    fontSize: 14,
    color: color.Major
  },
  toast: {
    position: "absolute",
    width: screen.width,
    height: screen.height,
    alignItems: "center",
    justifyContent: "center"
  },
  toastTxtView: {
    position: "absolute",
    // top: screen.height / 2 - 20,
    bottom:60,
    justifyContent: "center",
    height: 40,
    backgroundColor: "red",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5
  },
  toastTxt: {
    color: "#fff"
  }
});
