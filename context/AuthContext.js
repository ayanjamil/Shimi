import React, { createContext, useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authFinish = useCallback((userUid) => {
    setUserToken(userUid);
    setIsLoading(false);
    storeUserToken(userUid);
  }, []);

  const retrieveData = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem("userToken");
      if (value !== null) {
        setUserToken(value);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    retrieveData();
  }, []);

  const logout = useCallback(() => {
    setUserToken(null);
    setIsLoading(false);
    removeData("userToken");
  }, []);

  const storeUserToken = useCallback(async (userUid) => {
    try {
      await AsyncStorage.setItem("userToken", userUid);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const removeData = useCallback(async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authFinish, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
