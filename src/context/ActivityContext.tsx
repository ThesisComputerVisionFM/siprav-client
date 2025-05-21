import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import {
  type StateActivityLog,
  type Activity,
  type ActivityContextType,
} from "../types/activity";
import { activityDataMock } from "../mocks/activityLogMocks";

const ActivityContext = createContext<ActivityContextType | null>(null);

export const ActivityProvider = ({ children }: { children: ReactNode }) => {
  const [activityLog, setActivityLog] = useState<StateActivityLog>(
    activityDataMock /*{}*/
  );

  const activityList = useMemo(() => Object.values(activityLog), [activityLog]);

  const updateActivity = (activity: Activity) => {
    setActivityLog((prev) => ({
      ...prev,
      [activity.camera_id]: activity,
    }));
  };

  return (
    <ActivityContext.Provider value={{ activityList, updateActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivityContext = () => {
  const context = useContext(ActivityContext);

  if (!context) {
    throw new Error("");
  }

  return context;
};
