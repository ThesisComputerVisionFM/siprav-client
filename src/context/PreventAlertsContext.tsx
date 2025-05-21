import { createContext, ReactNode, useContext, useState } from "react";
import {
  type PreventAlert,
  type PreventAlertContextType,
} from "../types/preventAlert";
import { preventAlertMocks } from "../mocks/preventAlertMocks";

const PreventAlertContext = createContext<PreventAlertContextType | null>(null);

export const PreventAlertProvider = ({ children }: { children: ReactNode }) => {
  const [preventAlerts, setPreventAlerts] = useState<PreventAlert[]>(
    preventAlertMocks /*[]*/
  );

  const addPreventAlert = (preventAlert: PreventAlert) => {
    setPreventAlerts((prev) => [preventAlert, ...prev]);
  };

  return (
    <PreventAlertContext.Provider value={{ preventAlerts, addPreventAlert }}>
      {children}
    </PreventAlertContext.Provider>
  );
};

export const usePreventAlertContext = () => {
  const context = useContext(PreventAlertContext);

  if (!context) {
    throw new Error("");
  }

  return context;
};
