import { PiVideoCameraFill } from "react-icons/pi";
import { PiVideoCameraSlashFill } from "react-icons/pi";
import { useCameraContext } from "../context/CameraContext";
import { type Camera, CameraStatus } from "../types/camera";

// Configuración para íconos y clases
const cameraConfig = {
  [CameraStatus.active]: {
    Icon: PiVideoCameraFill,
    color: "text-status-success",
  },
  [CameraStatus.inactive]: {
    Icon: PiVideoCameraSlashFill,
    color: "text-status-inactive",
  },
  [CameraStatus.error]: {
    Icon: PiVideoCameraFill,
    color: "text-status-error",
  },
};

const CameraSection = ({
  updateCamerasToDisplay,
}: {
  updateCamerasToDisplay: (camera: Camera) => void;
}) => {
  const { cameraList } = useCameraContext();

  return (
    <section className="w-full h-1/2 border-b px-5 pt-4 pb-6 bg-bg-dark flex flex-col">
      <div className="text-center border-b border-b-white mb-3 pb-2">
        <h2 className="font-semibold text-xl text-text-main">Cameras</h2>
        <p className="text-text-secondary">Camera status</p>
      </div>

      {cameraList.length === 0 ? (
        <p className="px-4 py-6 text-center flex justify-center items-center grow text-white">
          No hay cámaras disponibles
        </p>
      ) : (
        <ul className="flex flex-col gap-4 pr-2 overflow-y-auto mt-2">
          {cameraList.map((camera) => {
            const config = cameraConfig[camera.status];

            if (!config) return null;

            const { Icon, color } = config;

            return (
              <li
                key={camera.camera_id}
                className="flex justify-center items-center gap-4 cursor-pointer"
                onClick={() => updateCamerasToDisplay(camera)}
              >
                <Icon className={`text-2xl shrink-0 ${color}`} />
                <span className={color}>{camera.camera_id}</span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default CameraSection;
