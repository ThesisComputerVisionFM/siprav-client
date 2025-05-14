export enum AlertLevels {
  bajo = "bajo",
  medio = "medio",
  alto = "alto",
}

export type Alert = {
  alert_id: string;
  camera_id: string;
  timestamp: string;
  event_type: string; // "caída" | "intrusión" | "incendio"
  location: string;
  risk_level: keyof typeof AlertLevels;
  response_status: "pendiente" | "en proceso" | "resuelto";
};

export type AlertContextType = {
  alerts: Alert[];
  addAlert: (alert: Alert) => void;
};
