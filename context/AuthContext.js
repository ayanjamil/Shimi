import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authFinish = (userUid) => {
    setUserToken(userUid);
    setIsLoading(false);
    storeUserToken(userUid);
  };

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("userToken");
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.error(error);
    }
    return null;
  };

  useEffect(() => {
    retrieveData().then((token) => {
      setUserToken(token);
    });
  }, []);

  const logout = () => {
    setUserToken(null);
    setIsLoading(false);
  };

  const storeUserToken = async (userUid) => {
    try {
      await AsyncStorage.setItem("userToken", userUid);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ authFinish, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
