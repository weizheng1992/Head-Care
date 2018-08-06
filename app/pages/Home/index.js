import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListView,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BasePage from "../../components/BasePage";
import { screen } from "../../until";
import { color } from "../../constants";
const dataArray = [
  "page one",
  "page two",
  "page three",
  "page four",
  "page five",
  "page six"
];
export default class Home extends BasePage {
  constructor(props) {
    super(props);
    // 初始状态
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 != row2
    });
    this.state = {
      dataSource: ds.cloneWithRows(dataArray)
    };
  }
  static navigationOptions = navigation => ({
    title: "Head & Care",
    headerRight: (
      <Icon.Button
        name="md-search"
        backgroundColor="transparent"
        underlayColor="transparent"
        activeOpacity={0.8}
        size={25}
        color="#666"
        onPress={() => {
          navigation.state.params.handleCheck();
        }}
      />
    )
  });

  _renderRow = data => {
    return (
      <View style={styles.cellStyle}>
        <Image
          source={require("../../img/people.png")}
          style={styles.doctorImg}
        />
        <Text style={styles.doctorName}>title</Text>
        <Text style={styles.doctorInfo}>
          爱神的箭卡三等奖卡还是空间的哈萨克记得哈加快速度哈即可
        </Text>
      </View>
    );
  };

  renderComponent() {
    const { dataSource } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.title}>
          <Text>云诊室</Text>
        </View>
        <View style={styles.examine}>
          <View style={[styles.examineItem, styles.borderRight]}>
            <Image
              source={require("../../img/test.jpeg")}
              style={styles.examineItemImg}
            />
            <Text>图文问诊</Text>
          </View>
          <View style={[styles.examineItem, styles.borderRight]}>
            <Image
              source={require("../../img/test.jpeg")}
              style={styles.examineItemImg}
            />
            <Text>图文问诊</Text>
          </View>
          <View style={styles.examineItem}>
            <Image
              source={require("../../img/test.jpeg")}
              style={styles.examineItemImg}
            />
            <Text>图文问诊</Text>
          </View>
        </View>
        <View style={styles.title}>
          <Text>名医在线</Text>
        </View>
        <ListView
          ref={listView => {
            this._listView = listView;
          }}
          dataSource={dataSource}
          renderRow={this._renderRow}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        />
        <View style={styles.title}>
          <Text>专属服务</Text>
        </View>
        <View style={styles.examine}>
          <View style={[styles.examineItem, styles.borderRight]}>
            <Image
              source={require("../../img/test.jpeg")}
              style={styles.examineItemImg}
            />
            <Text>多学科会诊</Text>
          </View>
          <View style={[styles.examineItem, styles.borderRight]}>
            <Image
              source={require("../../img/test.jpeg")}
              style={styles.examineItemImg}
            />
            <Text>就医绿通</Text>
          </View>
          <View style={styles.examineItem}>
            <Image
              source={require("../../img/test.jpeg")}
              style={styles.examineItemImg}
            />
            <Text>健康管家</Text>
          </View>
        </View>
        <View style={styles.title}>
          <Text>工具</Text>
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
  title: {
    height: 60,
    justifyContent: "center",
    padding: 12,
    fontSize: 16
  },
  examine: {
    flexDirection: "row",
    borderColor: color.border,
    borderTopWidth: screen.onePixel,
    borderBottomWidth: screen.onePixel
  },
  examineItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 100
  },
  examineItemImg: {
    width: 30,
    height: 30,
    resizeMode: "contain"
  },
  borderRight: {
    borderColor: color.border,
    borderRightWidth: screen.onePixel
  },
  cellStyle: {
    width: 175,
    marginLeft: 12,
    height: 280,
    borderColor: color.border,
    borderWidth: screen.onePixel
  },
  doctorImg: {
    width: 174,
    height: 174,
    resizeMode: "contain"
  },
  doctorName: {
    padding: 12,
    paddingTop: 15,
    fontSize: 16
  },
  doctorInfo: {
    padding: 12,
    paddingTop: 0,
    fontSize: 12,
    color: "#666"
  }
});
