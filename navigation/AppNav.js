import React, { useCallback, useEffect, useState, useContext } from "react";
import { Image, View, ActivityIndicator } from "react-native";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";

import Screens from "./Screens";
import AuthStack from "./AuthStack";
import { argonTheme } from "../constants";
import { AuthContext } from "../context/AuthContext";
const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);
  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large "} />
    </View>;
  }
  return (
    <NavigationContainer>
      <GalioProvider theme={argonTheme}>
        <Block flex>{userToken !== null ? <Screens /> : <AuthStack />}</Block>
      </GalioProvider>
    </NavigationContainer>
  );
};
export default AppNav;
