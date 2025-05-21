import { createContext, ReactNode, useContext, useState } from "react";
import { AlertContextType, type Alert } from "../types/alert";

const AlertContext = createContext<AlertContextType | null>(null);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const addAlert = (alert: Alert) => {
    setAlerts((prev) => [alert, ...prev]);
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error("");
  }

  return context;
};
