import { useState, useEffect } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import {formatFecha, convertirMinutosAHoras} from "@/app/utilidades";


const TareaCompletada = ({ tarea, handleCambiarEstadoTarea }) => {
  const [isChecked, setIsChecked] = useState(true);

  
  const handleCheckboxChange = (event) => {
    const estaCompletada = event.target.checked;
    console.log(estaCompletada);
    setIsChecked(estaCompletada);
    handleCambiarEstadoTarea(tarea.id, estaCompletada);
  };
  

  useEffect(() => {
    setIsChecked(tarea.estado === "completada");
  }, [tarea.estado]);

  return (
      <li className="border-b py-2 my-5">
        <div
          className={`grid grid-cols-12 justify-center items-center ${
            isChecked | (tarea?.estado === "completada") ? "line-through" : ""
          }`}
        >
          <div className="col-span-1">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-500"
              onChange={handleCheckboxChange}
              checked={isChecked}
            />
          </div>
          <div className="col-span-10">
            <p className="ml-3 text-sm">
              {" "}
              <span className="font-bold capitalize">{`${tarea?.plataforma} - ${formatFecha(tarea?.fecha_vencimiento)} - ${convertirMinutosAHoras(tarea?.hora)}:`}</span>{" "}
              {tarea?.descripcion}
            </p>
          </div>
          {/* <div className="col-span-1">
            <button
              className="text-blue-800"
              onClick={() => handleUpdateItem(tarea?.id)}
            >
              <PencilSquareIcon className="h-5 w-5 text-blue-600 font-black cursor-pointer" />
            </button>
          </div> */}
        </div>
      </li>
  );
};

export default TareaCompletada;
