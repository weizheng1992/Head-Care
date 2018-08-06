import React, { Component } from "react";

import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
export default class Home extends Component {
  static navigationOptions = {
    title: "Head & Care",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-card" size={25} color={tintColor} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => {
            this.props.navigation.navigate("Details");
          }}
        >
          <Text style={{ color: "white" }}>首页</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  button: {
    width: 120,
    height: 45,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4398ff"
  },
  tabBarIcon: {
    width: 21,
    height: 21
  }
});
