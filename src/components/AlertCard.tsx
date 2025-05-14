import { PiVideoCameraFill } from "react-icons/pi";
import { AlertLevels, type Alert } from "../types/alert";

const alertColorSettings = {
  [AlertLevels.bajo]: "bg-status-caution",
  [AlertLevels.medio]: "bg-status-warning",
  [AlertLevels.alto]: "bg-status-error",
};

const AlertCard = ({ alert }: { alert: Alert }) => {
  return (
    <li className="px-3 py-3 rounded-md bg-bg-light flex flex-col gap-3">
      <div
        className={`px-4 py-0.5 flex justify-center items-center gap-3 cursor-pointer rounded-lg ${
          alertColorSettings[alert.risk_level]
        }`}
      >
        <PiVideoCameraFill className="text-xl shrink-0 text-white" />
        <span className="text-sm text-white">{alert.camera_id}</span>
      </div>

      <div className="border text-sm rounded-md">
        <div className="text-center py-2 px-3 flex flex-col gap-2 text-white">
          <h3 className="font-semibold">{alert.alert_id}</h3>
          <p className="capitalize">{alert.risk_level}</p>
          <p className="capitalize">{alert.event_type}</p>
          <p>{alert.location}</p>
          <p>{alert.timestamp}</p>
        </div>
        <div className="border-t text-white">
          <p className="text-center py-1 px-3 capitalize">
            {alert.response_status}
          </p>
        </div>
      </div>
    </li>
  );
};

export default AlertCard;
