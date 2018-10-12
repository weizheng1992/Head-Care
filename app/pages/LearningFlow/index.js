import React from "react";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TextInput
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
      isEnd: false,
      showTextInput: false,
      keyboardHeight: 0,
      scrollViewHeight: 0,
      keyboardStatus:null
    };
  }
  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
  }

  componentDidMount() {
    this.requestQuestion([]);
  }
  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  componentDidUpdate() {
    const { scrollViewHeight, keyboardHeight ,keyboardStatus} = this.state;
    console.log(scrollViewHeight)
    if (keyboardStatus===1) {
      this._scroll &&
        this._scroll.scrollTo({
          y: scrollViewHeight - keyboardHeight,
          animated: true
        });
    }else if(keyboardStatus===0){
      this._scroll &&
      this._scroll.scrollTo({
        y: scrollViewHeight - keyboardHeight*2,
        animated: true
      });
    }
  }

  keyboardWillShow = event => {
    this.setState({
      keyboardHeight: event.startCoordinates.height,
      keyboardStatus: 1
    });
  };

  keyboardWillHide = event => {
    this.setState({ keyboardStatus: 0 });
  };

  requestQuestion = tagDictIds => {
    let obj = { txt: "", type: "", managerInfo: "" };
    request.post(STUDYFLOW.question, { tagDictIds: tagDictIds }).then(res => {
      console.log("##########", res);
      if (res.data.end) {
        this.setState({ answerList: [] });
        request
          .get(STUDYFLOW.managerInfo, { deviceId: DeviceInfo.getUniqueID() })
          .then(res => {
            console.log("*******", res);
            obj.managerInfo = res.data;
            obj.type = 2;
            let list = this.state.data;
            list.push(obj);
            this.setState({ data: list });
            obj = { txt: "", type: "", managerInfo: "" };
            obj.txt = "请提供您的手机号码，以便我们为您 创建健康账号。";
            obj.type = 0;
            setTimeout(() => {
              list.push(obj);
              this.setState({ data: list, showTextInput: true });
            }, 500);
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
    const {
      data,
      answerList,
      showTextInput,
      keyboardHeight,
      keyboardStatus
    } = this.state;
    console.log("高度：", keyboardHeight);
    return (
      <View
        style={[
          styles.container,
          keyboardStatus
            ? { height: screen.height - keyboardHeight }
            : { height: screen.height }
        ]}
      >
        <View
          style={[
            styles.scrollContainer,
            showTextInput
              ? { height: screen.height - 60 }
              : { height: screen.height - 200 }
          ]}
        >
          <ScrollView
            style={styles.scroll}
            ref={scroll => (this._scroll = scroll)}
            keyboardDismissMode={"on-drag"}
            onContentSizeChange={(contentWidth, contentHeight) => {
              console.log("scroll", contentHeight, screen.height);
              if (contentHeight) {
                this._scroll && this._scroll.scrollToEnd();
              }
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                Keyboard.dismiss();
              }}
            >
              {data.map((d, i) => (
                <ChatView
                  type={d.type}
                  key={i}
                  txt={d.txt}
                  managerInfo={d.managerInfo}
                />
              ))}
            </TouchableOpacity>
            <View
              onLayout={e =>
                this.setState({ scrollViewHeight: e.nativeEvent.layout.y })
              }
            />
          </ScrollView>
        </View>
        {!showTextInput ? (
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
        ) : (
          <View style={styles.mobileContainer}>
            <TextInput placeholder="测试" style={styles.mobileInput} />
            <TouchableOpacity style={styles.mobileBtn}>
              <Text style={styles.mobileBtnTxt}>确认</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bgGray
  },
  scroll: {
    backgroundColor: color.bgGray,
    padding: 20,
    // marginBottom: 100,
  },
  scrollContainer: {
    // padding: 20,
    backgroundColor: color.bgGray
  },
  answerContainer: {
    height: 200,
    paddingRight: 16,
    paddingBottom: 16,
    position: "absolute",
    bottom: 0,
    width: screen.width,
    justifyContent: "flex-end",
    alignItems: "flex-end"
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
  },
  mobileContainer: {
    height: 40,
    paddingBottom: 16,
    position: "absolute",
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row",
    marginLeft: 16,
    marginRight: 16
  },
  mobileBtn: {
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd"
  },
  mobileInput: {
    width: screen.width - 16 * 2 - 100,
    backgroundColor: color.white,
    height: 40,
    padding: 12
  }
});
