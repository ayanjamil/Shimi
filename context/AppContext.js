import React, { createContext, useContext, useState, useReducer } from "react";

const initialData = [];
export const AppContext = createContext(null);
function dataReducer(data, action) {
  switch (action.type) {
    case "wishlistAdd": {
      const { id, image, imageURL, link, title } = action.payload;
      const newData = data.filter((item) => item.id !== id);
      return [...newData, { id, image, imageURL, link, title }];
    }
    case "wishlistDelete": {
      const { id } = action;
      return data.filter((t) => t.id !== id);
    }
    case "setInitialData": {
      return [...action.payload];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
export function AppContextProvider({ children }) {
  const [data, dispatch] = useReducer(dataReducer, initialData);
  return (
    <AppContext.Provider value={{ data, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
