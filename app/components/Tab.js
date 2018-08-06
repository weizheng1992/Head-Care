import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";

import { screen } from "../until";
import { color } from "../constants";

export default class Tab extends React.Component {
  renderItem = (route, index) => {
    console.log(this.props);
    const { navigation, jumpTo } = this.props;

    const focused = index === navigation.state.index;
    const colors = focused
      ? this.props.activeTintColor
      : this.props.inactiveTintColor;
    let TabScene = {
      focused: focused,
      route: route,
      tintColor: colors
    };
    return (
      <TouchableOpacity
        key={route.key}
        style={styles.tabItem}
        onPress={() => {
          jumpTo(route.key);
        }}
      >
        <View style={styles.tabItem}>
          {this.props.renderIcon(TabScene)}
          {focused ? (
            <Text
              style={{
                ...styles.tabText,
                marginTop: screen.scaleSize(10),
                color: colors
              }}
            >
              {this.props.getLabelText(TabScene)}
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const { navigation } = this.props;
    const { routes } = navigation.state;
    return (
      <View style={styles.tab}>
        {routes && routes.map((route, index) => this.renderItem(route, index))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tab: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: color.border,
    width: screen.width,
    height:
      Platform.OS === "ios" ? screen.scaleSize(90) : screen.scaleSize(100),
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#333333"
  },
  tabItem: {
    width: screen.scaleSize(100),
    alignItems: "center",
    justifyContent: "center"
  },
  tabText: {
    marginTop: screen.scaleSize(13),
    fontSize: 12,
    color: color.Major
  },
  tabTextChoose: {
    color: color.Major
  },
  tabImage: {
    width: screen.scaleSize(42),
    height: screen.scaleSize(42)
  }
});
