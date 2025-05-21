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
    socket.on("cameras", (camerasReceived: Camera[]) => { // Renombrado para claridad
  console.log("Actualización de cámara: ", camerasReceived[0]);
  if (camerasReceived && camerasReceived.length > 0) { // Buena práctica añadir un check
    // updateCamera(camerasReceived[0]); // Esto solo actualiza una cámara
    // Para actualizar todas las cámaras recibidas:
    camerasReceived.forEach(camera => updateCamera(camera));
  }
});

    // Alertas prueba
    socket.on("alerts", (alertsReceived: Alert[]) => { // Renombrado para claridad
  console.log("Se ha recibido una alerta: ", alertsReceived[0]);
  if (alertsReceived && alertsReceived.length > 0) { // Buena práctica añadir un check
    // addAlert(alertsReceived[0]); // Esto solo añade una alerta
    // Para añadir todas las alertas recibidas:
    alertsReceived.forEach(alert => addAlert(alert));
  }
});

    return () => {
      socket.off("camera");
      socket.off("alerts");
    };
  }, []);
};

export default useSocket;
