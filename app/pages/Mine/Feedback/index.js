import React, { Component } from "react";

import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import BasePage from "../../../components/BasePage";
import Icon from "react-native-vector-icons/MaterialIcons";
import { screen } from "../../../until";
import { color } from "../../../constants";
import Button from "../../../components/Button";
import TextInputLineView from "../../../components/TextInputLineView";
import FeedType from "./FeedType";

export default class PatientManagement extends BasePage {
  static navigationOptions = ({ navigation }) => ({
    title: "意见反馈"
  });

  constructor(props) {
    super(props);
    this.state = {
      feedType: 1
    };
  }

  renderComponent() {
    const { feedType } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text>反馈类型</Text>
        </View>
        <FeedType
          data={["功能建议", "使用疑问", "异常问题"]}
          feedType={feedType}
        />
        <View style={styles.header}>
          <Text>反馈内容</Text>
        </View>
        <View style={styles.feedInfo}>
          <TextInput
            multiline={true}
            placeholder={"请输入需要反馈的问题详情"}
            style={styles.feedTxt}
            placeholderTextColor={color.secondary}
          />
        </View>
        <TextInputLineView label={"微信/QQ/邮件"} tips={"方便为您提供反馈"} />
        <View style={styles.uploadItem}>
          <View style={styles.imgItem}>
            <Text>
              <Icon name={"md-photos"} size={30} color={color.secondary} />
            </Text>
          </View>
        </View>
        <Button
          onPress={() => {}}
          style={styles.bottomBtnTxt}
          containerStyle={styles.bottomBtn}
          text={"提问"}
        />
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
  feedInfo: {
    margin: 12
  },
  feedTxt: {
    borderColor: color.border,
    borderWidth: screen.onePixel,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    height: 120
  },
  uploadItem: {
    margin: 12,
    flexDirection: "row"
  },
  imgItem: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: color.border,
    borderWidth: screen.onePixel,
    borderStyle: "dashed"
  },
  bottomBtn: {
    marginTop: 25,
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: color.theme,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  bottomBtnTxt: {
    fontSize: 14,
    color: "#fff"
  }
});
