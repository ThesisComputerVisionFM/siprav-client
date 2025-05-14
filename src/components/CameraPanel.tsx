import { MAX_NUMBER_CAMERAS } from "../utils/constants";
import Camera from "./Camera";
import { type Camera as CameraType } from "../types/camera";

const CameraPanel = ({
  camerasToDisplay,
}: {
  camerasToDisplay: CameraType[];
}) => {
  return (
    <section className="h-[calc(100vh-80px)] flex-1 p-4 overflow-y-auto bg-bg-dark border-l border-r">
      {camerasToDisplay.length === 0 ? (
        <p className="size-full text-white flex items-center justify-center">
          No hay cámaras disponibles
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {camerasToDisplay.map((camera, i) => {
            if (i + 1 > MAX_NUMBER_CAMERAS) return;

            if (camera.status !== "active") {
              return (
                <p
                  key={i}
                  className="w-full aspect-video overflow-hidden flex justify-center items-center bg-bg-light text-text-secondary rounded-lg"
                >
                  Cámara desconectada | {camera.camera_id} |{" "}
                  {camera.person_count} | {camera.status}
                </p>
              );
            }

            return <Camera key={camera.camera_id} camera={camera} />;
          })}
        </ul>
      )}
    </section>
  );
};

export default CameraPanel;
