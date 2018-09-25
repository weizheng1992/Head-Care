
import React from 'react';
import {WebView,BackHandler,StyleSheet,View,TouchableOpacity,Text}from 'react-native';
import PageLoading from '../../components/PageLoading';
import Icon from "react-native-vector-icons/Ionicons";
let canGoBack = false;
export default class WebViewPage extends React.Component{
    static navigationOptions = ({ navigation }) => ({
        title: '',
        headerRight: (
         <View style={styles.headerRight}>
            <TouchableOpacity style={styles.share}>
                <Text>分析</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.collect}>
                <Text>收藏</Text>
            </TouchableOpacity>
         </View>
        )
      });
    constructor(props) {
        super(props);
        this.state = {
          isShareModal: false
        };
      }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.goBack);
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.goBack);
      }
    
      onNavigationStateChange = (navState) => {
        canGoBack = navState.canGoBack;
      };

      goBack = () => {
        if (this.state.isShareModal) {
          this.setState({
            isShareModal: false
          });
          return true;
        } else if (canGoBack) {
          this.webview.goBack();
          return true;
        }
        return false;
      };

    renderLoading=()=>(<PageLoading/>)
    render(){
        return(
            <WebView
            ref={(ref) => {
              this.webview = ref;
            }}
            style={styles.base}
            source={{ uri: 'http://10.90.50.2:3080/member/newsDetails.html?id=192'}}
            javaScriptEnabled
            domStorageEnabled
            startInLoadingState
            scalesPageToFit
            decelerationRate="normal"
            onShouldStartLoadWithRequest={() => {
              const shouldStartLoad = true;
              return shouldStartLoad;
            }}
            onNavigationStateChange={this.onNavigationStateChange}
            renderLoading={this.renderLoading}
          />
        )
    }
}


const styles = StyleSheet.create({
    base: {
      flex: 1
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#FFF'
    },
    headerRight:{
        flex: 1,
        flexDirection: 'row',
     
    },
    share:{
        width:50,
        height:50,
        alignItems: "center",
        justifyContent: "center",
    },
    collect:{
        width:50,
        height:50,
        alignItems: "center",
        justifyContent: "center",
    }
    
   
  });