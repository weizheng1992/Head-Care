import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput
} from "react-native";
import { color } from "../constants";

// startAnimation = () => {
//   Animated.parallel([
//     Animated.timing(this.state.move, {x
//       toValue: {
//         x: 0,
//         y: -40
//       },
//       duration: 1000,
//       delay: 100
//     }),
//     Animated.timing(
//       this.state.fadeAnim, // 动画中的变量值
//       {
//         toValue: 1 // 透明度最终变为1，即完全不透明
//       }
//     )
//   ]).start();
// };

const TextInputView = ({ placeholderName, tips }) => (
  <View style={styles.inputItem}>
    <View style={styles.inputTxt}>
      <TextInput
        ref={ref => {
          this.textInput = ref;
        }}
        multiline
        placeholder={placeholderName}
        placeholderTextColor={"#666"}
        style={styles.input}
        onFocus={this.startAnimation}
      />
      {/* <Animated.Text
      style={{
        opacity: this.state.fadeAnim, //透明度动画
        transform: this.state.move.getTranslateTransform()
      }}
    >
      姓名
    </Animated.Text> */}
    </View>

    <View style={styles.inputTips}>
      <Text style={styles.tipsTxt}>{tips}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  inputItem: {
    marginBottom: 12
  },
  inputTxt: {
    paddingLeft: 12,
    paddingRight: 12,
    height: 60,
    backgroundColor: "#dbdbdb",

    justifyContent: "center"
  },
  input: {
    fontSize: 14
  },
  tipsTxt: {
    fontSize: 12,
    color: color.secondary,
    marginLeft: 12,
    marginTop: 6
  }
});

export default TextInputView;
