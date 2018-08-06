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
import { screen } from "../../../until";
import { color } from "../../../constants";
import Button from "../../../components/Button";

export default class FeedType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedType: this.props.feedType
    };
  }

  onChangeType = index => {
    this.setState({ feedType: index });
  };

  render() {
    const { data } = this.props;
    const { feedType } = this.state;
    return (
      <View style={styles.feedType}>
        {data.map((d, i) => (
          <Button
            onPress={() => this.onChangeType(i + 1)}
            style={styles.BtnTxt}
            key={i}
            containerStyle={[
              styles.containerStyle,
              i + 1 === feedType ? styles.btnSelected : styles.btnUnSelect
            ]}
            text={d}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  feedType: {
    flexDirection: "row",
    marginLeft: 12,
    marginTop: 12,
    justifyContent: "space-between"
  },
  containerStyle: {
    width: 100,
    height: 40,
    justifyContent: "center",
    borderWidth: screen.onePixel,
    alignItems: "center"
  },
  btnSelected: {
    borderColor: color.Major,
    backgroundColor: "#ece8e7"
  },
  btnUnSelect: {
    borderColor: color.border,
    backgroundColor: "#fff"
  },
 
});
