import { useEffect } from "react";
import io from "socket.io-client";
import { useCameraContext } from "../context/CameraContext";
import { type Camera } from "../types/camera";
import { type Alert } from "../types/alert";
import { useAlertContext } from "../context/AlertContext";
import { SOCKET_URL } from "../utils/constants";

const socket = io(SOCKET_URL);

const useSocket = () => {
  const { updateCamera } = useCameraContext();
  const { addAlert } = useAlertContext();

  useEffect(() => {
    // Cámaras
    socket.on("cameras", (camera: Camera[]) => {
      console.log("Actualización de cámara: ", camera[0]);

      updateCamera(camera[0]);
    });

    // Alertas
    socket.on("alerts", (alert: Alert[]) => {
      console.log("Se ha recibido una alerta: ", alert[0]);

      addAlert(alert[0]);
    });

    return () => {
      socket.off("camera");
      socket.off("alerts");
    };
  }, []);
};

export default useSocket;
