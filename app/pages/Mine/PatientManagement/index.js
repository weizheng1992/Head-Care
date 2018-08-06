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
import Icon from "react-native-vector-icons/Ionicons";
import { screen } from "../../../until";
import { color } from "../../../constants";
import Button from "../../../components/Button";

export default class PatientManagement extends BasePage {
  static navigationOptions = ({ navigation }) => ({
    title: "就诊人管理"
  });

  _renderRow = data => {
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.cardPeopleName}>
            <Text>*宝田 （1张卡）</Text>
          </View>
          <Image
            source={require("../../../img/test.jpeg")}
            style={styles.cardImg}
          />
        </View>
        <View style={styles.cardInfo}>
          <View style={styles.InfoTop}>
            <Image
              source={require("../../../img/test.jpeg")}
              style={styles.cardInfoImg}
            />
            <View style={styles.infoLeft}>
              <Text style={styles.cardName}>北京社保卡</Text>
            </View>
            <View style={styles.infoRight}>
              <Text style={styles.secondFont}>最近使用</Text>
            </View>
          </View>
          <Text style={styles.secondFont}>4444 4444 4444 4444</Text>
          <View />
        </View>
      </View>
    );
  };

  _renderFooter = () => {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        style={styles.bottomBtn}
        onPress={() => navigate("AddPatient")}
      >
        <Icon name="md-add" size={15} color={"#000"} />
        <View>
          <Text style={styles.btnTxt}>添加就诊人</Text>
        </View>
      </TouchableOpacity>
    );
  };
  renderComponent() {
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 != row2
    });
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
          style={styles.cardList}
          renderFooter={this._renderFooter}
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
  cardList: {
    flex: 1
  },
  card: {
    paddingLeft: 12,
    paddingRight: 12
  },
  cardHeader: {
    height: 60,
    alignItems: "center",
    flexDirection: "row"
  },
  cardPeopleName: {
    fontSize: 14,
    color: color.Major,
    flex: 1
  },
  cardImg: {
    width: 30,
    height: 30,
    resizeMode: "contain"
  },

  cardInfo: {
    backgroundColor: "#64B5F6",
    height: 80,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 12
  },
  InfoTop: {
    flexDirection: "row",
    marginBottom: 12
  },
  cardInfoImg: {
    width: 21,
    height: 21,
    resizeMode: "contain"
  },
  infoLeft: {
    flex: 1
  },
  infoRight: {
    flex: 1,
    alignItems: "flex-end"
  },
  cardName: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600"
  },
  secondFont: {
    fontSize: 14,
    color: "#fff"
  },
  bottomBtn: {
    borderStyle: "dashed",
    borderColor: color.Major,
    borderWidth: screen.onePixel,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
    marginRight: 12,
    flexDirection: "row"
  },
  btnTxt: {
    marginLeft: 12,
    fontSize: 14,
    color: color.Major
  }
});
