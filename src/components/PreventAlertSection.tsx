import { PiSirenFill } from "react-icons/pi";
import { usePreventAlertContext } from "../context/PreventAlertsContext";
import { PreventAlertStates } from "../types/preventAlert";

const preventAlertColorSettings = {
  [PreventAlertStates.on]: "text-status-success",
  [PreventAlertStates.off]: "text-status-inactive",
  [PreventAlertStates.auto]: "text-status-info",
};

const PreventAlertSection = () => {
  const { preventAlerts } = usePreventAlertContext();
  return (
    <section className="w-full h-1/2 px-5 pt-4 pb-6 bg-bg-dark flex flex-col">
      <div className="text-center border-b border-b-white mb-3 pb-2">
        <h2 className="font-semibold text-xl text-text-main">Prevent Alerts</h2>
        <p className="text-text-secondary">Alert status</p>
      </div>

      {preventAlerts && preventAlerts.length === 0 ? (
        <p className="px-4 py-6 text-center flex justify-center items-center grow text-white">
          No hay cámaras disponibles
        </p>
      ) : (
        <ul className="flex flex-col gap-4 pr-2 overflow-y-auto mt-2">
          {preventAlerts.map((preventAlert) => (
            <li
              key={preventAlert.name}
              className={`flex justify-center items-center gap-4 cursor-pointer ${
                preventAlertColorSettings[preventAlert.actions.siren]
              }`}
            >
              <PiSirenFill className="text-2xl shrink-0" />
              <span className="">{preventAlert.name}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PreventAlertSection;
