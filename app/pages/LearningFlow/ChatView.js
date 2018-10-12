import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,

} from "react-native";
import { color } from "../../constants";
import CacheImg from "../../components/CacheImg";
const ChatView = ({ type, txt, managerInfo }) => {
  if (type < 2) {
    let chatBgColor = !type ? styles.chatViewWhite : styles.chatViewTheme;
    return (
      <View style={[styles.chat, type ? styles.chatRight : null]}>
        <View style={[styles.chatView, chatBgColor]}>
          <Text style={[styles.chatTxt, type ? styles.chatTxtRight : null]}>
            {txt}
          </Text>
        </View>
      </View>
    );
  } else if (type === 2) {
    return (
      <View style={styles.manager}>
        <View style={styles.managerInfo}>
          <Text style={styles.managerName}>{managerInfo.name}</Text>
          <Text style={styles.managerDesc}>{managerInfo.remark}</Text>
        </View>
        <View style={styles.managerImg}>
          <CacheImg
            uri={managerInfo.avatar}
            styles={{
              width: 107,
              height: 160,
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
              overflow: "hidden"
            }}
          />
        </View>
      </View>
    );
  } 
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
  },
  manager: {
    flexDirection: "row",
    flex: 1,
    height: 160,
    backgroundColor: color.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 16
  },
  managerInfo: {
    flex: 1,
    padding: 16
  },
  managerName: {
    fontSize: 16,
    color: color.Major,
    marginBottom: 16
  },
  managerDesc: {
    fontSize: 14,
    color: color.secondary
  },
  managerImg: {
    width: 107,
    height: 160,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20
  }
});
