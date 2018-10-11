import React from "react";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import DeviceInfo from "react-native-device-info";
import { color } from "../../constants";
import { screen } from "../../until";
import BasePage from "../../components/BasePage";
import ChatView from "./ChatView";
import { STUDYFLOW } from "../../constants/api";
export default class LearningFlow extends BasePage {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      answerList: [],
      answerData: [],
      answerIds: [],
      isEnd: false
    };
  }

  componentDidMount() {
    this.requestQuestion([]);
  }

  requestQuestion = tagDictIds => {
    let obj = { txt: "", type: "" ,managerInfo:''};
    request.post(STUDYFLOW.question, { tagDictIds: tagDictIds }).then(res => {
      console.log("##########", res);
      if (res.data.end) {
        request
          .get(STUDYFLOW.managerInfo, { deviceId: DeviceInfo.getUniqueID() })
          .then(res => {
            console.log('*******',res)
            obj.managerInfo=res.data;
            obj.type=0
            let list = this.state.data;
            list.push(obj);
            this.setState({data:list})
          });
      } else {
        obj.txt = res.data.studyFlowQuestion.questionDesc;
        obj.type = 0;
        let list = this.state.data;
        list.push(obj);
        this.setState({
          data: list,
          answerList: res.data.studyFlowAnswers
        });
      }
    });
  };

  onPressAnswer = item => {
    let obj = { tagDictId: "", tagValue: "" };
    let objList = { txt: "", type: "" };
    obj.tagDictId = item.tagDictId;
    obj.tagValue = item.answerDesc;
    objList.txt = item.answerDesc;
    objList.type = 1;
    let { answerData, answerIds, data } = this.state;
    answerData.push(obj);
    answerIds.push(item.tagDictId);
    data.push(objList);
    this.setState({ answerData, answerIds, data });
    this.requestQuestion(answerIds);
  };

  render() {
    const { data, answerList } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView
            style={styles.scroll}
            ref={scroll => (this._scroll = scroll)}
            onContentSizeChange={(contentWidth, contentHeight) => {
              if (contentHeight > screen.height - 300) {
                this._scroll && this._scroll.scrollToEnd();
              }
            }}
          >
            {data.map((d, i) => (
              <ChatView type={d.type} key={i} txt={d.txt}  managerInfo={d.managerInfo}/>
            ))}
          </ScrollView>
        </View>
        <View style={styles.answerContainer}>
          <View style={styles.answer}>
            {answerList.map((a, i) => (
              <TouchableOpacity
                key={i}
                style={styles.answerTxtView}
                onPress={() => this.onPressAnswer(a)}
              >
                <Text style={styles.answerTxt}>
                  {a.answerDesc}
                  {a.unit}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef"
  },
  scroll: {
    backgroundColor: "#efefef"
  },
  scrollContainer: {
    height: screen.height - 300,
    padding: 20
  },
  answerContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: 300,
    paddingRight: 16,
    paddingBottom: 16
  },
  answer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexWrap: "wrap"
  },
  answerTxtView: {
    width: 96,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderColor: color.theme,
    borderWidth: screen.onePixel,
    borderRadius: 15,
    marginLeft: 16,
    marginTop: 16
  },
  answerTxt: {
    color: color.theme,
    fontSize: 16
  }
});
