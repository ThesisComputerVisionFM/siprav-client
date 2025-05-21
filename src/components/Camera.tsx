import { type Camera } from "../types/camera";

const Camera = ({ camera }: { camera: Camera }) => {
  return (
    <li
      className="w-full aspect-video overflow-hidden shadow-md relative rounded-lg"
      id={camera.camera_id}
    >
      <img
        src={camera.stream}
        alt="Cámara"
        className="w-full h-full object-cover"
      />
      <div className="text-center text-white bg-black/60 py-1 absolute bottom-0 w-full">
        Camera {camera.camera_id} | {camera.person_count}
      </div>
    </li>
  );
};

export default Camera;
