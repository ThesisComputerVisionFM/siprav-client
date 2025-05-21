import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import {
  Camera,
  type CameraContextType,
  type StateCameras,
} from "../types/camera";

const CameraContext = createContext<CameraContextType | null>(null);

export const CameraProvider = ({ children }: { children: ReactNode }) => {
  // El estado será un objeto de objetos
  const [cameraData, setCameraData] = useState<StateCameras>({});

  const cameraList = useMemo(() => Object.values(cameraData), [cameraData]);

  const updateCamera = (camera: Camera) => {
    setCameraData((prev) => {
      const existing = prev[camera.camera_id];

      if (existing && existing.stream === camera.stream) return prev;

      return { ...prev, [camera.camera_id]: camera };
    });
  };

  return (
    <CameraContext.Provider value={{ cameraList, updateCamera }}>
      {children}
    </CameraContext.Provider>
  );
};

export const useCameraContext = () => {
  const context = useContext(CameraContext);

  if (!context) {
    throw new Error("");
  }

  return context;
};
