import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import mainScreen from '../screens/main'
import createScreen from '../screens/create'
import detailScreen from '../screens/detailrequest'
import historyScreen from '../screens/history'
import detailhistoryScreen from '../screens/detailhistory'
import editScreen from '../screens/edit'
import mainScreenSm from '../screens/mainsm'
import historyScreenSm from '../screens/historysm'
import awaitingScreenSm from '../screens/awaitingsm'
import createScreenSm from '../screens/createsm'
import historyAppScreenSm from '../screens/historyappsm'
import approvalBySm from '../screens/approvalsm'
import historyAppBySm from '../screens/historyappbysm'
import mainScreenHR from '../screens/HR/mainhr'
import historyScreenHR from '../screens/HR/historyreqhr'
import awaitingScreenHR from '../screens/HR/awaitingreqhr'
import createScreenHR from '../screens/HR/createhr'
import historyAppScreenHR from '../screens/HR/historyapphr'
import approvalByHR from '../screens/HR/approvalhr'
import historyAppByHR from '../screens/HR/historyappbyhr'
import detailScreenHR from '../screens/HR/reqdetailhr'
import editScreenHR from '../screens/HR/editreqhr'

const HeaderStyle = () => ({
  headerStyle: {
    backgroundColor: '#0077BC',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: "Lato-Medium",
  },
  headerTintColor: '#FFFFFF',
})

const MainTab = createMaterialTopTabNavigator({
  MainTab: {
    screen: mainScreen,
    navigationOptions: (props) => ({
      title: "REQUEST"
    })
  },
  ProfileTab: {
    screen: historyScreen,
    navigationOptions: (props) => ({
      title: "HISTORY"
    })
  },
},
  {
    lazy: true,
    optimizationsEnabled: true,
    tabBarOptions: {
      activeTintColor: '#1f1f1f',
      inactiveBackgroundColor: '#F00',
      inactiveTintColor: '#afafaf',

      labelStyle: {
        // color:"#1f1f1f", 
        fontSize: 14,
        fontFamily: "Lato-Medium",
        paddingVertical: 1
      },
      pressColor: '#afafaf',
      indicatorStyle: {
        backgroundColor: '#2165d1',
      },
      style: {
        backgroundColor: '#fafcff',
      },
      tabStyle: {
        // marginBottom:2,
        // backgroundColor: '#FFFFFF'
      }
    }
  });

  const MainTabSm = createMaterialTopTabNavigator({
    MainTabSm: {
      screen: mainScreenSm,
      navigationOptions: (props) => ({
        title: "REQUEST"
      })
    },
    HistoryTabSm: {
      screen: historyScreenSm,
      navigationOptions: (props) => ({
        title: "HISTORY"
      })
    },
    AwaitingTabSm: {
      screen: awaitingScreenSm,
      navigationOptions: (props) => ({
        title: "AWAITING REQUEST"
      })
    },
    HistoryAppTabSm: {
      screen: historyAppScreenSm,
      navigationOptions: (props) => ({
        title: "HISTORY APPROVAL"
      })
    }
  },
  {
    lazy: true,
    optimizationsEnabled: true,
    tabBarOptions: {
      activeTintColor: '#1f1f1f',
      inactiveBackgroundColor: '#F00',
      inactiveTintColor: '#afafaf',

      labelStyle: {
        // color:"#1f1f1f", 
        fontSize: 11,
        paddingVertical: 1,
        fontFamily: "Lato-Medium"
      },
      pressColor: '#afafaf',
      indicatorStyle: {
        backgroundColor: '#2165d1',
      },
      style: {
        backgroundColor: '#fafcff',
      },
      tabStyle: {
        // marginBottom:2,
        // backgroundColor: '#FFFFFF'
      }
    }
  });

  const MainTabHR = createMaterialTopTabNavigator({
    MainTabHR: {
      screen: mainScreenHR,
      navigationOptions: (props) => ({
        title: "REQUEST"
      })
    },
    HistoryTabHR: {
      screen: historyScreenHR,
      navigationOptions: (props) => ({
        title: "HISTORY"
      })
    },
    AwaitingTabHR: {
      screen: awaitingScreenHR,
      navigationOptions: (props) => ({
        title: "AWAITING REQUEST"
      })
    },
    HistoryAppTabHR: {
      screen: historyAppScreenHR,
      navigationOptions: (props) => ({
        title: "HISTORY APPROVAL"
      })
    }
  },
  {
    lazy: true,
    optimizationsEnabled: true,
    tabBarOptions: {
      activeTintColor: '#1f1f1f',
      inactiveBackgroundColor: '#F00',
      inactiveTintColor: '#afafaf',

      labelStyle: {
        // color:"#1f1f1f", 
        fontSize: 11,
        paddingVertical: 1,
        fontFamily: "Lato-Medium"
      },
      pressColor: '#afafaf',
      indicatorStyle: {
        backgroundColor: '#2165d1',
      },
      style: {
        backgroundColor: '#fafcff',
      },
      tabStyle: {
        // marginBottom:2,
        // backgroundColor: '#FFFFFF'
      }
    }
  });

export default Main = createStackNavigator({
  MainScreen: {
    screen: MainTab,
    navigationOptions: (props) => ({
      title: "LEAVE",
    })
  },
  DetailScreen: {
    screen: detailScreen,
    navigationOptions: (props) => ({
      title: "REQUEST DETAIL",
    })
  },
  CreateScreen: {
    screen: createScreen,
    navigationOptions: (props) => ({
      title: "REQUEST LEAVE",
    })
  },
  DetailHistoryScreen: {
    screen: detailhistoryScreen,
    navigationOptions: (props) => ({
      title: "HISTORY DETAIL",
    })
  },
  EditScreen: {
    screen: editScreen,
    navigationOptions: (props) => ({
      title: "EDIT REQUEST",
    })
  },
  MainScreenSm: {
    screen: MainTabSm,
    navigationOptions: (props) => ({
      title: "LEAVE",
    })
  },
  CreateScreenSm: {
    screen: createScreenSm,
    navigationOptions: (props) => ({
      title: "REQUEST LEAVE"
    })
  },
  ApprovalScreenSM: {
    screen: approvalBySm,
    navigationOptions: (props) => ({
      title: "AWAITING REQUEST"
    })
  },
  HistoryAppSm: {
    screen: historyAppBySm,
    navigationOptions: (props) => ({
      title: "HISTORY APPROVAL"
    })
  },
  MainScreenHR: {
    screen: MainTabHR,
    navigationOptions: (props) => ({
      title: "LEAVE",
    })
  },
  CreateScreenHR: {
    screen: createScreenHR,
    navigationOptions: (props) => ({
      title: "REQUEST LEAVE"
    })
  },
  DetailScreenHR: {
    screen: detailScreenHR,
    navigationOptions: (props) => ({
      title: "REQUEST DETAIL"
    })
  },
  EditScreenHR: {
    screen: editScreenHR,
    navigationOptions: (props) => ({
      title: "EDIT REQUEST"
    })
  },
  ApprovalScreenHR: {
    screen: approvalByHR,
    navigationOptions: (props) => ({
      title: "AWAITING REQUEST"
    })
  },
  HistoryAppHR: {
    screen: historyAppByHR,
    navigationOptions: (props) => ({
      title: "HISTORY APPROVAL"
    })
  }
},
  {
    initialRouteName: "MainScreen",
    defaultNavigationOptions: HeaderStyle,
  });
