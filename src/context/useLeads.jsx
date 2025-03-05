import React, { createContext, useContext, useReducer } from "react";

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
    leads: [
      {
        id: 121344343434,
        fullName: "Pranab Newar",
        companyName: "ABC Pvt. Ltd.",
        email: "abc@gmail.com",
        phone: 12345755,
        leadSource: "referral",
        companySize: "",
        prefferedContactMethod: "",
        additionalNotes: "",
        leadStatus: "new",
        interestedProducts: ["tech", "crm"],
        newsletter: false,
      },
    ],
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
