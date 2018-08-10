import React, { Component } from "react";

import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  FlatList
} from "react-native";
import BasePage from "../../components/BasePage";
import Icon from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";
import { screen } from "../../until";
import { color } from "../../constants";
import PageLoading from '../../components/PageLoading';
export default class Info extends BasePage {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state={
      refreshing:false,
      dataArray:[1,2,3]
    }
  }

componentDidMount(){
  
}

  onRefresh=()=>{
    this.setState({refreshing:true});
    setTimeout(()=>{
      this.setState({refreshing:false})
    },1000)
  }
  _renderItemView=()=>{
    return( <View style={styles.slide1}>
      <Image
        source={require("../../img/splash.png")}
        style={styles.fullImg}
      />
      <View style={styles.swiperTxt}>
        <Text style={styles.swiperTitle}>Hello Swiper</Text>
        <Text style={styles.swiperInfo}>桑德拉空间大垃圾离得近</Text>
      </View>
    </View>)
  }

  _renderFooter(){
    if (this.state.showFoot === 1) {
        return (
            <View style={{height:30,alignItems:'center',justifyContent:'flex-start',}}>
                <Text style={{color:'#999999',fontSize:14,marginTop:5,marginBottom:5,}}>
                    没有更多数据了
                </Text>
            </View>
        );
    } else if(this.state.showFoot === 2) {
        return (
            <View style={styles.footer}>
                <ActivityIndicator />
                <Text>正在加载更多数据...</Text>
            </View>
        );
    } else if(this.state.showFoot === 0){
        return (
            <View style={styles.footer}>
                <Text></Text>
            </View>
        );
    }
}

  render() {
    const { refreshing,dataArray } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.wrapper}
          pagingEnabled={true}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.onRefresh}
            />
          }
          onScrollEndDrag={this.onScrollEndDrag}
          data={dataArray}
          renderItem={this._renderItemView}
       />
        <View style={styles.header}>
          <TouchableOpacity style={styles.rightBtn}>
            <Text style={styles.btnTxt}>...</Text>
          </TouchableOpacity>
        </View>
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
  },
  wrapper:{
    flex:1,
  },
  fullImg: {
    width: screen.width,
    height: screen.height - 43,
    resizeMode: "cover"
  },
  swiperTxt: {
    position: "absolute",
    bottom: 0,
    height: 200,
    width: screen.width,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20
  },
  swiperTitle: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 20
  },
  swiperInfo: {
    color: "#fff",
    fontSize: 16
  },
  header: {
    position: "absolute",
    top: 0,
    height: 50,
    width: screen.width,
    alignItems: "flex-end"
  },
  rightBtn: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  btnTxt: {
    color: color.Major,
    fontSize: 16
  }
});
