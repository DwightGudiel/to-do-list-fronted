import { useState, useEffect } from "react";

function FiltroAdmin({ onFilterChange }) {
  const [selectedStatus, setSelectedStatus] = useState("todas");
  const [selectedUser, setSelectedUser] = useState("todos");

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  useEffect(() => {
    onFilterChange({ selectedStatus, selectedUser });
  }, [selectedStatus, selectedUser, onFilterChange]);


  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold mb-4 my-10">Filtros</h3>
      <div className="flex items-center flex-col md:flex-row gap-4">
        <label className="font-bold" htmlFor="">Estado: </label>
        <select
          className="form-select block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={selectedStatus}
          onChange={handleStatusChange}
        >
          <option value="todas">Todas</option>
          <option value="atrasada">Atrasada</option>
          <option value="completada">Completada</option>
          <option value="pendiente">Pendiente</option>
        </select>

        <label className="font-bold" htmlFor="">Usuario: </label>
        
        <select
          className="form-select block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={selectedUser}
          onChange={handleUserChange}
        >
          <option value="todos">Todos</option>
          <option value="Carlos">Carlos</option>
          <option value="Dwight Gudiel">Dwight Gudiel</option>
        </select>
      </div>
    </div>
  );
}

export default FiltroAdmin;
