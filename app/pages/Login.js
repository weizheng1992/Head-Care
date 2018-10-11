import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import BasePage from "../components/BasePage";
import {StackActions,NavigationActions} from 'react-navigation';
import { screen, Toast ,BackHandler} from "../until";
import { color } from "../constants";
import TextInputLineView from "../components/TextInputLineView";
import CountDownButton from "../components/CountDownButton";
import Button from "../components/Button";
import  {USER} from "../constants/api";


export default class Login extends BasePage {
  static navigationOptions = ({ navigation }) => {
    // const name = navigation;
    console.log(navigation.state.params.left);
    if(navigation.state.params.left){
            return{
        title:'登录',
        headerLeft:null
      }
    }
    return{
      title:'登录'
    }
  }
    

  constructor(props) {
    super(props);
    this.state = {
      phoneNum: "",
      visible: false
    };
  }

  componentDidMount() {

  }

  onChangePhoneNum = num => {
    this.setState({ phoneNum: num });
  };

  //2 秒后随机模拟获取验证码成功或失败的情况
  _requestAPI = shouldStartCounting => {
    this.setState({ visible: true });
    Toast.showShort(`验证码已发送，注意查收哦！`);
    request.post(USER.token,{mobilePhone:this.state.phoneNum}).then((data)=>{
      console.log('_____--------',data)
        if(data.code===1000){
          shouldStartCounting && shouldStartCounting(true);
        }
    });
    // setTimeout(() => {
     
    //   shouldStartCounting && shouldStartCounting(requestSucc);
    // }, 1000);
  };

  onLogin=()=>{
    const { navigation } = this.props;

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Main', params: {left:true}})],
    });
    navigation.dispatch(resetAction);
    // navigate('Main')
  }

  renderComponent() {
    const { phoneNum, visible } = this.state;
    return (
      <View style={styles.container}>
        <TextInputLineView
          label={"手机号"}
          tips={"请输入完整的手机号"}
          // keyboardType={"phone-pad"}
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
          onPress={this.onLogin}
          style={styles.bottomBtnTxt}
          containerStyle={styles.bottomBtn}
          text={"确定"}
        />
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
    bottom: 60,
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
