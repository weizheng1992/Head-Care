import React from "react";
import { View, StyleSheet } from "react-native";
import BasePage from "../../../components/BasePage";
import ImgItemView from "../../../components/ImgItemView";
import Button from "../../../components/Button";
import { color } from "../../../constants";
import { screen } from "../../../until";
export default class SetUp extends BasePage {
  static navigationOptions = ({ navigation }) => ({
    title: "设置"
  });

  constructor(props) {
    super(props);
    this.state = {};
  }

  toPage=(index)=>{
    const { navigate } = this.props.navigation;
    switch (index) {
      case 1:
        // navigate("ChangePhoneNum");
        break;
      case 2:
        navigate("ChangePhoneNum");
        break;
      case 3:
        navigate("Feedback");
        break;
    }
  }
  

  renderComponent() {
    return (
      <View style={styles.container}>
        <ImgItemView
          icon={"logo-designernews"}
          title={"个人资料"}
          onPress={() => this.toPage(1)}
        />
        <ImgItemView
          icon={"ios-phone-portrait-outline"}
          title={"修改手机号"}
          onPress={() => this.toPage(2)}
        />
        <ImgItemView
          icon={"ios-key-outline"}
          title={"修改密码"}
          onPress={() => this.toPage(3)}
        />
        <Button
          onPress={() => {}}
          style={styles.bottomBtnTxt}
          containerStyle={styles.bottomBtn}
          text={"退出登录"}
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
  bottomBtn: {
    position: "absolute",
    bottom: 40,
    backgroundColor: color.theme,
    alignItems: "center",
    justifyContent: "center",
    width: screen.width - 12 * 2,
    marginLeft: 12,
    marginRight: 12,
    height: 40,
    borderRadius: 20
  },
  bottomBtnTxt: {
    color: "#fff",
    fontSize: 14
  }
});
