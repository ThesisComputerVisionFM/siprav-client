import { useAlertContext } from "../context/AlertContext";
import AlertCard from "./AlertCard";

const AlertsSection = () => {
  const { alerts } = useAlertContext();

  return (
    <section className="w-full h-1/2 border-b px-5 pt-4 pb-6 bg-bg-dark flex flex-col">
      <div className="text-center border-b border-b-white mb-3 pb-2">
        <h2 className="font-semibold text-xl text-text-main">Alerts</h2>
      </div>

      {alerts.length === 0 ? (
        <p className="px-4 py-6 text-center flex justify-center items-center grow text-white">
          No se encontraron alertas
        </p>
      ) : (
        <ul className="flex flex-col gap-4 pr-2 overflow-y-auto">
          {alerts.map((alert, i) => (
            <AlertCard key={i} alert={alert} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default AlertsSection;
