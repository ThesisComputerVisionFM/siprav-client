export enum CameraStatus {
  active = "active",
  inactive = "inactive",
  error = "error",
}

export type Camera = {
  camera_id: string;
  location: string;
  status: keyof typeof CameraStatus;
  stream: string;
  timestamp: string;
  person_count: number;
  detections: {
    class: string;
    confidence: number;
    box: {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    };
  }[];
};

export type StateCameras = {
  [camera_id: string]: Camera;
};

export type CameraContextType = {
  cameraList: Camera[];
  updateCamera: (camera: Camera) => void;
};
