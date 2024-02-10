import React, { children, createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoding, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const authFinish = (token) => {
    setUserToken(token);
    setIsLoading(false);
    console.log(token);
  };
  const logout = () => {
    setUserToken(null);
    setIsLoading(false);
  };
  return (
    <AuthContext.Provider value={{ authFinish, logout, isLoding, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
