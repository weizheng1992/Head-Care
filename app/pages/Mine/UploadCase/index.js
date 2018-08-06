import React, { Component } from "react";

import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListView
} from "react-native";
import BasePage from "../../../components/BasePage";
import { screen } from "../../../until";
import { color } from "../../../constants";
import Button from "../../../components/Button";
import Radio from "../../../components/Radio";
import UploadImg from "./UploadImg";

export default class PatientManagement extends BasePage {
  static navigationOptions = ({ navigation }) => ({
    title: "上传病例"
  });

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  onModal = () => {
    this.setState({ visible: true });
  };
  //modal 隐藏
  onCancel = () => {
    this.setState({ visible: false });
  };

  //上传照片item点击
  onUploadClick = () => {
    alert("a");
  };

  _renderRow = data => {
    return (
      <View style={styles.radioItem}>
        <Radio itemStyle={styles.radio} selected={false} label={"*宝田"} />
      </View>
    );
  };

  _renderFooter = () => {
    const { navigate } = this.props.navigation;
    return (
      <Button
        onPress={this.onModal}
        style={styles.BtnTxt}
        containerStyle={styles.containerStyle}
        text={"上传病例"}
      />
    );
  };
  renderComponent() {
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 != row2
    });
    const { visible } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>就诊人管理</Text>
        </View>
        <ListView
          ref={listView => {
            this._listView = listView;
          }}
          dataSource={ds.cloneWithRows([1, 2])}
          renderRow={this._renderRow}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          style={styles.peoplelist}
          renderFooter={this._renderFooter}
        />
        <UploadImg visible={visible} onCancel={this.onCancel} onUploadClick={this.onUploadClick}/>
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
  peoplelist: {},
  radioItem: {
    height: 60,
    justifyContent: "center",
    borderColor: color.border,
    borderBottomWidth: screen.onePixel
  },
  radio: {
    marginRight: 12
  },
  containerStyle: {
    backgroundColor: color.theme,
    height: 40,
    justifyContent: "center",
    margin: 12
  },
  BtnTxt: {
    fontSize: 14,
    color: "#fff",
    alignSelf: "center"
  }
});
