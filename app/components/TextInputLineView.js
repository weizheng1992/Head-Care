import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { screen } from "../until";
import { color } from "../constants";

export default class TextInputLineView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputToggle: false
    };
  }

  onBlurInput = () => {
    if (!this.state.inputValue) {
      this.setState({ inputToggle: false });
    }
  };
  onChangeTextInput = value => {
    if (value) {
      this.setState({ inputToggle: true });
    } else {
      this.setState({ inputToggle: false });
    }
    this.props.onChange(value);
  };

  render() {
    const { inputToggle } = this.state;
    const { label, tips, rightView, keyboardType } = this.props;
    return (
      <View style={styles.inputLineItem}>
        <View style={styles.inputView}>
          <View style={styles.txtView}>
            <TextInput
              placeholder={label}
              keyboardType={keyboardType || "default"}
              style={styles.inputTxt}
              placeholderTextColor={color.secondary}
              onBlur={this.onBlurInput}
              onChangeText={this.onChangeTextInput}
            />
          </View>
          {rightView}

          {inputToggle ? <Text style={styles.label}>{label}</Text> : null}
        </View>
        <View style={styles.inputTips}>
          <Text style={styles.tipsTxt}>{tips}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputLineItem: {
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12
  },
  inputView: {
    borderColor: color.Major,
    borderWidth: screen.onePixel,
    paddingLeft: 12,
    paddingRight: 12,
    height: 60,
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row"
  },
  txtView: {
    flex: 1
  },
  inputTxt: {
    fontSize: 14,
    color: color.Major
  },
  label: {
    backgroundColor: "#fff",
    position: "absolute",
    top: -8,
    left: 12,
    fontSize: 12
  },
  inputTips: {
    marginLeft: 12,
    marginTop: 5
  },
  tipsTxt: {
    fontSize: 12,
    color: color.secondary
  }
});
