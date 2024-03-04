import React, { createContext, useContext, useState, useReducer } from "react";

export const AppContext = createContext(null);
export const AppDispatchContext = createContext(null);

export function AppContextProvider({ children }) {
  const [data, dispatch] = useReducer(dataReducer, initialData);
  //the resultant state is stored in data

  return (
    <AppContext.Provider value={data}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}
function dataReducer(data, action) {
  switch (action.type) {
    case "wishlistAdd": {
      return [...data, {}];
    }
    case "wishlistDelete": {
      // return tasks.filter((t) => t.id !== action.id);
    }
    case "setInitialData": {
      return action.payload;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
const initialData = []; // api call

export function useAppData() {
  return useContext(AppContext);
}

export function useAppDispatch() {
  return useContext(AppDispatchContext);
}
