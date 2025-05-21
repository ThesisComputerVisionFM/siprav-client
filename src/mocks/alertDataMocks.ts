import { type Alert } from "../types/alert";

export const alertDataMock: Alert[] = [
  {
    alert_id: "alert_20250503_001",
    timestamp: "2025-05-03T13:02:10Z",
    event_type: "caída",
    location: "Zona A - Pasillo 1",
    risk_level: "alto",
    response_status: "pendiente",
    camera_id: "cam_002",
  },
  {
    alert_id: "alert_20250503_002",
    timestamp: "2025-05-03T12:57:10Z",
    event_type: "intrusión",
    location: "Zona B - Entrada trasera",
    risk_level: "medio",
    response_status: "resuelto",
    camera_id: "cam_003",
  },
  {
    alert_id: "alert_20250503_003",
    timestamp: "2025-05-03T13:01:50Z",
    event_type: "incendio",
    location: "Zona C - Cocina industrial",
    risk_level: "alto",
    response_status: "en proceso",
    camera_id: "cam_006",
  },
  {
    alert_id: "alert_20250503_004",
    timestamp: "2025-05-03T12:59:20Z",
    event_type: "persona sospechosa",
    location: "Zona D - Recepción",
    risk_level: "bajo",
    response_status: "pendiente",
    camera_id: "cam_005",
  },
];
