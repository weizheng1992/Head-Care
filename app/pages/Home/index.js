import React from "react";
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
  // static navigationOptions = navigation => ({
  //   title: "Head & Care",
  //   headerRight: (
  //     <Icon.Button
  //       name="md-search"
  //       backgroundColor="transparent"
  //       underlayColor="transparent"
  //       activeOpacity={0.8}
  //       size={25}
  //       color="#666"
  //       onPress={() => {
  //         navigation.state.params.handleCheck();
  //       }}
  //     />
  //   )
  // });

  _renderRow = (data, index) => {
    return (
      <View style={styles.cellStyle}>
        <Image
          source={require(`../../img/recommand_img01.png`)}
          style={styles.doctorImg}
        />
        <Text style={styles.doctorName}>是就送中北国太电</Text>
        <Text style={styles.doctorInfo}>
          爱神的箭卡三等奖卡还是空间的哈萨克记得哈加快速度哈
        </Text>
      </View>
    );
  };
  _renderRowService = data => {
    return (
      <View style={styles.serviceCell}>
        <Image
          source={require("../../img/recommand_img01.png")}
          style={styles.serviceImg}
        />
        <View style={styles.serviceTxtView}>
          <Text style={styles.serviceTxt}>儿童近视眼恢复</Text>
        </View>
      </View>
    );
  };
  renderComponent() {
    const { dataSource } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.health}>
          <View style={styles.healthLeft}>
            <Image
              source={require("../../img/people.png")}
              style={styles.healthImg}
            />
            <Text style={styles.healthName}>健康管家-刘欣雨</Text>
          </View>
          <View style={styles.healthRight}>
            <Image source={require("../../img/today_message.png")} />
            <Image
              source={require("../../img/today_phone.png")}
              style={styles.phoneImg}
            />
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleTxt}>今日推荐</Text>
        </View>
        <ListView
          dataSource={dataSource}
          renderRow={this._renderRow}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        />
        <View style={styles.title}>
          <Text style={styles.titleTxt}>我的服务</Text>
        </View>
        <ListView
          dataSource={dataSource}
          renderRow={this._renderRowService}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        />
        <View style={styles.healthCounseling}>
          <View style={styles.counselingLeft}>
            <Text style={styles.counselingTitle}>健康资讯</Text>
          </View>
          <View style={styles.counselingRight}>
            <Text style={styles.counselingMore}>更多</Text>
          </View>
        </View>
        <View style={styles.healthCounselList}>
          <View style={styles.healthCounselCell}>
            <View style={styles.healthCounselCellLeft}>
              <View style={styles.healthCounselTitleView}>
                <Text style={styles.healthCounselTitle}>
                  资及样：观大绝天书人好亲外少一然说奖；则人惊又人自推未。场麽红冷吃起、可做一？市资不尽往来各种是班叫人。
                </Text>
              </View>
              <View style={styles.healthCounselInfoView}>
                <Text style={styles.healthCounselInfo}>
                  哈哈哈 <Text style={styles.healthCounselDate}>· 8-30</Text>
                </Text>
              </View>
            </View>
            <Image
              source={require("../../img/myservice04.png")}
              style={styles.healthCounselImg}
            />
          </View>
          <View style={styles.healthCounselCell}>
            <View style={[styles.healthCounselCellLeft, styles.noneBorder]}>
              <View style={styles.healthCounselTitleView}>
                <Text style={styles.healthCounselTitle}>
                  资及样：观大绝天书人好亲外少一然说奖；则人惊又人自推未。场麽红冷吃起、可做一？市资不尽往来各种是班叫人。
                </Text>
              </View>
              <View style={styles.healthCounselInfoView}>
                <Text style={styles.healthCounselInfo}>
                  哈哈哈 <Text style={styles.healthCounselDate}>· 8-30</Text>
                </Text>
              </View>
            </View>
            <Image
              source={require("../../img/myservice04.png")}
              style={styles.healthCounselImg}
            />
          </View>
        </View>
        <View style={styles.healthCounseling}>
          <View style={styles.counselingLeft}>
            <Text style={styles.counselingTitle}>健康咖咖秀</Text>
          </View>
          <View style={styles.counselingRight}>
            <Text style={styles.counselingMore}>更多</Text>
          </View>
        </View>
        <ListView
          dataSource={dataSource}
          renderRow={this._renderRow}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        />
        <View style={styles.healthCounseling}>
          <View style={styles.counselingLeft}>
            <Text style={styles.counselingTitle}>健康自测</Text>
          </View>
          <View style={styles.counselingRight}>
            <Text style={styles.counselingMore}>更多</Text>
          </View>
        </View>
        <View style={styles.healthTest}>
          <View style={styles.healthTestCel}>
            <Image
              source={require("../../img/recommand_img01.png")}
              style={styles.healthTestImg}
            />
            <View style={styles.healthTestTxtView}>
              <Text style={styles.serviceTxt}>儿童近视眼恢复</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  title: {
    height: 60,
    justifyContent: "center",
    marginLeft: 16
  },
  titleTxt: {
    fontSize: 20,
    color: "#000"
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
    width: 210,
    marginLeft: 16,
    height: 230,
    backgroundColor: "#fff",
    borderRadius: 5
  },
  doctorImg: {
    width: 210,
    height: 130,
    resizeMode: "contain"
  },
  doctorName: {
    padding: 12,
    paddingTop: 16,
    fontSize: 16,
    color: "#000"
  },
  doctorInfo: {
    padding: 12,
    paddingTop: 0,
    fontSize: 14,
    color: "#9B9B9B"
  },

  health: {
    margin: 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 4
  },
  healthLeft: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  },
  healthRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  healthImg: {
    width: 37,
    height: 37,
    resizeMode: "contain",
    borderRadius: 18.5,
    marginRight: 12
  },
  healthName: {
    color: "#666666",
    fontSize: 14
  },
  phoneImg: {
    marginLeft: 24
  },
  serviceCell: {
    width: 310,
    height: 130,
    marginLeft: 16,
    borderRadius: 5
  },
  serviceImg: {
    width: 310,
    height: 130,
    resizeMode: "cover",
    borderRadius: 5
  },
  serviceTxtView: {
    width: 310,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 5,
    position: "absolute"
  },
  serviceTxt: {
    color: "#fff",
    fontSize: 20
  },
  healthCounseling: {
    flexDirection: "row",
    margin: 16,
    marginTop: 40
  },
  counselingLeft: {
    flex: 1
  },
  counselingRight: {
    flex: 1,
    alignItems: "flex-end"
  },
  counselingTitle: {
    fontSize: 20,
    color: "#000"
  },
  counselingMore: {
    color: "#F57F17",
    fontSize: 14
  },
  healthCounselList: {
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: "#fff",
    borderRadius: 5
  },
  healthCounselCell: {
    flexDirection: "row"
  },
  healthCounselCellLeft: {
    flex: 1,
    paddingBottom: 16,
    borderColor: color.border,
    borderBottomWidth: screen.onePixel
  },
  healthCounselTitleView: {
    height: 50,
    overflow: "hidden",
    margin: 16
  },
  healthCounselTitle: {
    fontSize: 18,
    color: "#000"
  },
  healthCounselInfoView: {
    marginLeft: 16,
    height: 22
  },
  healthCounselInfo: {
    fontSize: 12,
    color: "#525252"
  },
  healthCounselDate: {
    color: "#9B9B9B"
  },
  healthCounselImg: {
    width: 90,
    height: 90,
    resizeMode: "cover",
    marginTop: 16,
    marginRight: 16
  },
  noneBorder: {
    borderBottomWidth: 0
  },
  healthTest:{
    margin:16,
  },
  healthTestCel:{
    width:screen.width-16*2,
  },
  healthTestImg:{
    width:screen.width-16*2,
    height:90,
    borderRadius: 5,
  },
  healthTestTxtView:{
    width:screen.width-16*2,
    height:90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 5,
    position: "absolute"
  }
});
