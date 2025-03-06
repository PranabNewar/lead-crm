import React, { createContext, useContext, useReducer } from "react";
import { leadsDataDummy } from "../utils/leadsData";

const LeadsContext = createContext();

// Reducer Function
const leadsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LEAD":
      return { ...state, leads: [...state.leads, action.payload] };
    default:
      return state;
  }
};

// Provider Component
export const LeadsProvider = ({ children }) => {
  const initialState = {
    leads: leadsDataDummy,
  };

  const [state, dispatch] = useReducer(leadsReducer, initialState);

  return (
    <LeadsContext.Provider value={{ leads: state.leads, dispatch }}>
      {children}
    </LeadsContext.Provider>
  );
};

// Custom Hook to Use Context
export const useLeads = () => {
  const context = useContext(LeadsContext);
  if (!context) {
    throw new Error("useLeads must be used within a LeadsProvider.");
  }
  return context;
};
