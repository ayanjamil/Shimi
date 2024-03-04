import { Dimensions } from "react-native";
// header for screens
import { Header } from "../components";

// screens
import Onboarding from "../screens/Onboarding";
import React from "react";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ForgotScreen from "../screens/ForgotScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
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
