import { Animated, Dimensions, Easing, View, Pressable } from "react-native";
// header for screens
import { Header, Icon } from "../components";
import { argonTheme, tabs } from "../constants";

import Articles from "../screens/Articles";
import { Block } from "galio-framework";

// screens
import Elements from "../screens/Elements";
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import React from "react";
import Register from "../screens/Register";
import Wishlist from "../screens/WishList";
import ProductScreen from "../screens/ProductScreen";
import SearchScreen from "../screens/SearchScreen";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ForgotScreen from "../screens/ForgotScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// for the bottom tab navigation icons
// need to reduce this in later revisions for optimisation
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// also need to remove redundant files from galio framework

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function AuthStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ForgotScreen"
        component={ForgotScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
