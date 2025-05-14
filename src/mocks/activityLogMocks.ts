import { type StateActivityLog } from "../types/activity";

export const activityDataMock: StateActivityLog = {
  cam_001: {
    camera_id: "cam_001",
    timestamp: "2025-05-03T12:47:10Z",
    location: "Entrada principal",
    status: "active",
    person_count: 5,
  },
  cam_002: {
    camera_id: "cam_002",
    timestamp: "2025-05-03T12:47:10Z",
    location: "Pasillo norte",
    status: "active",
    person_count: 0,
  },
  cam_003: {
    camera_id: "cam_003",
    timestamp: "2025-05-03T12:47:10Z",
    location: "Estacionamiento",
    status: "inactive",
    person_count: 2,
  },
  cam_004: {
    camera_id: "cam_004",
    timestamp: "2025-05-03T12:47:10Z",
    location: "Escalera de emergencia",
    status: "active",
    person_count: 1,
  },
  cam_005: {
    camera_id: "cam_005",
    timestamp: "2025-05-03T12:47:10Z",
    location: "Recepción",
    status: "active",
    person_count: 0,
  },
  cam_006: {
    camera_id: "cam_006",
    timestamp: "2025-05-03T12:47:10Z",
    location: "Salón A",
    status: "active",
    person_count: 0,
  },
  cam_007: {
    camera_id: "cam_007",
    timestamp: "2025-05-03T12:47:10Z",
    location: "Pasillo sur",
    status: "active",
    person_count: 3,
  },
  cam_008: {
    camera_id: "cam_008",
    timestamp: "2025-05-03T12:47:10Z",
    location: "Salón B",
    status: "inactive",
    person_count: 0,
  },
  cam_009: {
    camera_id: "cam_009",
    timestamp: "2025-05-03T12:47:10Z",
    location: "Área de carga",
    status: "active",
    person_count: 7,
  },
};
