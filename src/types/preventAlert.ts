export enum PreventAlertStates {
  on = "on",
  off = "off",
  auto = "auto",
}

export type PreventAlert = {
  zone_id: string;
  name: string;
  location: string;
  alert_id: string;
  risk_level: string;
  actions: {
    siren: keyof typeof PreventAlertStates;
    strobe_light: keyof typeof PreventAlertStates;
    audio_alert: keyof typeof PreventAlertStates;
    mobile_notifications: keyof typeof PreventAlertStates;
  };
  timestamp: string;
};

export type PreventAlertContextType = {
  preventAlerts: PreventAlert[];
  addPreventAlert: (preventAlert: PreventAlert) => void;
};
