import { Animated, Dimensions, Easing } from "react-native";
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

// function ElementsStack(props) {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         mode: "card",
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen
//         name="Elements"
//         component={Elements}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header title="Elements" navigation={navigation} scene={scene} />
//           ),
//           cardStyle: { backgroundColor: "#F8F9FE" },
//         }}
//       />
//       <Stack.Screen
//         name="Pro"
//         component={Pro}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               title=""
//               back
//               white
//               transparent
//               navigation={navigation}
//               scene={scene}
//             />
//           ),
//           headerTransparent: true,
//         }}
//       />
//     </Stack.Navigator>
//   );
// }


function ArticlesStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Articles" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
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

function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
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

// need to change header options to remove header or remove icon in Header.js
function HomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
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

export default function OnboardingStack(props) {
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
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

// bottom tab navigation
function AppStack(props) {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: "#DD4A65", // Color of the icon and label for the active tab
        inactiveTintColor: "black", // Color of the icon and label for the inactive tabs
        labelStyle: {
          fontSize: 16, // Font size of the tab label
        },
        style: {
          backgroundColor: "blue", // Background color of the bottom tab bar
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Wishlist"
        component={ArticlesStack}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="heart" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}