import React, { Component } from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { Button, Root } from 'native-base';
//import SplashScreen from 'react-native-splash-screen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import Notification from './src/drawer/notifications';
import Payment from './src/drawer/payment';
import Account from './src/drawer/account_settings';
//import Inbox from './src/screen/drawer/Inbox';
import StartTrip from './src/screen/job_post/UploadSuccess';
import UserProfile from './src/screen/user_profile/UserProfile';
import HireDetails from './src/screen/Hire/HireDetails';
import HireOverview from './src/screen/Hire/HireOverview';
import Icon from 'react-native-vector-icons/Ionicons';
import PaidNow from './src/screen/billing/PaidNow';
import MyJob from './src/screen/job_post/DisplayRoute';
import PaymentMethod from './src/screen/billing/PaymentMethod';
import PaymentDetails from './src/screen/billing/PaymentDetails';
import MyOrderDetail from './src/screen//job_post/MyOrderDetail';
import JobSettings from './src/screen/job_post/JobSettings';
import OnGoingJob from './src/screen/user_profile/OnGoingJob';
import AvailabilityView from './src/screen/user_profile/availabilityView';
import JobComplete from './src/screen/user_profile/jobComplete';
import DisplayRoute from './src/screen/job_post/DisplayRoute';
import AnotherRoute from './src/screen/job_post/AnotherRoute';
import InputItem from './src/screen/job_post/InputItem';
import Schedule from './src/screen/job_post/Schedule';
//import InputItemtwo from './src/screen/job_post/InputItemtwo';
import StartRoute from './src/screen/job_post/StartRoute';
//import RouteMap from './src/screen/job_post/RouteMap';
//import RouteDetails from './src/screen/job_post/RouteDetails';
//import NewStartScreen from './src/screen/auth/SplashScreen';

console.disableYellowBox = true;


navigator.geolocation = require('@react-native-community/geolocation');


const DashboardStackNavigator = createStackNavigator(
  {
    //DashboardTabNavigator: DashboardTabNavigator,
    //UploadJob: UploadJob,
    //UploadSuccess: UploadSuccess,
    StartTrip: StartTrip,
    PaymentDetails: PaymentDetails,
    UserProfile: UserProfile,
    HireDetails: HireDetails,
    AnotherRoute: AnotherRoute,
    InputItem: InputItem,
    //InputItemtwo: InputItemtwo,
    StartRoute: StartRoute,
    Schedule: Schedule,
    //RouteMap: RouteMap,
    //RouteDetails: RouteDetails,
    //HireProgress: HireProgress,
    DisplayRoute: DisplayRoute,
    PaymentMethod: PaymentMethod,
    JobSettings: JobSettings,
    PaidNow: PaidNow,
    HireOverview: HireOverview,
    MyOrderDetail: MyOrderDetail,
    JobComplete: JobComplete,
    OnGoingJob: OnGoingJob,
    AvailabilityView: AvailabilityView,

  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: () =>
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />



      };
    }
  }
);


<Root>
  <DashboardStackNavigator />
</Root>



export default AppContainer = createAppContainer(DashboardStackNavigator);