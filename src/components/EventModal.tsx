import { useState } from "react";
import { type EventModalProps } from "../types/modal";
import Modal from "./Modal";

enum TypeOfFilters {
  query = "query",
  type = "type",
  year = "year",
  month = "month",
  location = "location",
}

// TODO: Agregar un botón de quitar filtros
const EventModal = ({ isOpen, close }: EventModalProps) => {
  const [filters, setFilters] = useState({
    [TypeOfFilters.query]: "",
    [TypeOfFilters.type]: "",
    [TypeOfFilters.year]: "",
    [TypeOfFilters.month]: "",
    [TypeOfFilters.location]: "",
  });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    console.log("Los filtros son: ", filters); // Una cadena vacía no se envía al servidor
    console.log("Parámetro de Consulta formado: ", params.toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Se escribió: ", e.target.value);

    setFilters((prev) => ({ ...prev, query: e.target.value }));
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(
      "Se ha seleccionado el filtro: ",
      e.target.name,
      "Con la opción: ",
      e.target.value
    );
    // Si
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("Actualizando datos.");
  };

  const removeFilters = () => {
    setFilters({
      [TypeOfFilters.query]: "",
      [TypeOfFilters.type]: "",
      [TypeOfFilters.year]: "",
      [TypeOfFilters.month]: "",
      [TypeOfFilters.location]: "",
    });
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-6 flex-wrap">
          {/* Búsqueda */}
          <form onSubmit={handleSearch} className="flex items-center gap-6">
            <input
              type="text"
              name={TypeOfFilters.query}
              value={filters[TypeOfFilters.query]}
              placeholder="Event name"
              className="outline-0 border py-2 px-4 rounded"
              onChange={handleInputChange}
            />

            {/* Filtros */}
            <div className="flex items-center gap-10">
              <select
                name={TypeOfFilters.type}
                id=""
                className="outline-0 cursor-pointer"
                onChange={handleFilterChange}
                value={filters[TypeOfFilters.type]}
              >
                <option>Type</option>
                <option value="Tipo 1">Tipo 1</option>
                <option value="Tipo 2">Tipo 2</option>
                <option value="Tipo 3">Tipo 3</option>
              </select>
              <select
                name={TypeOfFilters.year}
                id=""
                className="outline-0 cursor-pointer"
                onChange={handleFilterChange}
                value={filters[TypeOfFilters.year]}
              >
                <option value={0}>Year</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
              <select
                name={TypeOfFilters.month}
                id=""
                className="outline-0 cursor-pointer"
                onChange={handleFilterChange}
                value={filters[TypeOfFilters.month]}
              >
                <option value={0}>Month</option>
                <option value="Enero">Enero</option>
                <option value="Febrero">Febrero</option>
                <option value="Marzo">Marzo</option>
              </select>
              <select
                name={TypeOfFilters.location}
                id=""
                className="outline-0 cursor-pointer"
                onChange={handleFilterChange}
                value={filters[TypeOfFilters.location]}
              >
                <option value={0}>Location</option>
                <option value="Ventanilla">Ventanilla</option>
                <option value="Santa Anita">Santa Anita</option>
                <option value="San Miguel">San Miguel</option>
              </select>
            </div>

            <button className="bg-interactive-blue text-white py-2 px-6 rounded shadow-md transition-colors duration-300 ease-in-out hover:bg-blue-600">
              Search
            </button>
          </form>

          <div>
            <button
              className="bg-interactive-blue text-white py-2 px-6 rounded shadow-md transition-colors duration-300 ease-in-out hover:bg-blue-600"
              onClick={removeFilters}
            >
              Remove filters
            </button>
          </div>

          <form onSubmit={handleUpdate}>
            <button className="bg-interactive-blue text-white py-2 px-6 rounded shadow-md transition-colors duration-300 ease-in-out hover:bg-blue-600">
              Update
            </button>
          </form>
        </div>

        {/* Tabla */}
        <table className="w-full table-auto border-collapse border">
          <thead>
            <tr className="text-center">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Timestamp</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">File URL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">User logged in</td>
              <td className="border px-4 py-2">Caída</td>
              <td className="border px-4 py-2">2025-25-03 08:15:32</td>
              <td className="border px-4 py-2">Parque El Olivar</td>
              <td className="border px-4 py-2">https://example.com/log1.txt</td>
            </tr>
            <tr className="text-center">
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">User logged in</td>
              <td className="border px-4 py-2">Caída</td>
              <td className="border px-4 py-2">2025-25-03 08:15:32</td>
              <td className="border px-4 py-2">Parque El Olivar</td>
              <td className="border px-4 py-2">https://example.com/log1.txt</td>
            </tr>
            <tr className="text-center">
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">User logged in</td>
              <td className="border px-4 py-2">Caída</td>
              <td className="border px-4 py-2">2025-25-03 08:15:32</td>
              <td className="border px-4 py-2">Parque El Olivar</td>
              <td className="border px-4 py-2">https://example.com/log1.txt</td>
            </tr>
            <tr className="text-center">
              <td className="border px-4 py-2">4</td>
              <td className="border px-4 py-2">User logged in</td>
              <td className="border px-4 py-2">Caída</td>
              <td className="border px-4 py-2">2025-25-03 08:15:32</td>
              <td className="border px-4 py-2">Parque El Olivar</td>
              <td className="border px-4 py-2">https://example.com/log1.txt</td>
            </tr>
            <tr className="text-center">
              <td className="border px-4 py-2">5</td>
              <td className="border px-4 py-2">User logged in</td>
              <td className="border px-4 py-2">Caída</td>
              <td className="border px-4 py-2">2025-25-03 08:15:32</td>
              <td className="border px-4 py-2">Parque El Olivar</td>
              <td className="border px-4 py-2">https://example.com/log1.txt</td>
            </tr>
          </tbody>
        </table>

        {/* Paginado */}
        <div className="flex flex-col items-center gap-1">
          <p>Existen 300 eventos registrados.</p>
          <p>Límite de eventos a mostrar: 100</p>
        </div>
      </div>
    </Modal>
  );
};

export default EventModal;
