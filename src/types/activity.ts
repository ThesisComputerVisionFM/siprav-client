export enum ActivityStatus {
  active = "active",
  inactive = "inactive",
  error = "error",
}

export type Activity = {
  camera_id: string;
  timestamp: string;
  location: string;
  status: keyof typeof ActivityStatus;
  person_count: number;
};

export type StateActivityLog = {
  [camera_id: string]: Activity;
};

export type ActivityContextType = {
  activityList: Activity[];
  updateActivity: (activity: Activity) => void;
};
