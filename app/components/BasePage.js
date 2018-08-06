import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";

export default class BasePage extends React.Component {
  renderComponent() {}

  render() {
    return <SafeAreaView style={styles.main}>{this.renderComponent()}</SafeAreaView>;
  }
}


const styles= StyleSheet.create({
    main:{
        flex:1
    }
})