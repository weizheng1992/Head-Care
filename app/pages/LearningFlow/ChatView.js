import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { color } from "../../constants";
import CacheImg from "../../components/CacheImg";
const ChatView = ({ type, txt, managerInfo }) => {
  let chatBgColor = !type ? styles.chatViewWhite : styles.chatViewTheme;
  return (
    <View style={[styles.chat, type ? styles.chatRight : null]}>
      <View style={[styles.chatView, chatBgColor]}>
        {!managerInfo ? (
          <Text style={[styles.chatTxt, type ? styles.chatTxtRight : null]}>
            {txt}
          </Text>
        ) : (
          <View style={styles.manager}>
            <View style={styles.managerInfo}>
              <Text>水水水</Text>
              <Text>信息信息</Text>
            </View>
            <View style={styles.managerImg}>
              <CacheImg
                uri={
                  "http://res.e-healcare.cn/oper/upload/b682b1b84df34159b2fff949ac922210.png"
                }
                styles={{ width: 107, height: 160 }}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
export default ChatView;

const styles = StyleSheet.create({
  chat: {
    flexDirection: "row",
    marginBottom: 16
  },
  chatRight: {
    justifyContent: "flex-end"
  },
  chatView: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12
  },
  chatViewWhite: {
    backgroundColor: color.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20
  },
  chatViewTheme: {
    backgroundColor: color.theme,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20
  },
  chatTxt: {
    fontSize: 16
  },
  chatTxtRight: {
    color: color.white
  }
});
