import React, { createContext, useContext, useState, useReducer } from "react";

const initialData = [];
export const AppContext = createContext(null);
function dataReducer(data, action) {
  switch (action.type) {
    case "wishlistAdd": {
      const { id } = action.payload;
      console.log("activity payload value", action.payload);

      return [...data, { id }];
      // return [...data, action.payload];
    }
    case "wishlistDelete": {
      const { id } = action;
      console.log(data.filter((t) => t.id !== id));
      return data.filter((t) => t.id !== id);
      //destructure data and use console.log
    }
    case "setInitialData": {
      console.log("data inot  setInitialData part", action.payload);
      return action.payload;
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
