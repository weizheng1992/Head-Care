import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Radio = ({ selected, onPress, itemStyle,label }) => (
  <TouchableOpacity style={[styles.radio, itemStyle]} onPress={onPress}>
    <View style={styles.radioTxtView}>
      <Text style={styles.radioTxt}>
        <Icon
          name={
            selected
              ? "ios-radio-button-on-outline"
              : "ios-radio-button-off-outline"
          }
          size={20}
          color={selected?'#F57C00':'#333'}
        />
      </Text>
    </View>
    <View style={styles.radioTxtView}>
      <Text style={styles.radioTxt}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({

  radio: {
    flexDirection: "row"
  },
  radioTxtView: {
    height: 60,
    justifyContent: "center",
    marginLeft:12
  },
  radioTxt: {
    fontSize: 15
  }
});


export default Radio;
