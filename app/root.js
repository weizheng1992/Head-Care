import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { color } from "./constants";
import { Text } from "react-native";

import Tab from "./components/Tab";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Membership from "./pages/Membership";
import Mine from "./pages/Mine";

import PatientManagement from "./pages/Mine/PatientManagement";
import AddPatient from "./pages/Mine/PatientManagement/AddPatient";
import UploadCase from "./pages/Mine/UploadCase";
import Feedback from "./pages/Mine/Feedback";
import SetUp from "./pages/Mine/SetUp";
import ChangePhoneNum from "./pages/Mine/SetUp/ChangePhoneNum";

const HomeStack = createStackNavigator({
  HomeHome: Home
});
const InfoStack = createStackNavigator({
  InfoHome: Info
});
const MembershipStack = createStackNavigator({
  MembershipHome: Membership
});
const MineStack = createStackNavigator({
  MineHome: Mine
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: "首页",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      }
    },
    Info: {
      screen: InfoStack,
      navigationOptions: {
        title: "资讯",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="dvr" size={25} color={tintColor} />
        )
      }
    },
    Membership: {
      screen: MembershipStack,
      navigationOptions: {
        title: "会籍",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="credit-card" size={25} color={tintColor} />
        )
      }
    },
    Mine: {
      screen: MineStack,
      navigationOptions: {
        title: "我",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="person-outline" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    lazy: true,
    tabBarPosition: "bottom",
    tabBarComponent: props => <Tab {...props} />,
    tabBarOptions: {
      activeTintColor: "#fff",
      inactiveTintColor: "#999999",

      showIcon: true,
      style: {
        backgroundColor: color.theme,
        color: "#fff"
      },
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {
        padding: 0
      }
    }
  }
);

TabNavigator.navigationOptions = {
  // Hide the header from AppNavigator stack
  header: null
};

const App = createStackNavigator(
  {
    Main: {
      screen: TabNavigator
    },
    PatientManagement: {
      screen: PatientManagement
    },
    AddPatient: {
      screen: AddPatient
    },
    UploadCase: {
      screen: UploadCase
    },
    Feedback: {
      screen: Feedback
    },
    SetUp: {
      screen: SetUp
    },
    ChangePhoneNum: {
      screen: ChangePhoneNum
    }
  },
  {
    headerMode: "screen",
    navigationOptions: {
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTitleStyle: {
        color: "#000",
        fontSize: 20,
        fontWeight: "normal"
      },
      headerTintColor: "#666"
    }
  }
);

export default App;
